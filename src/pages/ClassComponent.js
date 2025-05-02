import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const classCode = `class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    // Called after component is added to the DOM
  }

  componentDidUpdate() {
    // Called after state or props change
  }

  componentWillUnmount() {
    // Called before component is removed
  }

  render() {
    return <div>...</div>;
  }
}`;

class DemoClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, logs: ['constructor'] };
  }

  componentDidMount() {
    this.addLog('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      this.addLog('componentDidUpdate');
    }
  }

  componentWillUnmount() {
    this.addLog('componentWillUnmount');
  }

  addLog = (msg) => {
    this.setState((s) => ({ logs: [...s.logs, msg] }));
  };

  render() {
    return (
      <div className="feature-section">
        <h4>Class Component Demo</h4>
        <div className="feature-output">
          <p>Count: {this.state.count}</p>
          <button onClick={() => this.setState(s => ({ count: s.count + 1 }))} className="learn-more-btn">Increment</button>
        </div>
        <div className="feature-why">
          <h4>Lifecycle Log:</h4>
          <ul>
            {this.state.logs.map((log, i) => <li key={i}>{log}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

const ClassComponentPage = () => {
  const [showDemo, setShowDemo] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
      <h2>Class Components & Lifecycle</h2>
      <p className="simple-def">
        <b>Class components</b> are an older way to write components in React. They let you use state and lifecycle methods.
      </p>
      <div className="feature-section">
        <button className="learn-more-btn" onClick={() => setShowDemo(s => !s)}>
          {showDemo ? 'Unmount Component' : 'Mount Component'}
        </button>
        {showDemo && <DemoClassComponent />}
      </div>
      <div className="feature-why">
        <h3>Key Lifecycle Methods</h3>
        <ul>
          <li><b>constructor</b>: Setup state and props</li>
          <li><b>render</b>: Returns the JSX to display</li>
          <li><b>componentDidMount</b>: Runs after component is added to the page</li>
          <li><b>componentDidUpdate</b>: Runs after state/props change</li>
          <li><b>componentWillUnmount</b>: Runs before component is removed</li>
        </ul>
        <h3>Class Component Example</h3>
        <pre className="code-block">{classCode}</pre>
        <h3>Why use class components?</h3>
        <ul>
          <li>Needed for some older React code</li>
          <li>Good for learning React's lifecycle</li>
          <li>Most new code uses functional components + hooks</li>
        </ul>
      </div>
    </div>
  );
};

export default ClassComponentPage; 