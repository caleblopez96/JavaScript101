// string.replaceAll method is used to replace all occurrences of a
// specified substring or pattern within a string with another string.

// It's similar to string.replace, but it replaces all occurrences
// globally without the need for a regular expression.

// EXAMPLE:
const inputText = "Hi there! :) How are you doing? :)";

// Replace all smiley faces with emojis
const formattedText = inputText.replaceAll(":)", "😊");

console.log(formattedText); // Hi there! 😊 How are you doing? 😊
