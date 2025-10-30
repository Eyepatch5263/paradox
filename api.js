<<<<<<< HEAD
// API functions for data retrieval
function getData(){
    return fetch('/api/data')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error fetching data:', error));
}

// The first half is "re"
=======
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
>>>>>>> d1848b2 (fix: chaos exist all over the place find me and resolve it)
