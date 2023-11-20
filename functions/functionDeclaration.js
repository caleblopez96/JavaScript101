
function addition(...numbers) {
    return numbers.reduce((sum, num) => sum + num);
}

console.log(addition(1, 2, 3, 4)); // 10