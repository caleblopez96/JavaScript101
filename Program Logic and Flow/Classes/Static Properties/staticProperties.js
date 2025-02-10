// static properties exist on the class, not on instances

// SYNTAX:
// static variableName = value;

// CALLING:
// className.staticProperty;

// EXAMPLE: creating our own static property on a class
class CatWithStaticProp {
  constructor(name) {
    this.name = name;
  }

  // every cat is the same species
  static genusSpecies = "feline catus";

  describe() {
    return `${this.name} is a ${CatWithStaticProp.genusSpecies}`;
  }
}
console.log(CatWithStaticProp.genusSpecies); // 'Feline catus'
