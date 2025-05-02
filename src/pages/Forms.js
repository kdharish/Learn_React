import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6ArrowFunctions.css';

const codeExample = `// Controlled form in React
const [name, setName] = useState('');
const handleChange = (e) => setName(e.target.value);
return (
  <form>
    <input value={name} onChange={handleChange} />
  </form>
);`;

const Forms = () => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="es6-feature-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
      <h2>React Forms</h2>
      <p className="simple-def">
        In React, forms are usually <b>controlled</b>. This means the form data is kept in the component's state and updated with every change.
      </p>
      <div className="feature-section">
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
          <label>
            Name:
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="feature-input"
              placeholder="Enter your name"
            />
          </label>
          <label>
            Email:
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="feature-input"
              placeholder="Enter your email"
              type="email"
            />
          </label>
          <button className="learn-more-btn" type="submit">Submit</button>
        </form>
        {submitted && (
          <div className="feature-output" style={{ marginTop: 16 }}>
            <b>Submitted Data:</b>
            <div>Name: {form.name}</div>
            <div>Email: {form.email}</div>
          </div>
        )}
        <pre className="code-block">{codeExample}</pre>
      </div>
      <div className="feature-why">
        <h3>Why use controlled forms?</h3>
        <ul>
          <li>Easy to validate and control user input</li>
          <li>Form data is always in sync with state</li>
          <li>Great for dynamic forms and real-time feedback</li>
        </ul>
      </div>
    </div>
  );
};

export default Forms; 