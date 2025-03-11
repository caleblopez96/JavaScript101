// .padEnd() you to pad the end of a string with a specified character or characters until the string reaches a specified length.

// SYNTAX:
// string.padEnd(targetLength)
// string.padEnd(targetLength, padString)

// PARAMETERS:
// targetLength - the length of the resulting string once its been padded
// padString (optional) - the string to pad the current string with

// RETURNS:
// A string with the specified targetLength with the padString applied to the end

// EXAMPLE:
"Mother ".padEnd(13, "*"); // 'Mother ******'

// EXAMPLE:
function addLeadingZeros(employeeNumber) {
  if (typeof employeeNumber !== "number") {
    return "Invalid input";
  }

  const paddedEmployeeNumber = employeeNumber.toString().padEnd(8, "*");
  return paddedEmployeeNumber;
}

const employeeNumber = 123;
const paddedEmployeeNumber = addLeadingZeros(employeeNumber);

console.log(paddedEmployeeNumber); // Output: "123*****"

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
