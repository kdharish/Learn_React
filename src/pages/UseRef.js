import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const codeExample = `// useRef example
import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef();
  const focusInput = () => inputRef.current.focus();
  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}`;

const UseRef = () => {
  const inputRef = useRef();
  const navigate = useNavigate();

  const focusInput = () => {
    inputRef.current && inputRef.current.focus();
  };

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
      <h2>useRef Hook</h2>
      <p className="simple-def">
        <b>useRef</b> is a React Hook that lets you keep a reference to a DOM element or a value that doesn't cause re-renders.
      </p>
      <div className="feature-section">
        <input ref={inputRef} className="feature-input" placeholder="Click the button to focus me" style={{ marginRight: 8 }} />
        <button className="learn-more-btn" onClick={focusInput}>Focus Input</button>
        <pre className="code-block">{codeExample}</pre>
      </div>
      <div className="feature-why">
        <h3>Why use useRef?</h3>
        <ul>
          <li>Access DOM elements directly (like focusing an input)</li>
          <li>Store values that don't trigger re-renders</li>
          <li>Useful for timers, animations, and more</li>
        </ul>
      </div>
    </div>
  );
};

export default UseRef; 