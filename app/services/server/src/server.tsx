import https from 'https';
import fs from 'node:fs';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import express, { json } from 'express';
import { setCookie } from './auth/auth.js';
import { getEnvColor } from './utils/environment.js';
import { authenticate } from './middleware.js';
import { DB, MongoDB } from './api/db.js';
import { sendMessage } from './utils/http.js';

// Environment variables
const HOST = process.env.HOSTNAME;
const ENV = process.env.ENV;
const SECURE = eval(process.env.SECURE);
const HTTPS = eval(process.env.HTTPS);
const PROTOCOL = HTTPS ? 'https' : 'http';
const COOKIE_SECRET = process.env.COOKIE_SECRET;
const SSL_KEY_FILE = process.env.SSL_KEY_FILE;
const SSL_CRT_FILE = process.env.SSL_CRT_FILE;
const DEV_PORT = process.env.DEV_PORT;
const SERVER_PORT = process.env.SERVER_PORT;
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_PORT = process.env.MONGO_PORT;

// Create services needed
const app = express();
const db = new DB (new MongoDB(MONGO_HOST, MONGO_PORT));

// Setup environment
app.use(cors({
  origin: `${PROTOCOL}://${HOST}:${DEV_PORT}`,
  credentials: true
}));
app.use(cookieParser(COOKIE_SECRET));
app.use(json());

// Public routes
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const result = await authenticate(db, username, password);
    if (result.valid) {
        await setCookie(db, res, username, result.message, eval(SECURE));
        sendMessage(res, result.status, "");
    } else {
      sendMessage(res, result.status, result.message);
    }
});

// Protected routes

// Start server
if (!HTTPS) {
  app.listen(SERVER_PORT, () => {
    console.log(`${getEnvColor(ENV)} Server running on http://${HOST}:${SERVER_PORT}`);
  })
} else {
  https.createServer({
    key: fs.readFileSync(path.resolve(SSL_KEY_FILE)),
    cert: fs.readFileSync(path.resolve(SSL_CRT_FILE)),
  }, app).listen(SERVER_PORT, () => {
    console.log(`${getEnvColor(ENV)} Server running on https://${HOST}:${SERVER_PORT}`);
  })
}