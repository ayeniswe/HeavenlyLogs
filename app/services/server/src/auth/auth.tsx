import { Response } from 'express';
import { DB } from '../api/db.js';
import { HTTP, Message } from '../utils/http.js';
import crypto from 'crypto';

/**
 * Stores a cookie in the database.
 *
 * @param {DB} db - The database service.
 * @param {string} cookie - The cookie to store.
 * @return {Promise<boolean>} - A promise that resolves a boolean when the cookie is stored. Returns false if the cookie could not be stored.
 */
const storeSession = async (db: DB, username: string, cookie: string): Promise<boolean> => {
    return await db.storeSession(username, cookie);
}

const sendCookie = (res: Response, cookie: string, isSecure: boolean) => {
    const maxAge = 259200; // 3 days
    res.cookie('SID', cookie, {
        path: '/',
        sameSite: isSecure, // remove in production
        secure: isSecure,
        signed: isSecure,
        maxAge: maxAge,
        httpOnly: isSecure
    });
}

/**
 * Stores the given cookie to the database then sends it to the client.
 *
 * @param {DB} db - The database service.
 * @param {Response} res - The response object.
 * @param {string} username - The username to set session for.
 * @param {string} session - The session to be set.
 * @param {boolean} secure - Determines if the cookie should be secure.
 * @returns {Promise<boolean>} - A promise that resolves a boolean when the cookie is set. Returns false if the cookie could not be set.
 */
const setCookie = async (db: DB, res: Response, username: string, session: string, isSecure: boolean): Promise<boolean> => {
    if (await storeSession(db, username, session)) {
        sendCookie(res, session, isSecure);
        return true;
    }
    return false;
}

/**
 * Generates a random salt value.
 *
 * @return {string} The generated salt value.
 */
const generateSalt = (): string => {
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    const salt = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    return salt;
}

type Hash = {
    hash: string,
    salt: string
}
/**
 * Generates a hash value for the given data using a salt.
 *
 * @param {string} data - The data to be hashed.
 * @param {string} salt - The salt to be added.
 * @return {Hash} The hash and salt value in hexadecimal format.
 */
const createHashWithSalt = async (data: string, salt?: string): Promise<Hash> => {
  const encoder = new TextEncoder();
  const salted = salt ? salt : generateSalt();
  const saltedData = salted + data;
  const dataBuffer = encoder.encode(saltedData);
  const hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");
  
  return { hash: hashHex, salt: salted };
}

/**
 * Check the provided password against the stored hash using the given salt.
 * @param {DB} db - The database service.
 * @param {string} password - The password to be checked.
* @return {Promise<Message>} Returns a message with details.
 */
const checkHashWithSalt = async (db: DB, username: string, password: string): Promise<Message> => {
    const data = await db.getUser(username);
    if (data) {
        const createdHash = await createHashWithSalt(password, data.salt);
        if (createdHash.hash === data.hash) {
            return { valid: true, message: "" };
        }
        return { valid: false, status: HTTP.UNAUTHORIZED, message: "Authentication failed" };
    }
    return { valid: false, status: HTTP.NOT_FOUND, message: "User not found" };
}

export {
    setCookie,
    checkHashWithSalt,
}

