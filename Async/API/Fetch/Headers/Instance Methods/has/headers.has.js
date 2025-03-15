// .has() returns boolean if object contains a certain header

// SYNTAX:
// .has(name)

// PARAMETERS:
// name - name of the HTTP header you want to test for

// RETURNS:
// boolean

// EXAMPLE:
const headers = new Headers({
  "Content-Type": "application/json",
  Authorization: "Bearer YOUR_TOKEN",
});

headers.has("Content-Type"); // true

// REFERENCE:
// MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Headers/has
