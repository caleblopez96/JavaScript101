// EXAMPLE:
function idGenerator() {
  let count = 1;
  return function generate() {
    return count++;
  };
}

const nextId = idGenerator();
nextId(); // 1
nextId(); // 2
nextId(); // 3
