// compact alternative to a function expression.

// ** does NOT have its own binding to this **


// EXAMPLE:
const addition = (...numbers) => {
    return numbers.reduce((num, sum) => num + sum);
}

console.log(addition(1, 2, 3, 4)); // 10

// one line
const addition2 = (...numbers) => numbers.reduce((num, sum) => num + sum);

console.log(addition2(1, 2, 3, 4)); // 10

