// the spread operator can be used to make copies of objects

const original = {
  a: 1,
  b: 2
}

const copy = { ...original }

console.log(original) // { a: 1, b: 2 }
console.log(copy) // { a: 1, b: 2 }