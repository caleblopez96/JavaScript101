// removes first element from array.
//! MUTATES original array.

// SYNTAX: 
// shift() 
// NO PARAMETERS

// EXAMPLE:
[ 1, 2, 3, 4, 5 ].shift(); // 1 -> [2, 3, 4, 5]

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

// EXAMPLE: 
let customerQueue = [ "Person 1", "Person 2", "Person 3", "Person 4" ];
let nextCustomer;

function removeNext() {
    const currentCustomer = customerQueue.shift();
    console.log(`${currentCustomer} has been removed from the queue`);
    nextCustomer = `${customerQueue[0]} is next in line`;
}

removeNext();
console.log(customerQueue);
console.log(nextCustomer);