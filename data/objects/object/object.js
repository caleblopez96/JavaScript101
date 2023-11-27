// objects are a complex data type that store key-value pairs. 

// EXAMPLE:
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

console.log(typeof person); // object

for (let key in person) {
    let value = person[key];
    console.log(key, value);
}