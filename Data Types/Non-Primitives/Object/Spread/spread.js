// use the spread operator with objects to make a copies of an object or combine the properties of objects

// SYNTAX:
// {...obj}

// EXAMPLE 1: making a copy of an object
const obj = { a: 1, b: 2 };
const objCopy = { ...obj };
console.log(objCopy); // {a: 1, b:2}

// EXAMPLE 1: combine the properties of objects
const person = {
  firstName: "Caleb",
  age: 28,
};

const personDetails = {
  location: "Arizona",
  Occupation: "Software Developer",
};

const personWithDetails = { ...person, ...personDetails };
console.log(personWithDetails); // { "firstName": "Caleb", "age": 28, "location": "Arizona", "Occupation": "Software Developer"}
