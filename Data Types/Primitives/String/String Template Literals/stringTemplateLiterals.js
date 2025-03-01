// string template literals allow you to embed expressions inside string literals.

// EXAMPLE: 
const person = {
    firstName: 'John',
    lastName: 'Doe'
}

const greeting = `My first name is ${person.firstName}`;
console.log(greeting); // My first name is John