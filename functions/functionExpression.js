// Function expressions create a function and assign it to a variable. 
// Unlike function declarations, function expressions are not hoisted.

// EXAMPLE:
const addition = function(...numbers) {
    return numbers.reduce((sum, num) => sum + num);
}

console.log(addition(1, 2, 3, 4)); // 10