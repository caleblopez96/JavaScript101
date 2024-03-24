// Use the click event listener when you want to respond to a user's
// interaction with a specific element, such as a button, link, or any
// other HTML element, by performing some action when that element is clicked.

// EXAMPLE:
const button = document.querySelector('button');

button.addEventListener("click", () => {
    button.classList.add('clickedStyles');
});