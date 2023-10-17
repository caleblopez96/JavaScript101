// use .querySelector() to select a specific element on a web page. //
// use the elements ID, class, or other css selector to identify the element as an argument. 

// EXAMPLE:
const form = document.querySelector('#form');

// EXAMPLE: 
const button = document.querySelector('.myButton');

button.addEventListener('click', () => {
    button.style.backgroundColor = 'green';
})