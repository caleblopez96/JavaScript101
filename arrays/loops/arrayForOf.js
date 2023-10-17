// A simpler and more declarative way to iterate over an array.

// ES5
const list = [2, 3, 4];

for(let i = 0; i < list.length; i++) {
    console.log(list[i]);
};

// ES6
for (i of list) {
    console.log(i);
};