// The logical or assingment operator ||= checks if the left-hand side is a falsy value and replaces it with the right-hand side value.

// SYNTAX:
// x ||= y
// Equivalent to: x = x || y

// EXAMPLE 1: Assigning a default value if the property is falsy
const todo = {
  priority: "", // Empty string is falsy
  task: "Do homework",
};

// assign "MEDIUM" if priority is falsy
todo.priority ||= "MEDIUM"; // same as: todo.priority || (todo.priority = "MEDIUM")
console.log(todo); // { priority: "MEDIUM", task: "Do homework" }

const todo2 = {
  priority: "HIGH",
  task: "Eat food",
};

// right side is never evaluated because left side short-circuits due to the value being provided
todo2.priority ||= "MEDIUM";
console.log(todo2); // {priority: "HIGH", task: "Eat food"}

// EXAMPLE 2: Providing a default message if an element is empty
document.getElementById("lyrics").textContent ||= "No lyrics available";
