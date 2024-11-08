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

  // State to track the task being dragged or touched
  const [draggedTask, setDraggedTask] = useState(null);
  const [sourceBlock, setSourceBlock] = useState(null);

  // Handle drag start (Desktop)
  const onDragStart = (e, task, block) => {
    e.dataTransfer.setData('task', task);
    e.dataTransfer.setData('sourceBlock', block);
  };

  // Handle drop (Desktop)
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

  // Mobile Handlers (Touch events)
  const onTouchStart = (task, block) => {
    setDraggedTask(task);
    setSourceBlock(block);
  };

  const onTouchMove = (e) => {
    e.preventDefault(); // Prevent default behavior while moving
    // Optionally: You can add some visual feedback for touch movement here
  };

  const onTouchEnd = (destinationBlock) => {
    if (sourceBlock && draggedTask && sourceBlock !== destinationBlock) {
      setBlocks((prev) => ({
        ...prev,
        [destinationBlock]: [...prev[destinationBlock], draggedTask],
        [sourceBlock]: prev[sourceBlock].filter((t) => t !== draggedTask),
      }));
    }
    // Reset the state after dropping
    setDraggedTask(null);
    setSourceBlock(null);
  };

  return (
    <div className="task5">
      <h2>Task 5: Drag and Drop Task List</h2>

      {/* Render all blocks dynamically */}
      <div className="blocks-container">
        {Object.keys(blocks).map((block) => (
          <div
            key={block}
            className="block"
            onDrop={(e) => onDrop(e, block)}       // Desktop drop handler
            onDragOver={allowDrop}                 // Desktop drag over handler
            onTouchMove={onTouchMove}              // Mobile touch move handler
            onTouchEnd={() => onTouchEnd(block)}   // Mobile touch end handler
          >
            <h3>{block}</h3>
            <ul>
              {blocks[block].map((task, idx) => (
                <li
                  key={idx}
                  draggable
                  onDragStart={(e) => onDragStart(e, task, block)} // Desktop drag start
                  onTouchStart={() => onTouchStart(task, block)}   // Mobile touch start
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
