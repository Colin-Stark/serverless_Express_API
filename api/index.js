const express = require('express');
const app = express();

// Define your routes
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Express on Vercel!' });
});

// Export a handler function for Vercel serverless deployment
module.exports = (req, res) => app(req, res);