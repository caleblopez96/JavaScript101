// use for...in to loop through the properties of an object, 
// to perform some action on each property or access their values.

const person = {
    firstName: "John",
    lastName: "White",
    city: "New York"
}

for (const key in person) {
    console.log(key, person[key]);
}