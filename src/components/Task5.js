import React, { useState } from 'react';
import '../Styles/Task5.css'; // Import specific CSS for Task 5

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

  const [draggedTask, setDraggedTask] = useState(null); // To store the task being dragged
  const [sourceBlock, setSourceBlock] = useState(null); // To store the source block

  // Drag Handlers for Desktop
  const onDragStart = (e, task, block) => {
    setDraggedTask(task);
    setSourceBlock(block);
  };

  const onDrop = (e, destinationBlock) => {
    if (sourceBlock !== destinationBlock && draggedTask) {
      setBlocks((prev) => ({
        ...prev,
        [destinationBlock]: [...prev[destinationBlock], draggedTask],
        [sourceBlock]: prev[sourceBlock].filter((t) => t !== draggedTask),
      }));
      setDraggedTask(null); // Clear dragged task after drop
      setSourceBlock(null);
    }
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  // Touch Handlers for Mobile
  const onTouchStart = (e, task, block) => {
    setDraggedTask(task);
    setSourceBlock(block);
  };

  const onTouchEnd = (destinationBlock) => {
    if (sourceBlock !== destinationBlock && draggedTask) {
      setBlocks((prev) => ({
        ...prev,
        [destinationBlock]: [...prev[destinationBlock], draggedTask],
        [sourceBlock]: prev[sourceBlock].filter((t) => t !== draggedTask),
      }));
      setDraggedTask(null); // Clear dragged task after drop
      setSourceBlock(null);
    }
  };

  return (
    <div className="task5">
      <h2>Task 5: Drag and Drop Task List (With Mobile Support)</h2>

      {/* Render all blocks dynamically */}
      <div className="blocks-container">
        {Object.keys(blocks).map((block) => (
          <div
            key={block}
            className="block"
            onDrop={(e) => onDrop(e, block)}
            onDragOver={allowDrop}
            onTouchEnd={() => onTouchEnd(block)} // Mobile drop logic
          >
            <h3>{block}</h3>
            <ul>
              {blocks[block].map((task, idx) => (
                <li
                  key={idx}
                  draggable
                  onDragStart={(e) => onDragStart(e, task, block)} // Desktop drag start
                  onTouchStart={(e) => onTouchStart(e, task, block)} // Mobile touch start
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
