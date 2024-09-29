// use .create() to create a new object using an existing object

// SYNTAX:
// Object.create(object)
// Object.create(object, propertiesObject)

const person = {
  name: "jason",
  year: 1980
}

const me = Object.create(person, {
  location: {
    value: "",
    writable: true,
    enumerable: true,
    configurable: true
  }
})
me.name = "caleb"
me.year = 1996
me.location = "AZ"
console.log(me) // {name: 'caleb', year: 1996}