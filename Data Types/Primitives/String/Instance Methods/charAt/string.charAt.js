// use the charAt() method to retrieve the character at a specified
// position (index) within a string.

// EXAMPLE:
// returns the character at a specific index in a string.
"Javascript".charAt(2); // v

// EXAMPLE: First and last initial
function firstAndLastInitial(firstName, lastName) {
  let firstInitial = firstName.charAt(0);
  let lastInitial = lastName.charAt(0);
  let final = `${firstInitial + lastInitial}`;
  return final;
}
console.log(firstAndLastInitial("Caleb", "Lopez")); // 'CL'
