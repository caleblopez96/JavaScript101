// Arrow function expressions are a compact alternative to a 
// traditional function expression, with some semantic differences
// and deliberate limitations in usage:

// Arrow functions don't have their own bindings to this, 
// arguments, or super, and should not be used as methods.

// Arrow functions cannot be used as constructors. 
// Calling them with new throws a TypeError. 
// They also don't have access to the new.target keyword.

// Arrow functions cannot use yield within their body
//  and cannot be created as generator functions.

// ** does NOT have its own binding to this **

// SYNTAX:
// () => expression
// 
// param => expression
// 
// (param) => expression
// 
// (param1, paramN) => expression
// 
// () => {
//     statements
// }
// 
// param => {
//     statements
// }
// 
// (param1, paramN) => {
//     statements
// }


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


// EXAMPLE:
const addition = (...numbers) => {
    return numbers.reduce((num, sum) => num + sum);
}
console.log(addition(1, 2, 3, 4)); // 10

// one line
const addition2 = (...numbers) => numbers.reduce((num, sum) => num + sum);

console.log(addition2(1, 2, 3, 4)); // 10

// EXAMPLE:
const greeting = () => {
    let hour = "1100"

    return hour <= "1200" ? "Good morning" : "Good afternoon";
}
greeting(); // Good morning