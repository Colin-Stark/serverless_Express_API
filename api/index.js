const express = require('express');
const app = express();

// Define your routes
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Express on Vercel!' });
});

// Export the Express app
module.exports = app;