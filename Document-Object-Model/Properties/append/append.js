// use .append() to insert multiple elements

// SYNTAX: 
// append(param1)
// append(param1, param2)
// append(param1, param2, /* …, */ paramN)

// EXAMPLE: 
const parent = document.getElementById('parentElement');
const child1 = document.createElement('div');
const child2 = document.createElement('span');
parent.append(child1, child2);
