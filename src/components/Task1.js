import React, { useState } from 'react';
import'../Styles/Task1.css';
function App() {

  const records = ['John', 'Jane', 'Jack', 'Jill'];
  const [isVisible, setIsVisible] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
   const [isSumButtonDisabled, setIsSumButtonDisabled] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [components, setComponents] = useState([]);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  const addComponent = () => {
    setComponents([...components, <ChildComponent key={components.length} />]);
  };

  const handleSum = () => {
    setSum(Number(num1) + Number(num2));
  };
  return (
    <div className='game'>
    <div style={{ padding: '20px' }}>
      <h1>React Learning Tasks 1</h1>

      <h2>Task 1: Simple JSX Display</h2>
      <p>Hello, welcome to React tasks!</p>

      <h2>Task 2: Display Array of Records</h2>
      <ul>
        {records.map((record, index) => (
          <li key={index}>{record}</li>
        ))}
      </ul>

      <h2>Task 3: Show/Hide Element</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Element
      </button>
      {isVisible && <p>This is a toggle able element.</p>}

      <h2>Task 4: Enable/Disable Button</h2>
      <input
        type="checkbox"
        onChange={(e) => setIsButtonDisabled(!e.target.checked)}
      />
      Enable Button
      <button disabled={isButtonDisabled}>Click Me</button>

      <h2>Task 5: 2-way Data Binding</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Typed Value: {inputValue}</p>

      <h2>Task 6: Dynamically Add Child Components</h2>
      <button onClick={addComponent}>Add Child Component</button>
      <div>
        {components.map((component, index) => (
          <div key={index}>{component}</div>
        ))}
      </div>

      <h2>Task 7: Sum of Two Numbers</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Number 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Number 2"
      />
      <input
        type="checkbox"
        onChange={(e) => setIsSumButtonDisabled(!e.target.checked)}
      />
      <button  disabled={isSumButtonDisabled} onClick={handleSum}>Calculate Sum</button>
      <p>Sum: {sum}</p>
    </div>
    </div>
  );
}

function ChildComponent() {
  return <p>I am a dynamically added child component!</p>;
}

export default App;
