// The Fetch API is used to make HTTP requests.

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const url = 'https://api.example.com/data';

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .then(error => console.log('Error: ', error));

// EXAMPLE of fetch with dad joke api
function getJoke() {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
        Accept: "application/json"
        }
    })
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        const joke = data.joke;
        jokeText.innerText = `${joke}😂`;
    });
}