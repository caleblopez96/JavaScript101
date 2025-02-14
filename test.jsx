import "./styles.css";
import { useState } from "react";

export default function App() {
  let [count, setCount] = useState(0);

  const incrementCount = () => {
    return setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <button type="button">{`Count: ${count}`}</button>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}
