import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const codeExample = (name) => `// Old way
function greet(name) {
  name = name || 'friend';
  return 'Hello, ' + name + '!';
}

greet(); // Hello, friend!

greet('Sam'); // Hello, Sam!

// ES6 default parameter
function greet2(name = 'friend') {
  return 'Hello, ' + name + '!';
}

greet2(); // Hello, friend!
greet2('${name}'); // Hello, ${name}!`;

const ES6DefaultParameters = () => {
  const [name, setName] = useState('Sam');
  const navigate = useNavigate();

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/es6')}>&larr; Back to ES6 Features</button>
      <h2>Default Parameters</h2>
      <p className="simple-def">
        Default parameters let you set a value for a function argument if it is not given. This makes your code safer and shorter.
      </p>
      <div className="feature-section">
        <label>
          Name (optional):
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="feature-input"
          />
        </label>
        <pre className="code-block">
          {codeExample(name)}
        </pre>
      </div>
      <div className="feature-why">
        <h3>Why use default parameters in React?</h3>
        <ul>
          <li>Functions work even if you forget an argument</li>
          <li>Great for reusable utility functions</li>
          <li>Cleaner than checking for undefined</li>
        </ul>
      </div>
    </div>
  );
};

export default ES6DefaultParameters; 