// find the bug in the code:
function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

// BUG:
// If multiple state updates happen in the same function, count may still reference the old state because React batches updates. In this case:
setCount(count + 1);
setCount(count + 1);
// Both are using the old count value instead of updating based on the latest state.

// pretend count = 5
// both of the setCount(count + 1) calls see count as 5, so they both do 5 + 1

// FIX: Use functional updates
setCount((prevCount) => prevCount + 1); // prevCount starts at 0 then adds 1 --> 1
setCount((prevCount) => prevCount + 1); // prevCount starts at 1 then adds 1 --> 2

// CORRECTED CODE:
function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
