// Properties that don't exist evaluate to undefined

```js
const person = { first: "Walter", last: "White" };
console.log(person.first); // Walter
console.log(person["last"]); // White
console.log(person.age); // undefined
```

// Create an object method

```js
const pet = { species: "dog", name: "b's", age: 7 };
pet.bark = () => {
  return "woof woof";
};
console.log(pet.bark()); // woof woof
```
