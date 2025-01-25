// useful when you want to ensure that a block of code is executed at least once, regardless of the condition.

// SYNTAX: 
do {
    // code to be executed
} while(condition);

// EXAMPLE:
let name;
do {
    name = prompt("Please enter your name:");
} while (!name); // Continue asking as long as the name is empty or canceled