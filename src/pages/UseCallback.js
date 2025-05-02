import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const codeExample = `// useCallback example
import { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);
  return <Child onClick={handleClick} />;
}

function Child({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}`;

const Child = React.memo(({ onClick, clicks }) => {
  return (
    <button className="learn-more-btn" onClick={onClick} style={{ marginTop: 12 }}>
      Child Button Clicked: {clicks}
    </button>
  );
});

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  // Memoized callback
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
      <h2>useCallback Hook</h2>
      <p className="simple-def">
        <b>useCallback</b> is a React Hook that lets you memoize a function, so it doesn't get recreated on every render. This is useful for passing stable callbacks to child components.
      </p>
      <div className="feature-section">
        <Child onClick={handleClick} clicks={count} />
        <pre className="code-block">{codeExample}</pre>
      </div>
      <div className="feature-why">
        <h3>Why use useCallback?</h3>
        <ul>
          <li>Prevents unnecessary re-renders of child components</li>
          <li>Keeps functions stable between renders</li>
          <li>Great for performance optimization</li>
        </ul>
      </div>
    </div>
  );
};

export default UseCallback; 