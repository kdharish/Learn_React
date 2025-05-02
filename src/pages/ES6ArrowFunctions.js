import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const codeExample = (name) => `// Normal function
function greet(name) {
  return 'Hello, ' + name + '!';
}

// Arrow function
const greetArrow = (name) => {
  return \`Hello, \\${name}!\`;\n};\n

greet('${name}'); // → "Hello, ${name}!"`;

const ES6ArrowFunctions = () => {
  const [name, setName] = useState('React');
  const navigate = useNavigate();

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/es6')}>&larr; Back to ES6 Features</button>
      <h2>Arrow Functions</h2>
      <p className="simple-def">
        Arrow functions are a shorter way to write functions in JavaScript. They are often used in React for event handlers and callbacks.
      </p>
      <div className="feature-section">
        <label>
          Type a name:
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="feature-input"
          />
        </label>
        <div className="feature-output">
          <b>Output:</b> Hello, {name}!
        </div>
        <pre className="code-block">
          {codeExample(name)}
        </pre>
      </div>
      <div className="feature-why">
        <h3>Why use Arrow Functions in React?</h3>
        <ul>
          <li>Shorter and cleaner code</li>
          <li>No need to use <code>this</code> keyword for most cases</li>
          <li>Great for inline functions (like event handlers)</li>
        </ul>
      </div>
    </div>
  );
};

export default ES6ArrowFunctions; 