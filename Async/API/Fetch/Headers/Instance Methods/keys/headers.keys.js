// .keys() returns an iterator of all keys in the object

// SYNTAX:
// .keys()

// RETURNS:
// an iterator

// EXAMPLE:

const headers = new Headers({
  "Content-Type": "application/json",
  Authorization: "Bearer YOUR_TOKEN",
});

for (const key of headers.keys()) {
  console.log(key);
  // "Authorization"
  // "Content-Type"
}

// REFERENCE:
// MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Headers/keys
