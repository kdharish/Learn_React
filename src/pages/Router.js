import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const codeExample = `// Basic React Router usage
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

<BrowserRouter>
  <nav>
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
  </nav>
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>`;

const RouterDemo = () => {
  const [page, setPage] = useState('Home');
  const navigate = useNavigate();

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
      <h2>React Router</h2>
      <p className="simple-def">
        <b>React Router</b> lets you create multiple pages in your React app. It makes navigation easy, just like a real website!
      </p>
      <div className="feature-section">
        <nav style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
          <button className="learn-more-btn" onClick={() => setPage('Home')}>Home</button>
          <button className="learn-more-btn" onClick={() => setPage('About')}>About</button>
        </nav>
        <div className="feature-output">
          {page === 'Home' && <div><h3>Home Page</h3><p>Welcome to the Home page!</p></div>}
          {page === 'About' && <div><h3>About Page</h3><p>This is the About page.</p></div>}
        </div>
        <pre className="code-block">{codeExample}</pre>
      </div>
      <div className="feature-why">
        <h3>Why use React Router?</h3>
        <ul>
          <li>Lets you build multi-page apps</li>
          <li>Easy navigation with links</li>
          <li>Works with browser history (back/forward)</li>
        </ul>
      </div>
    </div>
  );
};

export default RouterDemo; 