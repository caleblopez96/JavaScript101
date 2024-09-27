// use a map instead of a plain object 
// if you need to add or delete keys frequently.

// map's performance is better than 
// regular objects when adding and deleting 
// keys frequently.

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