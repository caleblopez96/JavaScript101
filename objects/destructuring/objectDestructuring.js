// destructuring allows you to extract properties from an object and assign them to variables with the same names as the object's property keys.

// EXAMPLE: 
const person = {
    firstName : 'john',
    lastName : 'doe',
    age : 30
}

// OLD:
const personFirstName = person.firstName; // john
const personLastName = person.lastName; // doe
const personAge = person.age; // 30

// NEW:
const {first, last, age} = person;
console.log(first); // john
console.log(last); // doe 
console.log(age); // 30