import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const sassCode = `// In App.scss
$main-color: #4caf50;

.sass-box {
  background: $main-color;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
}`;

const SassStyling = () => {
  const [theme, setTheme] = useState('green');
  const navigate = useNavigate();
  const color = theme === 'green' ? '#4caf50' : theme === 'blue' ? '#1976d2' : '#e53935';

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
      <h2>Sass/SCSS Styling in React</h2>
      <p className="simple-def">
        <b>Sass</b> (or <b>SCSS</b>) is a CSS preprocessor that lets you use variables, nesting, and more. You can use Sass in React by importing <code>.scss</code> files.
      </p>
      <div className="feature-section">
        <label>
          Pick a theme color:
          <select value={theme} onChange={e => setTheme(e.target.value)} className="feature-input" style={{ marginLeft: 8 }}>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
          </select>
        </label>
        <div style={{ background: color, color: '#fff', padding: 16, borderRadius: 8, margin: '16px 0', fontWeight: 'bold' }}>
          This box is styled with a Sass variable!
        </div>
        <pre className="code-block">{sassCode}</pre>
      </div>
      <div className="feature-why">
        <h3>Why use Sass?</h3>
        <ul>
          <li>Use variables for colors, spacing, etc.</li>
          <li>Nesting and mixins for cleaner code</li>
          <li>Works great with React (just import .scss files)</li>
        </ul>
      </div>
    </div>
  );
};

export default SassStyling; 