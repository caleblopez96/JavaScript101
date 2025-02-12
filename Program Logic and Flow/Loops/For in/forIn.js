// use for...in to iterate overall all enumerable properties of an object

// SYNTAX:
/* 

for(key in object) {
  console.log(key, object[variable])
}

*/

// EXAMPLE:
const person = {
  firstName: 'john',
  age: '30'
}

// get keys
for (key in person) {
  console.log(key) // firstName age
}

// get key-value pair
for (key in person) {
  console.log(key, person[key]) // firstName John age 30
}
