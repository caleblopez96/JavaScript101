// The Fetch API is commonly used in full-stack web development to make HTTP requests.

const url = 'https://api.example.com/data';

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .then(error => console.log('Error: ', error))