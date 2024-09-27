// array.some() tells you whether any 
// element in your array passes the test. 

// SYNTAX: 
// some(callbackFn)
// some(callbackFn, thisArg)
// array.some((callbackFn) => {/.../});
// array.some(callbackFn(arguments) {/.../});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some


// EXAMPLE:
function checkAge(age) {
    return age < 18;
}

const ageArray = [ 37, 29, 24, 26, 13 ];

let check = ageArray.some(checkAge);

console.log(check); // true