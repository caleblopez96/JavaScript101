// returns an array of an object's own property values.

const person = {
    age: 30,
    location: "New York"   
};

const values = Object.values(person);

console.log(values); // [30, 'New York']
