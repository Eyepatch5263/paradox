// API functions for data retrieval
function getData(){
    return fetch('/api/data')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error fetching data:', error));
}

// The first half is "re"

// FIXED: Resolved conflicting API endpoints
const express = require('express');
const app = express();
const port = 3000;

// Main data endpoint
app.get('/data', (req, res) => {
    res.send('Response from the unified /data endpoint');
});

// Alternative endpoint for different data
app.get('/data/alt', (req, res) => {
    res.send('Response from the alternative data endpoint');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
