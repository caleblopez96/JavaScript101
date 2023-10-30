// returns an array of an object's own property key-value pairs as arrays.

const person = {
    name: "John",
    age: 30
};

const entries = Object.entries(person); 

console.log(entries); // [['name', 'John'] ['age', 30]]