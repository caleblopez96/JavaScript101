// use a map instead of a plain object 
// if you need to add or delete keys frequently.

// A Map is similar to an object in that it stores key - value pairs.
// Unlike objects, Map keys can be any data type(e.g., objects, functions, or primitives).
// Map provides better performance for frequent additions, deletions, or lookups of key - value pairs.
// It also maintains the order of insertion, unlike regular objects.

const eventsMap = new Map();
eventsMap.set('1', 'a');
eventsMap.set('2', 'b');
eventsMap.set('3', 'c');
console.log(eventsMap);

for (const [key, value] of eventsMap) {
  console.log([key, value]); // (2) ['1', 'a'] (2) ['2', 'b'] (2) ['3', 'c']
}

// first key and first value
const [[firstKey, firstValue]] = eventsMap;
console.log(firstKey, firstValue); // 1 a

const myMap = new Map();
myMap.set('name', 'Luke');
myMap.set(1, 'One');   // Using a number as a key
console.log(myMap.get(1));  // 'One'

const myObject = { name: 'Luke' };
console.log(myObject['name']);  // 'Luke'