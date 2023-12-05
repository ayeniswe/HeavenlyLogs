import express, { json } from 'express';
import cors from 'cors';
import { setCookie } from './auth/auth.js';
import { ENVIRONMENT, getEnvColor } from './utils/environment.js';
import { authenticate } from './middleware.js';
import { DB, MongoDB } from './db/db.js';
import { sendMessage } from './utils/http.js';

// Environment variables
const ENV = process.env.ENV;
const SECURE = process.env.SECURE;
const PORT = process.env.PORT;
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_PORT = process.env.MONGO_PORT;

// Create services needed
const app = express();
const db = new DB (new MongoDB(MONGO_HOST, MONGO_PORT));

// Setup environment
if (ENV == ENVIRONMENT.DEVELOPMENT || ENV == ENVIRONMENT.TEST) {
  app.use(cors());
}
app.use(json());

// Public routes
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const result = await authenticate(db, username, password);
    if (result.valid) {
        await setCookie(db, res, username, result.message, eval(SECURE));
        res.sendStatus(200);
    } else {
      sendMessage(res, result.status, result.message);
    }
});

// Protected routes

// Start server
app.listen(PORT, async () => {
  console.log(`${getEnvColor(ENV)} Server running on http://localhost:${PORT}`);
});
