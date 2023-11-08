// use the hasOwnProperty() method to check if an object has a specific property. 

// This method is often used to avoid potential conflicts with inherited properties.

const person = {
    name: "John",
    age: 30
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("gender")); // false