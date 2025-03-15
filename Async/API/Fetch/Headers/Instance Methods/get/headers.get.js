// .get() returns the value if given a valid key other wise null

// SYNTAX:
// get(name)

// PARAMETERS:
// name - key of property you are trying to get

// EXAMPLE:
const headers = new Headers({
  "Content-Type": "application/json",
  Authorization: "Bearer YOUR_TOKEN",
});

headers.get("Content-Type"); // 'application/json'

// REFERENCE:
// MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Headers/get
