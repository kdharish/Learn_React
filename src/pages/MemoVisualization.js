import React, { useState, useEffect, memo } from 'react';
import './MemoVisualization.css';

const Definition = () => (
  <div className="simple-def">
    <h2>What is React.memo?</h2>
    <p>
      <b>React.memo</b> is a tool that helps React remember a component's output and skip re-rendering it if its props haven't changed. This makes your app faster by avoiding unnecessary updates.
    </p>
  </div>
);

const Benefits = () => (
  <div className="visual-section">
    <h3>Benefits of React.memo</h3>
    <div className="visual-list">
      <div className="visual-item">
        <span role="img" aria-label="speed">⚡</span>
        <p>Makes your app faster</p>
      </div>
      <div className="visual-item">
        <span role="img" aria-label="save">💾</span>
        <p>Saves computer work</p>
      </div>
      <div className="visual-item">
        <span role="img" aria-label="efficient">🔄</span>
        <p>Prevents unnecessary updates</p>
      </div>
    </div>
  </div>
);

const Drawbacks = () => (
  <div className="visual-section">
    <h3>Drawbacks of React.memo</h3>
    <div className="visual-list">
      <div className="visual-item">
        <span role="img" aria-label="complex">🧩</span>
        <p>Can make code a bit more complex</p>
      </div>
      <div className="visual-item">
        <span role="img" aria-label="not-always">❓</span>
        <p>Not always needed for small/simple components</p>
      </div>
    </div>
  </div>
);

const NormalChild = ({ value }) => {
  const [renderCount, setRenderCount] = useState(1);
  useEffect(() => { setRenderCount(c => c + 1); }, [value]);
  return (
    <div className="child-box">
      <h4>Normal Child</h4>
      <div className="prop-value">Value: <b>{value}</b></div>
      <div className="render-count">Rendered: {renderCount} times</div>
    </div>
  );
};

const MemoChild = memo(({ value }) => {
  const [renderCount, setRenderCount] = useState(1);
  useEffect(() => { setRenderCount(c => c + 1); }, [value]);
  return (
    <div className="child-box memoized">
      <h4>Memoized Child (React.memo)</h4>
      <div className="prop-value">Value: <b>{value}</b></div>
      <div className="render-count">Rendered: {renderCount} times</div>
    </div>
  );
});

const CodeBlock = ({ code, highlightLines = [] }) => (
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

function MemoVisualization() {
  const [parentValue, setParentValue] = useState('A');
  const [otherValue, setOtherValue] = useState('');

  const normalChildCode = `function NormalChild({ value }) {\n  // Always re-renders when parent updates\n  return (\n    <div>Value: {value}</div>\n  );\n}`;

  const memoChildCode = `const MemoChild = React.memo(function MemoChild({ value }) {\n  // Only re-renders if 'value' changes\n  return (\n    <div>Value: {value}</div>\n  );\n});`;

  return (
    <div className="memo-visualization">
      <Definition />
      <div className="visual-area">
        <div className="parent-box">
          <h4>Parent Component</h4>
          <label>
            Change value for children:
            <input
              value={parentValue}
              onChange={e => setParentValue(e.target.value)}
              className="prop-input"
            />
          </label>
          <label style={{ marginTop: 16 }}>
            Change something else (does not affect children):
            <input
              value={otherValue}
              onChange={e => setOtherValue(e.target.value)}
              className="prop-input"
            />
          </label>
        </div>
        <div className="arrow-area">
          <div className="arrow">↓</div>
        </div>
        <div>
          <NormalChild value={parentValue} />
          <MemoChild value={parentValue} />
        </div>
      </div>
      <div className="code-section">
        <h3>How does the code look?</h3>
        <div className="code-examples">
          <div>
            <div className="code-label">Normal Child</div>
            <CodeBlock code={normalChildCode} highlightLines={[1]} />
          </div>
          <div>
            <div className="code-label">Memoized Child (React.memo)</div>
            <CodeBlock code={memoChildCode} highlightLines={[1]} />
          </div>
        </div>
      </div>
      <Benefits />
      <Drawbacks />
    </div>
  );
}

export default MemoVisualization; 