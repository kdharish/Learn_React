import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const codeExample = `// useEffect example\nimport { useState, useEffect } from 'react';\n\nfunction Timer() {\n  const [count, setCount] = useState(0);\n  useEffect(() => {\n    document.title = \`Count: \\${count}\`;\n  }, [count]);\n  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;\n}`;

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setMessage(`Effect: Count is now ${count}`);
    // Optionally, you could update document.title here
    // document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
      <h2>useEffect Hook</h2>
      <p className="simple-def">
        <b>useEffect</b> is a React Hook that lets you run code after your component renders. It's great for things like fetching data, updating the DOM, or setting up timers.
      </p>
      <div className="feature-section">
        <button className="learn-more-btn" onClick={() => setCount(count + 1)}>Count: {count}</button>
        <div className="feature-output" style={{ marginTop: 12 }}>{message}</div>
        <pre className="code-block">{codeExample}</pre>
      </div>
      <div className="feature-why">
        <h3>Why use useEffect?</h3>
        <ul>
          <li>Run code after rendering (side effects)</li>
          <li>Fetch data, update the DOM, set up subscriptions</li>
          <li>Replaces lifecycle methods in class components</li>
        </ul>
      </div>
    </div>
  );
};

export default UseEffect; 