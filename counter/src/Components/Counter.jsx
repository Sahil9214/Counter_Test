import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 data-testid="countText">{count}</h1>
      <button data-testid="add" onClick={() => setCount(count + 1)}>
        Add
      </button>
      <button data-testid="deleteCount" onClick={() => setCount(count - 1)}>
        Reduce
      </button>
    </div>
  );
};

export default Counter;
