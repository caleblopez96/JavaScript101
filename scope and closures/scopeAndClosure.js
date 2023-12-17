// closure is a function defined inside of a function. 
// This function has access to the outer functions variables.

// EXAMPLE:
function outerFunction() {
    let outerVariable = 'outer variable!';
    function innerFunction() {
        console.log('Inner function');
        console.log(outerVariable);
    }
    return innerFunction;
}

const myClosure = outerFunction(); // inner function
myClosure(); // outer function

// EXAMPLE: 
function idGenerator() {
    let count = 1;
    return function generate() {
        return count++;
    };
}

const nextId = idGenerator();
nextId(); // 1
nextId(); // 2
nextId(); // 3