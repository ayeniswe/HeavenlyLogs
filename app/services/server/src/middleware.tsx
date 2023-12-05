import crypto from 'crypto';
import { checkHashWithSalt } from './auth/auth.js';
import { DB } from './db/db.js';
import { Message } from './utils/http.js';

/**
 * Authenticates a user with the given username and password.
 *
 * @param {DB} username - The database service.
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @return {Promise<Message>} The authentication cookie or message with details on authentication failure .
 */
const authenticate = async (db: DB, username: string, password: string): Promise<Message> => {
    const result = await checkHashWithSalt(db, username, password);
    if (result.valid) {
        return { valid: true, message: crypto.randomBytes(32).toString('hex') };
    }
    return result;
}

export {
    authenticate
}