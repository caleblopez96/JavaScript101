// localStorage allows web apps to store key-value pairs in a web browser persistently across sessions

// localStorage only supports the storage of strings.
// to get around this, store complex objects as JSON

// EXAMPLE: trying to store an array in local storage turns the array into a string
const nums = [1, 2, 3, 4];
localStorage.setItem("nums", nums); // "1,2,3,4"

// JSON.stringify the object to store it
localStorage.setItem(JSON.stringify(nums)); // "[1,2,3,4]"

// JSON.parse to turn back into array
JSON.parse(localStorage.getItem("nums")); // [1, 2, 3, 4]

// REFERENCE:

// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40763036#overview
// https://www.udemy.com/course/pro-javascript/learn/lecture/40763040#overview

// MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
