import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const Events = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
      <h2>React Events</h2>
      <p className="simple-def">
        <b>Events</b> in React are actions like clicks, typing, or mouse moves. You can use events to make your app interactive.
      </p>
      <div className="feature-section">
        <label>
          Type something:
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            className="feature-input"
            placeholder="Type here..."
          />
        </label>
        <div className="feature-output">
          <p>You typed: <b>{input}</b></p>
        </div>
        <button className="learn-more-btn" onClick={() => setCount(c => c + 1)}>
          Click me!
        </button>
        <div className="feature-output">
          <p>Button clicked <b>{count}</b> times</p>
        </div>
        <pre className="code-block">{`
// Button click event
<button onClick={() => setCount(count + 1)}>Click me!</button>

// Input change event
<input onChange={e => setInput(e.target.value)} />
`}</pre>
      </div>
      <div className="feature-why">
        <h3>Why are events important?</h3>
        <ul>
          <li>Make your app interactive</li>
          <li>React uses camelCase for event names (onClick, onChange, etc.)</li>
          <li>Works just like JavaScript events, but in JSX</li>
        </ul>
      </div>
    </div>
  );
};

export default Events; 