// .values() returns an iterator of all values in the object

// SYNTAX:
// .values()

// PARAMETERS:
// none

// RETURNS:
// headers iterator

// EXAMPLE:
const headers = new Headers({
  "Content-Type": "application/json",
  Authorization: "Bearer YOUR_TOKEN",
});

headers.values();

// REFERENCE:
// MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Headers/values
