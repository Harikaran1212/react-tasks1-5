import React, { useState } from 'react';
import'../Styles/Task2.css';
function Task2() {
  const [counter, setCounter] = useState(0);

  return (
    <div className='game'>
      <h2>Task 2: Counter</h2>
      <p>Counter Value: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
      
    </div>
  );
}

export default Task2;
