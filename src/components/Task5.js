import React, { useState } from 'react';
import '../Styles/Task5.css'; 

function Task5() {
  const [blocks, setBlocks] = useState({
    Today: [],
    Tomorrow: [],
    ThisWeek: [],
    NextWeek: [],
    Unplanned: [
      'Test Task 1', 'Test Task 2', 'Test Task 3', 'Test Task 4', 'Test Task 5', 
      'Test Task 6', 'Test Task 7', 'Test Task 8', 'Test Task 9', 'Test Task 10'
    ]
  });

 
  const onDragStart = (e, task, sourceBlock) => {
    e.dataTransfer.setData('task', task);
    e.dataTransfer.setData('sourceBlock', sourceBlock); 
  };

  const onDrop = (e, destinationBlock) => {
    const task = e.dataTransfer.getData('task');
    const sourceBlock = e.dataTransfer.getData('sourceBlock');
    
    if (sourceBlock !== destinationBlock) {
      
      setBlocks((prev) => ({
        ...prev,
        [destinationBlock]: [...prev[destinationBlock], task],
        [sourceBlock]: prev[sourceBlock].filter((t) => t !== task), 
      }));
    }
  };

  const allowDrop = (e) => {
    e.preventDefault(); 
  };

  return (
    <div className="task5">
      <h2>Task 5: Drag and Drop Task List</h2>

     
      <div className="blocks-container">
        {Object.keys(blocks).map((block) => (
          <div
            key={block}
            className="block"
            onDrop={(e) => onDrop(e, block)}
            onDragOver={allowDrop}
          >
            <h3>{block}</h3>
            <ul>
              {blocks[block].map((task, idx) => (
                <li
                  key={idx}
                  draggable
                  onDragStart={(e) => onDragStart(e, task, block)} 
                >
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task5;
