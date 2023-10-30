// returns an array of an object's own property names

const person = {
    age: 30,
    location: "New York"   
};

const keys = Object.keys(person);

console.log(keys); // ['age', 'location']