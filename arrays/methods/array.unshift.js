// use array.unshift() when you need to add one or more elements to the
// beginning of an array. 


// EXAMPLE:
let chore1 = 'Dishes';
let chore2 = 'Trash';
let chore3 = 'Laundry';

let toDoList = [chore1, chore2, chore3]; // ['Dishes', 'Trash', 'laundry']

function addChore(chore) {
    toDoList.unshift(chore);
};

addChore('Homework');
console.log(toDoList);
