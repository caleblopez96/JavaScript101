// Allows you to pad the start of a string with a specified character or characters until the string reaches a specified length.

// Often used for aligning strings, especially when working with tabular data or formatting text.

// SYNTAX:
// string.padStart(targetLength)
// string.padStart(targetLength, padString)

// PARAMETERS:
// targetLength - the length of the resulting string once its been padded
// padString (optional) - the string to pad the current string with

// RETURNS:
// A string with the specified targetLength with the padString applied to the start

// EXAMPLE:
"String".padStart(12, "*"); // '******String'

// EXAMPLE:
function addLeadingZeros(employeeNumber) {
  if (typeof employeeNumber !== "number") {
    return "Invalid input";
  }

  const paddedEmployeeNumber = employeeNumber.toString().padStart(8, "0");
  return paddedEmployeeNumber;
}

const employeeNumber = 123;
const paddedEmployeeNumber = addLeadingZeros(employeeNumber);

console.log(paddedEmployeeNumber); // Output: "00000123"

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
