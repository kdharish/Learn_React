import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const codeExample = `// Rendering a list in React
const items = ['Apple', 'Banana', 'Cherry'];
return (
  <ul>
    {items.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
);`;

const Lists = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input.trim()]);
      setInput('');
    }
  };

  const removeItem = (idx) => {
    setItems(items.filter((_, i) => i !== idx));
  };

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
      <h2>Rendering Lists in React</h2>
      <p className="simple-def">
        In React, you can use <b>.map()</b> to render a list of items. Each item should have a unique <b>key</b>.
      </p>
      <div className="feature-section">
        <label>
          Add item:
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            className="feature-input"
            placeholder="Type and add..."
          />
          <button className="learn-more-btn" onClick={addItem} style={{ marginLeft: 8 }}>Add</button>
        </label>
        <ul className="feature-output">
          {items.map((item, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
              {item}
              <button onClick={() => removeItem(idx)} style={{ marginLeft: 8, color: '#fff', background: '#e53935', border: 'none', borderRadius: 4, cursor: 'pointer', padding: '2px 8px' }}>Remove</button>
            </li>
          ))}
        </ul>
        <pre className="code-block">{codeExample}</pre>
      </div>
      <div className="feature-why">
        <h3>Why render lists?</h3>
        <ul>
          <li>Show dynamic data (like todos, users, etc.)</li>
          <li>Use <b>key</b> prop for better performance</li>
          <li>Easy to add, remove, or update items</li>
        </ul>
      </div>
    </div>
  );
};

export default Lists; 