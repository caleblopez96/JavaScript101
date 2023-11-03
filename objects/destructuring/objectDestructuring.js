// destructuring allows you to extract properties from an object and assign them to variables with the same names as the object's property keys.

// EXAMPLE: 
const person = {
    firstName : 'john',
    lastName : 'doe',
    age : 30
}

const { firstName, lastName, age } = person;
console.log(firstName); // john
console.log(lastName); // doe 
console.log(age); // 30