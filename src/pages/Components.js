import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const functionalCode = (name) => `// Functional Component
function Greeting(props) {
  return <h3>Hello, {props.name}!</h3>;
}`;

const classCode = (name) => `// Class Component
class Greeting extends React.Component {
  render() {
    return <h3>Hello, {this.props.name}!</h3>;
  }
}`;

const Components = () => {
  const [name, setName] = useState('React Learner');
  const navigate = useNavigate();

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
      <h2>What are Components?</h2>
      <p className="simple-def">
        <b>Components</b> are the building blocks of a React app. Each component is a piece of UI, like a button, a form, or a whole page. Components make your code reusable and easy to manage.
      </p>
      <div className="feature-section">
        <label>
          Your name:
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="feature-input"
          />
        </label>
        <div className="feature-output">
          <h4>Functional Component:</h4>
          <h3>Hello, {name}!</h3>
        </div>
        <pre className="code-block">{functionalCode(name)}</pre>
        <div className="feature-output">
          <h4>Class Component:</h4>
          <h3>Hello, {name}!</h3>
        </div>
        <pre className="code-block">{classCode(name)}</pre>
      </div>
      <div className="feature-why">
        <h3>Why use components?</h3>
        <ul>
          <li>Break your UI into small, reusable pieces</li>
          <li>Easy to manage and update</li>
          <li>Can be functional or class-based</li>
        </ul>
      </div>
    </div>
  );
};

export default Components; 