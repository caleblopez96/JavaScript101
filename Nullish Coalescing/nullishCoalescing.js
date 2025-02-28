// nullish coalescing operator(??) is a logical operator that returns its right-hand operand when its left-hand operand is null or undefined, and otherwise returns its left-hand operand

// SYNTAX:
// leftExpression ?? rightExpression

// EXAMPLE: 0 is falsy so left side never evaluates to true even if you need the value
console.log(0 || "other value"); // 'other value
console.log(0 ?? "other value"); // 0
