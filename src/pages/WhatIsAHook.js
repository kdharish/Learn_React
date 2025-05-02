import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const codeExample = `// Using a Hook (useState)
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`;

const WhatIsAHook = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
      <h2>What is a Hook?</h2>
      <p className="simple-def">
        <b>Hooks</b> are special functions in React that let you use state and other features in functional components. The most common hook is <b>useState</b>.
      </p>
      <div className="feature-section">
        <button className="learn-more-btn" onClick={() => setCount(c => c + 1)}>
          Count: {count}
        </button>
        <pre className="code-block">{codeExample}</pre>
      </div>
      <div className="feature-why">
        <h3>Why are hooks important?</h3>
        <ul>
          <li>Let you use state and other features in functional components</li>
          <li>Make code simpler and easier to reuse</li>
          <li>Most new React code uses hooks</li>
        </ul>
      </div>
    </div>
  );
};

export default WhatIsAHook; 