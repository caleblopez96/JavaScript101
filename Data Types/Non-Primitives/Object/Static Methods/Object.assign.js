// .assign() copies properties from one or more source objects to a target object

// SYNTAX:
// Object.assign(target, ...sources)

// PARAMETERS:
// target - the object to receive properties
// sources - one or more source objects whose props are copied

// RETURNS:
// The modified target object

// MUTATION:
// Mutates the target object

// EXAMPLE:

const obj1 = {
  a: "first",
  b: "second",
  c: "third",
};

// Create a shallow copy of obj1
const obj1Copy = Object.assign({}, obj1);
console.log(obj1Copy); // { a: 'first', b: 'second', c: 'third' }

// Combine objects to create a new object
const obj2 = { d: "fourth", e: "fifth", f: "sixth" };
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3); // { a: 'first', b: 'second', c: 'third', d: 'fourth', e: 'fifth', f: 'sixth' }

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
