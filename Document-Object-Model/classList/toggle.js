// use .toggle() to toggle the presence of a class in the class attribute of an HTML element.

// EXAMPLE:
element.classList.toggle(className);

// EXAMPLE:
const button = document.querySelector('button');

button.addEventListener('click', () => {
    button.classList.toggle('active');
});