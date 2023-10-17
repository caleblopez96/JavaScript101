// use .querySelectorAll() to select multiple elements in the DOM based on CSS selector. 

// EXAMPLE: 
const listItems = document.querySelectorAll('.listItem');

listItems.forEach(function(item) {
    item.style.color = 'red';
})