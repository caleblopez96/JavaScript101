// destructuring allows you to extract properties from an object and assign them to variables with the same names as the object's property keys.

// EXAMPLE: 
const person = {
    firstName : 'john',
    lastName : 'doe',
    age : 30
}

// EXAMPLE: Destructuring the person object into three variables to represent objects value at each key.
const {firstName, lastName, age} = person;
console.log(firstName); // john
console.log(lastName); // doe 
console.log(age); // 30

// OLD (dot notation):
const personFirstName = person.firstName;
const personLastName = person.lastName;
const personAge = person.age; 

// OLD (bracket notation):
const firstName2 = person['firstName'];
const lastName2 = person['lastName'];
const age2 = person['age'];


// EXAMPLE: Destructuring the car object into two variables that aren't the same name as the object key.
const car = {
    color : 'red',
    miles : 10000,
}

const {color: carColor, miles: carMileage} = car
console.log(carColor); // red
console.log(carMileage); // 10000





// B U S N B N S

// Boolean
// Undefined
// String
// Number

// BigInt
// Null
// Symbol
