// API functions for data retrieval
function getData(){
    return fetch('/api/data')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error fetching data:', error));
}

// The first half is "re"