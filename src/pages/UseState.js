import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const codeExample = `// useState example
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span> {count} </span>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}`;

const UseState = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
      <h2>useState Hook</h2>
      <p className="simple-def">
        <b>useState</b> is a React Hook that lets you add state to your functional components. State is data that can change over time.
      </p>
      <div className="feature-section">
        <button className="learn-more-btn" onClick={() => setCount(count - 1)}>-</button>
        <span style={{ margin: '0 16px', fontWeight: 'bold', fontSize: 20 }}>{count}</span>
        <button className="learn-more-btn" onClick={() => setCount(count + 1)}>+</button>
        <pre className="code-block">{codeExample}</pre>
      </div>
      <div className="feature-why">
        <h3>Why use useState?</h3>
        <ul>
          <li>Adds state to functional components</li>
          <li>Lets you update the UI when data changes</li>
          <li>Very common in all React apps</li>
        </ul>
      </div>
    </div>
  );
};

export default UseState; 