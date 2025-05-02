import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const inlineCode = (color) => `// Inline style
<div style={{ color: '${color}' }}>Hello!</div>`;
const classCode = `// CSS file
import './App.css';
<div className="my-style">Hello!</div>

// In App.css
.my-style {
  color: blue;
}`;

const CSSStyling = () => {
  const [color, setColor] = useState('blue');
  const navigate = useNavigate();

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
      <h2>CSS Styling in React</h2>
      <p className="simple-def">
        You can style React components in many ways: inline styles, CSS files, or with the <b>className</b> prop.
      </p>
      <div className="feature-section">
        <label>
          Pick a color:
          <input
            value={color}
            onChange={e => setColor(e.target.value)}
            className="feature-input"
            type="color"
            style={{ width: 40, height: 32, padding: 0, marginLeft: 8 }}
          />
        </label>
        <div className="feature-output" style={{ color, fontWeight: 'bold', fontSize: 22, margin: '16px 0' }}>
          This text is styled!
        </div>
        <pre className="code-block">{inlineCode(color)}</pre>
        <pre className="code-block">{classCode}</pre>
      </div>
      <div className="feature-why">
        <h3>Ways to style in React</h3>
        <ul>
          <li>Inline styles: <code>style=&#123;&#123; color: 'red' &#125;&#125;</code></li>
          <li>CSS files: <code>import './App.css'</code> and use <code>className</code></li>
          <li>CSS-in-JS libraries (like styled-components)</li>
        </ul>
      </div>
    </div>
  );
};

export default CSSStyling; 