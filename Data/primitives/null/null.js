// null is a primitive value used to represent the intentional absence of any object value

// EXAMPLE: 
let user =  {
    firstName: "John",
    middleName: null,
    location: "New York"
}

for (let key in user) {
    let value = user[key];
    console.log(key, value);
}