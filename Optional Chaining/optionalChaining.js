// Optional chaining allows you to safely access an object's property or call a function.
// If the property or function doesn't exist, it returns undefined instead of throwing an error.

// SYNTAX:
// obj?.property       // Accesses a property safely
// obj?.[expression]   // Accesses a property dynamically
// obj?.(args)         // Calls a function safely

// EXAMPLE:

// WITHOUT OPTIONAL CHAINING: Check if 'user.address' exists before accessing 'city'
// const oldChaining = user && user.address && user.address.city;

// WITH OPTIONAL CHAINING:
// const optionalCity = user?.address?.city;

// EXAMPLE:
const person = {
  name: "Alice",
  address: {
    city: "Wonderland",
  },
};

// Traditional way (without optional chaining):
const city = person && person.address && person.address.city;
console.log(city); // 'Wonderland'

// Using optional chaining:
const optCity = person?.address?.city;
console.log(optCity); // 'Wonderland'

// Another example:
const person2 = {
  name: "Mickey",
  address: {
    state: "California",
  },
};

// This will throw an error if 'city' doesn't exist
// const person2City = person2.address.city; // Uncaught TypeError

// Correct way using optional chaining:
const person2CityCorrect = person2?.address?.city;
console.log(person2CityCorrect); // undefined
