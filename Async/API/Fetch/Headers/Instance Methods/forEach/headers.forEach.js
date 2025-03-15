// .forEach() executes a callback function once per each key/value pair

// SYNTAX:
// .forEach(callbackFn)
// .forEach(callbackFn, thisArg)

// PARAMETERS:
// callbackFn - function to execute on each key/value pair
// - value: value of the currently visited header entry
// - key: name of the currently visited header entry
// - object: the headers object being iterated
// thisArg (optional) - value to use as this

// RETURNS:
// undefined

// EXAMPLE:
const headers = new Headers({
  "Content-Type": "application/json",
  Authorization: "Bearer YOUR_TOKEN",
});
headers.forEach((header) => {
  console.log(header.toUpperCase());
  // BEARER YOUR_TOKEN
  // APPLICATION/JSON
});

// REFERENCE:
// MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Headers/forEach
