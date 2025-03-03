// JavaScript follows a scope chain to determine the scope of a variable

// 1. In the local scope
// 2. Any outer functions
// 3. Global scope

let age = 10;

// Example 1: local scope

function outer1() {
  let age = "ageless";

  function inner() {
    let age = "eternal";
    console.log(age); // eternal
  }
  inner();
}
outer1();

// Example 2: outer functions
function outer1() {
  let age = "ageless";

  function inner() {
    // let age = "eternal";
    console.log(age); // "ageless"
  }
  inner();
}
outer1();

// Example 3: global scope
function outer1() {
  // let age = "ageless";

  function inner() {
    // let age = "eternal";
    console.log(age); // 10
  }
  inner();
}
outer1();
