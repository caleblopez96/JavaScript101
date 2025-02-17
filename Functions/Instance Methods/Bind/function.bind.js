// .bind() permanently binds a function to a specific object.

const conan = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    console.log("THIS is: ", this);
    return `${this.name} sings LA LA LA`;
  },
};

console.log(conan.sing()); // "Conan sings LA LA LA"

const lisa = {
  name: "Lisa",
  city: "Los Angeles",
};

const lisaSing = conan.sing.bind(lisa);
console.log(lisaSing()); // "Lisa sings LA LA LA"
