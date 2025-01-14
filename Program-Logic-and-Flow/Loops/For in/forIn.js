// use for...in to iterate overall all enumerable properties of an object

// SYNTAX:
// for(variable in object) {}

// EXAMPLE:
const person = {
  firstName: 'john',
  age: '30'
}

for (key in person) {
  console.log(key) // firstName age
}

for (key in person) {
  console.log(key, person[key]) // firstName John age 30
}

for (let key in Object.keys(object)) {
  console.log(key, key[value])
}