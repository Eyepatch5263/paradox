// FIX ME: Conflicting API endpoints

const express = require('express');
const app = express();
const port = 3000;

// First API endpoint
app.get('/data', (req, res) => {
    res.send('Response from the first /data endpoint');
});

// Second API endpoint with the same path
app.get('/data', (req, res) => {
    res.send('Response from the second /data endpoint');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});