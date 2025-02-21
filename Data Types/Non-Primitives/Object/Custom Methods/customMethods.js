//

const pet = { species: "dog", name: "b's", age: 7 };

pet.bark = () => {
  return "woof woof";
};

pet.sleep = function () {
  return "zzzzzz";
};
console.log(pet.bark()); // woof woof
console.log(pet.sleep()); // zzzzzz
console.log(pet); // {species: 'dog', name: "b's", age: 7, bark: ƒ, sleep: ƒ}
