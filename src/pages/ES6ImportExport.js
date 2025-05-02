import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const codeExample = `// Exporting
export const PI = 3.14;
export function add(a, b) {
  return a + b;
}

// Importing
import { PI, add } from './math';

console.log(add(2, 3)); // 5`;

const ES6ImportExport = () => {
  const navigate = useNavigate();

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/es6')}>&larr; Back to ES6 Features</button>
      <h2>Import / Export</h2>
      <p className="simple-def">
        <b>import</b> and <b>export</b> let you share code between files. This is how you use components and functions from other files in React.
      </p>
      <div className="feature-section">
        <pre className="code-block">
          {codeExample}
        </pre>
      </div>
      <div className="feature-why">
        <h3>Why use import/export in React?</h3>
        <ul>
          <li>Split code into smaller, reusable files</li>
          <li>Share components and functions easily</li>
          <li>Required for React apps to work</li>
        </ul>
      </div>
    </div>
  );
};

export default ES6ImportExport; 