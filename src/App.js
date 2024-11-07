import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import './App.css';
function App() {
  return (
    <Router>
       <div className="App">
      <h1>React Tasks</h1>
      <nav>
        <Link to="/src/App.js"><button>Home</button></Link>
        <Link to="/task1"><button>Task 1</button></Link>
        <Link to="/task2"><button>Task 2</button></Link>
        <Link to="/task3"><button>Task 3</button></Link>
        <Link to="/task4"><button>Task 4</button></Link>
        <Link to="/task5"><button>Task 5</button></Link>
      </nav>
      <Routes>
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
        <Route path="/task5" element={<Task5 />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
