
import React, { useState } from 'react';

const PrimitiveExample = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); // Changes the state, causes re-render
  };

  const setSameValue = () => {
    setCount(0); // Same value, but still causes re-render
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={setSameValue}>Set Same Value</button>
    </div>
  );
};

export default PrimitiveExample;
