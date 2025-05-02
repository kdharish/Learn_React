import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const codeExample = (show) => `// Conditional rendering
{show ? <p>Hello, user!</p> : <p>Please log in.</p>}`;

const Conditionals = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
      <h2>React Conditionals</h2>
      <p className="simple-def">
        <b>Conditional rendering</b> means showing or hiding parts of your UI based on some condition (like if a user is logged in).
      </p>
      <div className="feature-section">
        <button className="learn-more-btn" onClick={() => setShow(s => !s)}>
          {show ? 'Hide Greeting' : 'Show Greeting'}
        </button>
        <div className="feature-output">
          {show ? <p>Hello, user!</p> : <p>Please log in.</p>}
        </div>
        <pre className="code-block">{codeExample(show)}</pre>
      </div>
      <div className="feature-why">
        <h3>Why use conditionals?</h3>
        <ul>
          <li>Show or hide parts of your UI</li>
          <li>React supports if, ternary (?:), and &amp;&amp; for conditionals</li>
          <li>Great for login, loading, and more</li>
        </ul>
      </div>
    </div>
  );
};

export default Conditionals; 