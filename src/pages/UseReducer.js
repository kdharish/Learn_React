import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const codeExample = `// useReducer example
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <span> {state.count} </span>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  );
}`;

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const navigate = useNavigate();

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
      <h2>useReducer Hook</h2>
      <p className="simple-def">
        <b>useReducer</b> is a React Hook that lets you manage more complex state logic in your components. It's like useState, but for more advanced cases.
      </p>
      <div className="feature-section">
        <button className="learn-more-btn" onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <span style={{ margin: '0 16px', fontWeight: 'bold', fontSize: 20 }}>{state.count}</span>
        <button className="learn-more-btn" onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button className="learn-more-btn" onClick={() => dispatch({ type: 'reset' })} style={{ marginLeft: 8 }}>Reset</button>
        <pre className="code-block">{codeExample}</pre>
      </div>
      <div className="feature-why">
        <h3>Why use useReducer?</h3>
        <ul>
          <li>Great for complex state logic</li>
          <li>Helps organize state updates</li>
          <li>Useful for forms, counters, and more</li>
        </ul>
      </div>
    </div>
  );
};

export default UseReducer; 