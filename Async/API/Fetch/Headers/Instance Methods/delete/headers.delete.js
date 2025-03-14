// .delete() deletes a header from the header object

// SYNTAX:
// delete(name)

// PARAMETERS:
// name - name of the HTTP header to delete

const headers = new Headers({
  "Content-Type": "application/json",
  Authorization: "Bearer YOUR_TOKEN",
});
headers.delete("Authorization");

console.log(headers.get("Authorization")); // null
