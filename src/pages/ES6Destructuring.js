import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const codeExample = (user, colors) => `// Object destructuring
const user = { name: '${user.name}', age: ${user.age} };
const { name: userName, age } = user;

// Array destructuring
const colors = ['${colors[0]}', '${colors[1]}'];
const [first, second] = colors;

console.log(userName, age); // ${user.name}, ${user.age}
console.log(first, second); // ${colors[0]}, ${colors[1]}`;

const ES6Destructuring = () => {
  const [user, setUser] = useState({ name: 'Alice', age: 20 });
  const [colors, setColors] = useState(['red', 'blue']);
  const navigate = useNavigate();

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/es6')}>&larr; Back to ES6 Features</button>
      <h2>Destructuring</h2>
      <p className="simple-def">
        Destructuring lets you quickly take values from objects or arrays and put them into variables. It makes code shorter and easier to read.
      </p>
      <div className="feature-section">
        <label>
          User name:
          <input
            value={user.name}
            onChange={e => setUser(u => ({ ...u, name: e.target.value }))}
            className="feature-input"
          />
        </label>
        <label>
          User age:
          <input
            type="number"
            value={user.age}
            onChange={e => setUser(u => ({ ...u, age: Number(e.target.value) }))}
            className="feature-input"
            min={0}
          />
        </label>
        <label>
          First color:
          <input
            value={colors[0]}
            onChange={e => setColors([e.target.value, colors[1]])}
            className="feature-input"
          />
        </label>
        <label>
          Second color:
          <input
            value={colors[1]}
            onChange={e => setColors([colors[0], e.target.value])}
            className="feature-input"
          />
        </label>
        <pre className="code-block">
          {codeExample(user, colors)}
        </pre>
      </div>
      <div className="feature-why">
        <h3>Why use destructuring in React?</h3>
        <ul>
          <li>Shorter code for props and state</li>
          <li>Makes code easier to read</li>
          {/* <li>Common in function parameters (like <code>function MyComp({ name })</code>)</li> */}
          <li>Common in function parameters (like <code>function MyComp(&#123; name &#125;)</code>)</li>
        </ul>
      </div>
    </div>
  );
};

export default ES6Destructuring; 