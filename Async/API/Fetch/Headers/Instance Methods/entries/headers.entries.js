// .entries() returns an iterator of key/value pairs

// SYNTAX:
// .entries()

// PARAMETERS:
// None

// RETURNS:
// an iterator of key-value pairs

// EXAMPLE:
const headers = new Headers({
  "Content-Type": "application/json",
  Authorization: "Bearer YOUR_TOKEN",
});

for (const header of headers.entries()) {
  console.log(`${header[0]}: ${header[1]}`);
  // authorization: Bearer YOUR_TOKEN
  // content-type: application/json
}

// REFERENCE:
// MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Headers/entries
