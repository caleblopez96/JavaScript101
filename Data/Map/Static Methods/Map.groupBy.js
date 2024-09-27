// .groupBy() groups the elements of a given iterable
// using the values returned by a callback

// SYNTAX:
// Map.groupBy(items, callbackFn)

// EXAMPLE:
const inventory = [
  { name: "banana", type: "fruit", quantity: 13 },
  { name: "apple", type: "fruit", quantity: 4 },
  { name: "grapes", type: "fruit", quantity: 9 }
]

const restock = { restock: true }
const sufficient = { restock: false }
const results = Map.groupBy(inventory, ({ quantity }) => {
  quantity <= 6 ? restock : sufficient
})
console.log(results.get(restock))