import React, { useState, useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const ThemeContext = createContext();

const codeExample = `// useContext example
import { useContext, createContext } from 'react';

const ThemeContext = createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Theme: {theme}</button>;
}`;

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button className="learn-more-btn" style={{ background: theme === 'dark' ? '#232b32' : '#4caf50', color: '#fff', marginTop: 12 }}>
      Theme: {theme}
    </button>
  );
}

const UseContext = () => {
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();

  return (
    <ThemeContext.Provider value={theme}>
      <div className="es6-feature-page">
        <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
        <h2>useContext Hook</h2>
        <p className="simple-def">
          <b>useContext</b> is a React Hook that lets you use values from a context (like a global variable) in any component.
        </p>
        <div className="feature-section">
          <label>
            Pick a theme:
            <select value={theme} onChange={e => setTheme(e.target.value)} className="feature-input" style={{ marginLeft: 8 }}>
              <option value="light">light</option>
              <option value="dark">dark</option>
            </select>
          </label>
          <ThemedButton />
          <pre className="code-block">{codeExample}</pre>
        </div>
        <div className="feature-why">
          <h3>Why use useContext?</h3>
          <ul>
            <li>Share data (like theme, user) across components</li>
            <li>No need to pass props through every level</li>
            <li>Great for global settings</li>
          </ul>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default UseContext; 