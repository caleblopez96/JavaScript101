// use the .add method to add 0a classlist to an HTML element 

// You can also use .add to add a value to a set

// EXAMPLE: 
const dropdown = document.querySelector('.dropdown');
dropdown.classList.add('active');

// EXAMPLE:
const exampleArray = [1, 1, 2, 3, 3, 4, 5];
const mySet = new Set(exampleArray);

console.log(mySet); // [1, 2, 3, 4, 5]
mySet.add(6);
console.log(mySet); // [1, 2, 3, 4, 5, 6]