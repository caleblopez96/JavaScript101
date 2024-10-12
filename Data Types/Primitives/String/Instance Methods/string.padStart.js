// allows you to pad the start of a string with a specified character or characters until the string reaches a specified length. 

// Often used for aligning strings, especially when working with tabular data or formatting text.

function addLeadingZeros(employeeNumber) {
    if (typeof employeeNumber !== 'number') {
        return 'Invalid input';
    }

    const paddedEmployeeNumber = employeeNumber.toString().padStart(8, '0');
    return paddedEmployeeNumber;
}

const employeeNumber = 123;
const paddedEmployeeNumber = addLeadingZeros(employeeNumber);

console.log(paddedEmployeeNumber); // Output: "00000123"