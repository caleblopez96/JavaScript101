// default function parameters allow you to 
// assign default values to parameters in a 
// function declaration.

// SYNTAX: 
function fnName(param1 = defaultValue1, /* …, */ paramN = defaultValueN) {
    // …
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

// EXAMPLE:
function guestGreeting(name = 'Guest') {
    return console.log(`Hello ${name}!`);
}

guestGreeting(); // Hello Guest!
guestGreeting('John'); // Hello John!


// EXAMPLE:
function displayInfo({name = 'User', age = '00'}) {
    return console.log(`Hello: ${name}. Age: ${age}`);
}

displayInfo({name: 'John Doe', age : 33}); // Hello: John Doe. Age: 33
displayInfo({},{}); // Hello: User. Age: 00