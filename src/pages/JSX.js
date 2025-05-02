import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const jsxCode = (name) => `// JSX Example
function Hello() {
  return (
    <div>
      <h3>Hello, {name}!</h3>
      <p>This is JSX in action.</p>
    </div>
  );
}`;

const JSX = () => {
  const [name, setName] = useState('React');
  const navigate = useNavigate();

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
      <h2>What is JSX?</h2>
      <p className="simple-def">
        <b>JSX</b> stands for <b>JavaScript XML</b>. It lets you write HTML-like code inside JavaScript. JSX makes it easy to describe what your UI should look like in React.
      </p>
      <div className="feature-section">
        <label>
          Your name:
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="feature-input"
          />
        </label>
        <div className="feature-output">
          <h3>Hello, {name}!</h3>
          <p>This is JSX in action.</p>
        </div>
        <pre className="code-block">{jsxCode(name)}</pre>
      </div>
      <div className="feature-why">
        <h3>Why do we need JSX?</h3>
        <ul>
          <li>JSX makes code easier to read and write</li>
          <li>Looks like HTML, but is actually JavaScript</li>
          <li>Lets you use JavaScript inside your UI (with {'{}'})</li>
        </ul>
        <h3>Benefits of JSX</h3>
        <ul>
          <li>Helps catch errors early</li>
          <li>Works with all React features</li>
          <li>Easy to learn if you know HTML</li>
        </ul>
      </div>
    </div>
  );
};

export default JSX;
