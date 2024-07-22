const express = require('express');
const app = express();
const port = 3000;
const data = require('./data/data.json');

// Serve static files from the public directory
app.use(express.static('public'));

// Route to get JSON data
app.get('/api/data', (req, res) => {
    res.json(data);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
