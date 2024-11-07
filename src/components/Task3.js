import React, { useState } from 'react';
import'../Styles/Task3.css';
function Task3() {
  const [query, setQuery] = useState('');
  const items = [
    'Albert Einstein', 'Marie Curie', 'Mahatma Gandhi', 'Martin Luther King Jr.', 'Abraham Lincoln',
    'Isaac Newton', 'Leonardo da Vinci', 'Winston Churchill', 'Nelson Mandela', 'Galileo Galilei',
    'George Washington', 'Charles Darwin', 'Florence Nightingale', 'Cleopatra', 'Alexander the Great',
    'Julius Caesar', 'Joan of Arc', 'Thomas Edison', 'Christopher Columbus', 'Napoleon Bonaparte',
    'Rosa Parks', 'Wright Brothers', 'Nikola Tesla', 'Sigmund Freud', 'Queen Elizabeth I',
    'William Shakespeare', 'Moses', 'Ludwig van Beethoven', 'Mother Teresa', 'Amelia Earhart',
    'Anne Frank', 'Pablo Picasso', 'Genghis Khan', 'Vincent van Gogh', 'Franklin D. Roosevelt',
    'John F. Kennedy', 'Socrates', 'Aristotle', 'Plato', 'Charles Dickens', 
    'Mikhail Gorbachev', 'Margaret Thatcher', 'Catherine the Great', 'Queen Victoria', 'Hammurabi',
    'Karl Marx', 'Frederick Douglass', 'Malcolm X', 'Simón Bolívar', 'Leif Erikson' ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div >
      <h2>Task 3: Search Filter</h2>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className='game'>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Task3;
