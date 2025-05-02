import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const codeExample = (arr, obj) => `// Spread (copy/merge arrays)
const arr = [${arr.join(', ')}];
const arr2 = [...arr, 4]; // [${[...arr, 4].join(', ')}]

// Spread (copy/merge objects)
const obj = { a: ${obj.a}, b: ${obj.b} };
const obj2 = { ...obj, c: 3 }; // { a: ${obj.a}, b: ${obj.b}, c: 3 }

// Rest (function args)
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3); // 6`;

const ES6SpreadRest = () => {
  const [arr, setArr] = useState([1, 2, 3]);
  const [obj, setObj] = useState({ a: 1, b: 2 });
  const navigate = useNavigate();

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/es6')}>&larr; Back to ES6 Features</button>
      <h2>Spread & Rest Operators</h2>
      <p className="simple-def">
        The <b>spread</b> operator (<code>...</code>) lets you copy or merge arrays and objects. The <b>rest</b> operator (<code>...</code>) lets you collect function arguments into an array.
      </p>
      <div className="feature-section">
        <label>
          Array (comma separated):
          <input
            value={arr.join(', ')}
            onChange={e => setArr(e.target.value.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n)))}
            className="feature-input"
          />
        </label>
        <label>
          Object a:
          <input
            type="number"
            value={obj.a}
            onChange={e => setObj(o => ({ ...o, a: Number(e.target.value) }))}
            className="feature-input"
          />
        </label>
        <label>
          Object b:
          <input
            type="number"
            value={obj.b}
            onChange={e => setObj(o => ({ ...o, b: Number(e.target.value) }))}
            className="feature-input"
          />
        </label>
        <pre className="code-block">
          {codeExample(arr, obj)}
        </pre>
      </div>
      <div className="feature-why">
        <h3>Why use spread/rest in React?</h3>
        <ul>
          <li>Copy arrays/objects without changing the original</li>
          <li>Merge props or state easily</li>
          <li>Handle variable number of function arguments</li>
        </ul>
      </div>
    </div>
  );
};

export default ES6SpreadRest; 