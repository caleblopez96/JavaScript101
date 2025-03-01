// The string.replace method is used to replace occurrences 
// of a specified substring or pattern within a string with another string.

// SYNTAX:
// replace(pattern, replacement)

// EXAMPLE:
'this is a test sentence'.replace('test', 'real') // this is a real sentence


// EXAMPLE:  
function removeVowels(string) {
  const stringWithoutVowels = string.replace(/[aeiouAEIOU]/g, '');
  return stringWithoutVowels;
}

removeVowels('dog'); // 'dg'