// used to copy the values of all enumerable properties from one or more source objects to a target object.

const source = { name: "john", age: 30 };

const target = {};

Object.assign(target, source);

console.log(target); // {name: 'john', age: 30}
