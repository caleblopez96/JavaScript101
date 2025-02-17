// the value of this changes based on the object and the context

// EXAMPLE: in a function, this refers to the window object
// its the same as calling window.whatIsThis()

function whatIsThis() {
  console.log("The value of this is: ", this);
}
whatIsThis();
// in the browser, logs: Window {...}
// in strict mode, logs: undefined

// object method call
const obj = {
  color: "red",
  shape: "square",
  whatIsThis: whatIsThis,
};
obj.whatIsThis(); // {color: 'red', shape: 'square', whatIsThis: ƒ}

console.log(obj.whatIsThis); // [function: whatIsThis]
