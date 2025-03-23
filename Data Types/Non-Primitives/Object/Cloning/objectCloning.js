// original object
const obj = { a: 1, b: { c: 2 } };

// "cloned" version of obj
const fakeClone = { ...obj };

// proof they're "cloned"
console.log(fakeClone.b.c === obj.b.c); // true

// this modification to the orig obj alters the "cloned" object. its not a real clone
obj.b.c = 5;
console.log(obj.b.c); // 5
console.log(fakeClone.b.c); // 5

// ------------------------------------------

// instead use structuredClone()
const realClone = structuredClone(obj);

// proof the realClone is the same as obj
console.log(realClone); // { a: 1, b: { c: 5 } }

// change a value in the real clone then compare it against orig obj and fakeClone
console.log((realClone.b.c = 7)); // 7
console.log(obj.b.c); // 5
console.log(fakeClone.b.c); // 5
