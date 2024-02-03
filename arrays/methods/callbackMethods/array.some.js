// array.some() tells you whether any element in your array passes the test. 


// EXAMPLE:
function checkAge(age) {
    return age < 18;
}

const ageArray = [ 37, 29, 24, 26, 13 ];

let check = ageArray.some(checkAge);

console.log(check); // true