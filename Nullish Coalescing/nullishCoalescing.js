// nullish coalescing operator(??) is a logical operator that returns its right-hand operand when its left-hand operand is null or undefined, and otherwise returns its left-hand operand

// SYNTAX:
// leftExpression ?? rightExpression

// EXAMPLE:
const human = {
  height: 67,
  weight: 135,
  name: "john",
  address: {
    city: "Phoenix",
    state: "Arizona",
  },
};

const human2 = {
  height: 69,
  weight: 150,
  name: "bob",
  age: 30,
  address: {
    city: "Mesa",
  },
};

// accessing an undefined property without nullish coalescing
console.log(human.age); // undefined

// use nullish coalescing to provide a default value thats read when/if the property is null/undefined
console.log(human?.age ?? "Age not provided"); // 'Age not provided

console.log(human2.address?.state ?? "State not provided"); // 'State not provided'
