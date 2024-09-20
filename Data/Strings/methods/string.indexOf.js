// used to find the first occurrence of a specified substring or character within a given string. 
// returns the index of the first occurrence, or -1 if the substring is not found.

// EXAMPLE:
const text = "Hello, world! This is a simple example.";

const searchTerm = "world";
const indexOfTerm = text.indexOf(searchTerm);

if (indexOfTerm !== -1) {
    console.log(`"${searchTerm}" found at index ${indexOfTerm}`);
} else {
    console.log(`"${searchTerm}" not found in the string`);
}


indexOfTerm !== -1 ? `"${searchTerm}" found at index ${indexOfTerm}`: console.log(`"${searchTerm}" not found in the string`);