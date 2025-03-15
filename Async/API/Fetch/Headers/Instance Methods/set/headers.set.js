// .set() allows you to set a new value for an existing header.
// If the header does not exist, it will be added as a new entry.

// SYNTAX:
// headers.set(name, value)

// PARAMETERS:
// name  - The name of the HTTP header to set.
// value - The new value to assign to the header.

// RETURNS:
// None

// EXAMPLE:
const headers = new Headers({
  Authorization: "Bearer YOUR_TOKEN",
});

headers.set("Content-Type", "application/json");

console.log(headers.get("Content-Type")); // 'application/json'
console.log([...headers.entries()]);
// ['authorization', 'Bearer YOUR_TOKEN]
// ['content-type', 'application/json']

// REFERENCE:
// MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Headers/set
