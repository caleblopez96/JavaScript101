// default function parameters allow you to assign default values to parameters in a function declaration.

// EXAMPLE:
function guestGreeting(name = 'Guest') {
    console.log(`Hello ${name}!`);
}

guestGreeting(); // Hello Guest!
guestGreeting('John'); // Hello John!


// EXAMPLE:
function displayInfo( { name = 'User', age = '00' } ) {
    console.log(`Hello: ${name}. Age: ${age}`);
}

displayInfo( { name: 'John Doe', age : 33 } );

