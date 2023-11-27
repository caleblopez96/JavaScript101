// destructuring allows you to extract properties from an object and assign them to variables with the same names as the object's property keys.

// EXAMPLE: 
const person = {
    firstName : 'john',
    lastName : 'doe',
    age : 30
}

// NEW:
const { first, last, age } = person;
console.log(first); // john
console.log(last); // doe 
console.log(age); // 30


// OLD (dot notation):
const personFirstName = person.firstName; // john
const personLastName = person.lastName; // doe
const personAge = person.age; // 30

// OLD (bracket notation):
const firstName = person['firstName']; // john
const lastName = person['lastName']; // doe
const age2 = person['age']; // 30
