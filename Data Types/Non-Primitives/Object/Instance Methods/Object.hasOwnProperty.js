// .hasOwnProperty() checks if an object contains the specified property

// SYNTAX:
// .hasOwnProperty(prop)

// PARAMETERS:
// prop - property to check the object for

// RETURNS
// boolean

// EXAMPLE:
const person = {
  firstName: "John",
  lastName: "Snow",
  address: "123 a st",
};

console.log(person.hasOwnProperty("firstName"));
