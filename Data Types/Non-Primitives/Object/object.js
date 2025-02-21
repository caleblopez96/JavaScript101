// objects are a complex data type that store key-value pairs. 

// Object literal
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};

// typeof
console.log(typeof person); // object


// iterating over object
for (let key in person) {
    let value = person[key];
    console.log(key, value); // firstName John lastName Doe age 30
}

// object destructuring
const { firstName, lastName, age, address } = person;
console.log(firstName, lastName, age, address); 
// John Doe 30 {street: '123 Main St', city: 'Anytown', country: 'USA'}
