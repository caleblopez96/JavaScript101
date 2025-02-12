// used for combining two or more expressions and returns true if all the expressions are true. 

// If any of the expressions evaluates to false, it returns false. 

// often used to make decisions based on multiple conditions.

// EXAMPLE: 
const username = "myUsername";
const password = "myPassword";

if (username === "myUsername" && password === "myPassword") {
    console.log("Login successful");
} else {
    console.log("Login failed");
}


// EXAMPLE: 
function isOpen(hour){
    const openingHour = "0900";
    const closingHour = "2100";

    return hour >= openingHour && closingHour ? "We are Open!" : "We are closed"
}

isOpen("1400") // We are open!