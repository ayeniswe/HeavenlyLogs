const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Allow Cross-Origin Resource Sharing
const env = process.argv[2];
if (env == '--development' || env == '--testing') {
  app.use(cors());
}

// Parse JSON request bodies
app.use(express.json());

app.post('/login', (req, res) => {
  // TODO fix realistic login
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        res.status(200).send({'detail': ''});
    } else {
        res.status(401).send({'detail': 'Invalid username or password'});
    }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port} as ${env.slice(2)}`);
});