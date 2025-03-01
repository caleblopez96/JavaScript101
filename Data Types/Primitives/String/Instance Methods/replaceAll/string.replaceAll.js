// string.replaceAll method is used to replace all occurrences of a
// specified substring or pattern within a string with another string.

// It's similar to string.replace, but it replaces all occurrences
// globally without the need for a regular expression.

// EXAMPLE:
const inputText =
  "I really love dogs. My dog is an amazing pet. She loves to cuddle with me and play. What a great dog. dog. dog. dog.";

const inputTextCat = inputText.replaceAll("dog", "cat");

console.log(inputTextCat); // I really love cats. My cat is an amazing pet. She loves to cuddle with me and play. What a great cat. cat. cat. cat.
