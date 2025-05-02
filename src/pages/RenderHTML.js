import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const functionalCode = (message) => `// Functional Component
function Welcome() {
  return (
    <div>
      <h3>Hello from Functional!</h3>
      <p>${message}</p>
    </div>
  );
}`;

const classCode = (message) => `// Class Component
class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h3>Hello from Class!</h3>
        <p>${message}</p>
      </div>
    );
  }
}`;

function FunctionalExample({ message }) {
  return (
    <div className="feature-section">
      <h4>Functional Component</h4>
      <div className="feature-output">
        <h3>Hello from Functional!</h3>
        <p>{message}</p>
      </div>
      <pre className="code-block">{functionalCode(message)}</pre>
    </div>
  );
}

class ClassExample extends Component {
  render() {
    const { message } = this.props;
    return (
      <div className="feature-section">
        <h4>Class Component</h4>
        <div className="feature-output">
          <h3>Hello from Class!</h3>
          <p>{message}</p>
        </div>
        <pre className="code-block">{classCode(message)}</pre>
      </div>
    );
  }
}

const RenderHTML = () => {
  const [message, setMessage] = useState('This is how you render HTML in React!');
  const navigate = useNavigate();

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
      <h2>Rendering HTML in React</h2>
      <p className="simple-def">
        In React, you render HTML by returning JSX from your component. JSX looks like HTML, but it is actually JavaScript! You can use it in both functional and class components.
      </p>
      <label>
        Change the message:
        <input
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="feature-input"
        />
      </label>
      <FunctionalExample message={message} />
      <ClassExample message={message} />
      <div className="feature-why">
        <h3>Why is this important?</h3>
        <ul>
          <li>JSX lets you write HTML-like code in JavaScript</li>
          <li>Works in both functional and class components</li>
          <li>Easy to update what you see by changing state/props</li>
        </ul>
      </div>
    </div>
  );
};

export default RenderHTML; 