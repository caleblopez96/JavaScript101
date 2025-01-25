// use a break statement to terminate the loop immediately upon the break statement.

// The switch statement runs until it returns true.

// SYNTAX:
/* 

switch (variableToBeSwitched) {
case 1:
    expression;
    break;
case 2: 
    expression;
    break;
case 3: 
    expression;
    break;
default:
    expression;
}   

*/

let dayOfWeek = 3;

switch (dayOfWeek) {
    case 1: 
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4: 
        console.log('thursday');
        break;
    case 5: 
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
    default: 
        console.log('invalid day');
}