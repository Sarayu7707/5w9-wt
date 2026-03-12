const express = require('express');
const route = express.Router(); // Create router instance

// Handle GET request
route.get('/', (req, res) => {
    res.status(200); // Set response status
    res.send('Hello, World! In GET'); // Send response
});

// Handle POST request
route.post('/', (req, res) => {
    res.status(201); // Set response status
    res.send('Hello, World! In POST'); // Send response
});

module.exports = route; // Export router
