// use .defineProperties() to define new or modify existing properties on an object

// SYNTAX:
// Object.defineProperties(obj, properties)

// EXAMPLE:

const object1 = {}

Object.defineProperties(object1, {
  property1: {
    value: { age: 30 },
    writable: true,
    enumerable: true,
    configurable: true
  },
  property2: {
    value: { name: "Json" },
    writable: true,
    enumerable: true,
    configurable: true
  }
})