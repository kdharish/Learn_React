import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const codeExample = (fruit, count) => `// Using var (old way)
var fruit = '${fruit}';
var count = ${count};

// Using let (block-scoped)
let fruitLet = '${fruit}';
let countLet = ${count};

// Using const (cannot change)
const fruitConst = '${fruit}';

fruitLet = 'banana'; // OK
// fruitConst = 'banana'; // ❌ Error: can't change const`;

const ES6LetConst = () => {
  const [fruit, setFruit] = useState('apple');
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/es6')}>&larr; Back to ES6 Features</button>
      <h2>let & const</h2>
      <p className="simple-def">
        <b>let</b> and <b>const</b> are new ways to declare variables in JavaScript. <b>let</b> lets you change the value, <b>const</b> means the value cannot change. They are safer and easier to use than <b>var</b>.
      </p>
      <div className="feature-section">
        <label>
          Fruit name:
          <input
            value={fruit}
            onChange={e => setFruit(e.target.value)}
            className="feature-input"
          />
        </label>
        <label>
          Count:
          <input
            type="number"
            value={count}
            onChange={e => setCount(Number(e.target.value))}
            className="feature-input"
            min={0}
          />
        </label>
        <pre className="code-block">
          {codeExample(fruit, count)}
        </pre>
      </div>
      <div className="feature-why">
        <h3>Why use let & const in React?</h3>
        <ul>
          <li>Helps avoid bugs from accidental changes</li>
          <li>const is great for values that never change (like components)</li>
          <li>let is good for values that change (like counters)</li>
        </ul>
      </div>
    </div>
  );
};

export default ES6LetConst; 