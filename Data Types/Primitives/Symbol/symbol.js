// Symbol is a built -in object whose constructor returns a symbol primitive —
// also called a Symbol value or just a Symbol — that's guaranteed to be unique.
// Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object,
// and which are hidden from any mechanisms other code will typically use to access the object.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");