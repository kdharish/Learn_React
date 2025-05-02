import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ES6Main.css';

const features = [
  { label: 'Arrow Functions', route: '/es6/arrow-functions', desc: 'A shorter way to write functions.' },
  { label: 'let & const', route: '/es6/let-const', desc: 'New ways to declare variables.' },
  { label: 'Destructuring', route: '/es6/destructuring', desc: 'Easily extract values from objects and arrays.' },
  { label: 'Template Literals', route: '/es6/template-literals', desc: 'String interpolation with backticks.' },
  { label: 'Spread & Rest Operators', route: '/es6/spread-rest', desc: 'Expand or collect items in arrays/objects.' },
  { label: 'Default Parameters', route: '/es6/default-parameters', desc: 'Set default values for function parameters.' },
  { label: 'Import/Export', route: '/es6/import-export', desc: 'Share code between files.' },
];

const ES6Main = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(null);

  return (
    <div className="es6-main">
      <h2>What is ES6?</h2>
      <p className="simple-def">
        ES6 (ECMAScript 2015) is a version of JavaScript that added many new features. These features make writing React code easier and cleaner.
      </p>
      <div className="collapsible-list">
        {features.map((f, idx) => (
          <div key={f.route} className="collapsible-section">
            <div className="collapsible-header" onClick={() => setOpen(open === idx ? null : idx)}>
              <span>{f.label}</span>
              <span>{open === idx ? '▲' : '▼'}</span>
            </div>
            {open === idx && (
              <div className="collapsible-content">
                <p>{f.desc}</p>
                <button className="learn-more-btn" onClick={() => navigate(f.route)}>Learn more</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ES6Main; 