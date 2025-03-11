// Using the String constructor creates a String object, not a primitive string.
// String objects behave differently from primitive strings in some cases.

// To extract the primitive string value from the object, use .toString().

let str = new String("Hello, World!"); // String {"Hello, World!"}
console.log(str); // String {"Hello, World!"}
console.log(str.toString()); // "Hello, World!"
