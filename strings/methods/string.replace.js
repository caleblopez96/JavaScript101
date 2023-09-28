// The string.replace method is used to replace occurrences 
// of a specified substring or pattern within a string with another string.

// EXAMPLE: 
function removeVowels(string) {
    const stringWithoutVowels = string.replace(/[aeiouAEIOU]/g, '');
    return stringWithoutVowels;
}

removeVowels('dog'); // 'dg'