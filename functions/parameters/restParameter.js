// use the ...rest parameter to collect all remaining arguments into one single array. 

// allows functions to receive a variable number of arguments. 

// EXAMPLE:

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15