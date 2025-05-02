import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const codeExample = `// Custom Hook example
import { useState, useEffect } from 'react';

function useTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

function MyComponent() {
  useTitle('Hello!');
  return <h1>Hello!</h1>;
}`;

function useTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

const CustomHooks = () => {
  const [title, setTitle] = useState('React App');
  const navigate = useNavigate();

  useTitle(title);

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
      <h2>Custom Hooks</h2>
      <p className="simple-def">
        <b>Custom hooks</b> are functions that let you reuse logic between components. They start with <b>use</b> and can use other hooks inside.
      </p>
      <div className="feature-section">
        <label>
          Set page title:
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="feature-input"
            style={{ marginLeft: 8 }}
          />
        </label>
        <div className="feature-output" style={{ marginTop: 12 }}>
          <b>Current title:</b> {title}
        </div>
        <pre className="code-block">{codeExample}</pre>
      </div>
      <div className="feature-why">
        <h3>Why use custom hooks?</h3>
        <ul>
          <li>Share logic between components</li>
          <li>Keep code clean and reusable</li>
          <li>Can use any built-in or other custom hooks</li>
        </ul>
      </div>
    </div>
  );
};

export default CustomHooks; 