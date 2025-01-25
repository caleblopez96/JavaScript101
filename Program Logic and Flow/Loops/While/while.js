// allows you to repeatedly execute a block of code as long as a specified condition is true.

// Unlike a "for" loop, which is typically used when you know the number of iterations in advance, 
// a "while" loop is more suitable when you want to repeat a block of code until a certain condition is no longer met.

// SYNTAX: 
while (condition) {
    // Code to be executed as long as the condition is true
}

// EXAMPLE: 
let counter = 0; 

while (counter < 10) {
    counter++; 
    console.log('less than 10'); // less than 10 (10x)
}