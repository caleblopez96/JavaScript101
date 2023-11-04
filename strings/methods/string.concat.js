// used to concatenate one or more strings with the string on which it's called and return a new string

// EXAMPLE: 
const firstName = "John";
const lastName = "Doe";
const address = "123 Main Street";
const city = "New York";

const fullAddress = address.concat(", ", city);
const fullName = firstName.concat(" ", lastName);

console.log(fullAddress); // Output: "123 Main Street, New York"
console.log(fullName);    // Output: "John Doe"