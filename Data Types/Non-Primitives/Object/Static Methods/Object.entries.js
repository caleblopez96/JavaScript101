// .entries() returns an array of an objects string-keyed prop key-value pairs

// SYNTAX:
// Object.entries(obj)

// EXAMPLE:

const object2 = {
  1: "one",
  2: "two",
  3: "three"
}

for (const [key, value] of Object.entries(object2)) {
  console.log(`${key} ${value}`)
}
// 1 one
// 2 two
// 3 three