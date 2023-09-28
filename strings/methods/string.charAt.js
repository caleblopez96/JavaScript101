// use the charAt() methodto retrieve the character at a specified 
// position (index) within a string.

// EXAMPLE: 
// returns the character at a specific index in a string.
'Javascript'.charAt(2); // v


function firstAndLastInitial(firstName, lastName) {
    let firstIntial = firstName.charAt(0);
    let lastInitial = lastName.charAt(0);
    let final = `${firstIntial + lastInitial}`;
    return final;
}
firstAndLastInitial('Caleb', 'Lopez'); // 'CL'