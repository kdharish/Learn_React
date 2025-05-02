import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const codeExample = (name, age) => `// Old way (string +)\nvar message = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';\n\n// Template literal (ES6)\nconst message2 = \`Hello, my name is \\${name} and I am \\${age} years old.\`;\n\nconsole.log(message2); // Hello, my name is ${name} and I am ${age} years old.`;

const ES6TemplateLiterals = () => {
  const [name, setName] = useState('Sam');
  const [age, setAge] = useState(25);
  const navigate = useNavigate();

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/es6')}>&larr; Back to ES6 Features</button>
      <h2>Template Literals</h2>
      <p className="simple-def">
        Template literals let you put variables directly inside strings using backticks (<code>`</code>). This makes combining text and variables much easier.
      </p>
      <div className="feature-section">
        <label>
          Name:
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="feature-input"
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={e => setAge(Number(e.target.value))}
            className="feature-input"
            min={0}
          />
        </label>
        <pre className="code-block">
          {codeExample(name, age)}
        </pre>
      </div>
      <div className="feature-why">
        <h3>Why use template literals in React?</h3>
        <ul>
          <li>Easy to build strings with variables</li>
          <li>Great for dynamic text in JSX</li>
          <li>Cleaner and easier to read than string +</li>
        </ul>
      </div>
    </div>
  );
};

export default ES6TemplateLiterals; 