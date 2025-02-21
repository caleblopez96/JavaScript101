// use Object.assign() to copy the values and props
// from one source object to a target object

// SYNTAX:
// Object.assign(target, ...sources)

// EXAMPLE:
const obj1 = {
  a: 'a',
  b: 'b',
  c: 'c'
}

const obj2 = {
  d: 'd',
  e: 'e',
  f: 'f'
}

// Combine objects to create new object
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3) // { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e','f' }