import React, { useState, useRef, useEffect } from 'react';
import './PropsVisualization.css';

const Benefits = () => (
  <div className="visual-section">
    <h3>Benefits of Props</h3>
    <div className="visual-list">
      <div className="visual-item">
        <span role="img" aria-label="reusable">🔁</span>
        <p>Components become reusable</p>
      </div>
      <div className="visual-item">
        <span role="img" aria-label="data-flow">➡️</span>
        <p>Easy one-way data flow</p>
      </div>
      <div className="visual-item">
        <span role="img" aria-label="customize">🎨</span>
        <p>Customize child components</p>
      </div>
    </div>
  </div>
);

const Drawbacks = () => (
  <div className="visual-section">
    <h3>Drawbacks of Props</h3>
    <div className="visual-list">
      <div className="visual-item">
        <span role="img" aria-label="prop-drilling">🪓</span>
        <p>Prop drilling: passing props through many layers</p>
      </div>
      <div className="visual-item">
        <span role="img" aria-label="read-only">🚫</span>
        <p>Props are read-only in child</p>
      </div>
    </div>
  </div>
);

function Child({ message, animate }) {
  const childRef = useRef();
  useEffect(() => {
    if (animate && childRef.current) {
      childRef.current.classList.add('flash');
      const timeout = setTimeout(() => {
        childRef.current.classList.remove('flash');
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [message, animate]);

  return (
    <div className="child-box" ref={childRef}>
      <h4>Child Component</h4>
      <div className="step-label">3. Child receives and destructures the prop</div>
      <div className="prop-value highlighted">Received prop: <b>{message}</b></div>
      <div className="destructure">(using <code>{'{ message }'}</code> destructuring)</div>
    </div>
  );
}

// function Parent() {
//   const [input, setInput] = useState('Hello from Parent!');
//   const [animate, setAnimate] = useState(false);
//   const arrowRef = useRef();
//   const bubbleRef = useRef();

//   useEffect(() => {
//     if (arrowRef.current && bubbleRef.current) {
//       arrowRef.current.classList.add('arrow-animate');
//       bubbleRef.current.classList.add('bubble-animate');
//       setAnimate(true);
//       const timeout = setTimeout(() => {
//         arrowRef.current.classList.remove('arrow-animate');
//         bubbleRef.current.classList.remove('bubble-animate');
//         setAnimate(false);
//       }, 600);
//       return () => clearTimeout(timeout);
//     }
//   }, [input]);

//   return (
//     <div className="parent-child-visual">
//       <div className="parent-box">
//         <h4>Parent Component</h4>
//         <div className="step-label">1. User types a message in Parent</div>
//         <label>
//           Type a message to send as prop:
//           <input
//             value={input}
//             onChange={e => setInput(e.target.value)}
//             className="prop-input"
//           />
//         </label>
//         <div className="step-label">2. Message is sent as prop to Child ↓</div>
//       </div>
//       <div className="arrow-area">
//         <div className="message-bubble" ref={bubbleRef}>{input}</div>
//         <div className="arrow" ref={arrowRef}>↓</div>
//       </div>
//       <Child message={input} animate={animate} />
//     </div>
//   );
// }

const CodeBlock = ({ code, highlightLines = [] }) => {
  // Simple code block with optional line highlighting
  return (
    <pre className="code-block">
      {code.split('\n').map((line, idx) => (
        <div
          key={idx}
          className={highlightLines.includes(idx + 1) ? 'code-highlight' : ''}
        >
          {line}
        </div>
      ))}
    </pre>
  );
};

const PropsVisualization = () => {
  const [liveMessage, setLiveMessage] = useState('Hello from Parent!');

  // Sync with Parent input
  const handleInputChange = (val) => setLiveMessage(val);

  const parentCode = `function Parent() {\n  const [input, setInput] = useState("${liveMessage}");\n\n  return (\n    <Child message={input} /> // Passing 'input' as prop\n  );\n}`;

  const childCode = `function Child({ message }) { // Destructuring props\n  return (\n    <div>\n      Received prop: {message}\n    </div>\n  );\n}`;

  return (
    <div className="props-visualization">
      <h2>What are Props in React?</h2>
      <p className="simple-def">Props are like messages or data that a parent component sends to a child component. They help components talk to each other.</p>
      <div className="visual-area">
        {/* Pass liveMessage and handler to Parent for code sync */}
        <ParentWithCodeSync message={liveMessage} onInputChange={handleInputChange} />
      </div>
      <div className="code-section">
        <h3>How does the code look?</h3>
        <div className="code-examples">
          <div>
            <div className="code-label">Parent Component</div>
            <CodeBlock code={parentCode} highlightLines={[4]} />
          </div>
          <div>
            <div className="code-label">Child Component</div>
            <CodeBlock code={childCode} highlightLines={[1]} />
          </div>
        </div>
      </div>
      <Benefits />
      <Drawbacks />
    </div>
  );
};

// Wrapper to sync code and visualization
function ParentWithCodeSync({ message, onInputChange }) {
  const [input, setInput] = useState(message);
  const [animate, setAnimate] = useState(false);
  const arrowRef = useRef();
  const bubbleRef = useRef();

  useEffect(() => {
    setInput(message);
  }, [message]);

  useEffect(() => {
    if (arrowRef.current && bubbleRef.current) {
      arrowRef.current.classList.add('arrow-animate');
      bubbleRef.current.classList.add('bubble-animate');
      setAnimate(true);
      const timeout = setTimeout(() => {
        arrowRef.current.classList.remove('arrow-animate');
        bubbleRef.current.classList.remove('bubble-animate');
        setAnimate(false);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
    onInputChange(e.target.value);
  };

  return (
    <div className="parent-child-visual">
      <div className="parent-box">
        <h4>Parent Component</h4>
        <div className="step-label">1. User types a message in Parent</div>
        <label>
          Type a message to send as prop:
          <input
            value={input}
            onChange={handleChange}
            className="prop-input"
          />
        </label>
        <div className="step-label">2. Message is sent as prop to Child ↓</div>
      </div>
      <div className="arrow-area">
        <div className="message-bubble" ref={bubbleRef}>{input}</div>
        <div className="arrow" ref={arrowRef}>↓</div>
      </div>
      <Child message={input} animate={animate} />
    </div>
  );
}

export default PropsVisualization; 