// use array.every() when you need to check if all elements in the array pass the test.


// EXAMPLE: 
const everyArray = [ 1, 2, 3, 4, 5 ];

function isEven(element) {
    return element % 2 === 0;
}

console.log(everyArray.every(isEven)); // false


const task = [
    { id: 1, title: 'Task 1', completed: true },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false }
]

const completedTask = task.every(task => task.completed);

console.log(completedTask); // false