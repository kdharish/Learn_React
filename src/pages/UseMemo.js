import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const codeExample = `// useMemo example
import { useState, useMemo } from 'react';

function ExpensiveComponent({ num }) {
  const result = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }
    return num * total;
  }, [num]);
  return <div>Result: {result}</div>;
}`;

function expensiveCalculation(num) {
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }
  return num * total;
}

const UseMemo = () => {
  const [num, setNum] = useState(1);
  const [other, setOther] = useState('');
  const navigate = useNavigate();

  const result = useMemo(() => expensiveCalculation(num), [num]);

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
      <h2>useMemo Hook</h2>
      <p className="simple-def">
        <b>useMemo</b> is a React Hook that lets you memoize the result of a calculation. It only recalculates when its dependencies change, which can make your app faster.
      </p>
      <div className="feature-section">
        <label>
          Number:
          <input
            type="number"
            value={num}
            onChange={e => setNum(Number(e.target.value))}
            className="feature-input"
            style={{ width: 80, marginRight: 8 }}
          />
        </label>
        <label>
          Other input (does not recalculate):
          <input
            value={other}
            onChange={e => setOther(e.target.value)}
            className="feature-input"
            style={{ marginLeft: 8 }}
          />
        </label>
        <div className="feature-output" style={{ marginTop: 12 }}>
          Result: {result}
        </div>
        <pre className="code-block">{codeExample}</pre>
      </div>
      <div className="feature-why">
        <h3>Why use useMemo?</h3>
        <ul>
          <li>Speeds up your app by avoiding unnecessary calculations</li>
          <li>Only recalculates when needed</li>
          <li>Great for expensive or slow functions</li>
        </ul>
      </div>
    </div>
  );
};

export default UseMemo; 