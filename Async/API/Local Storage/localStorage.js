// localStorage allows web apps to store key-value pairs in a web browser persistently across sessions

// SYNTAX:
// localStorage.setItem("key", "value")
// localStorage.getItem("key") --> returns value associated with key
// localStorage.removeItem("key") --> give key of item to remove
// localStorage.clear() --> clears localStorage

// EXAMPLE:

// setItem()
localStorage.setItem("myDog", "B's");

// getItem()
localStorage.getItem("myDog"); // B's

// removeItem()
localStorage.removeItem("myDog");

// clear()
localStorage.clear();

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40763036#overview

// MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
