import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const topics = [
  { label: 'React Home', path: '/' },
  // { label: 'React Intro', path: '/intro' },
  // { label: 'React Get Started', path: '/get-started' },
  // { label: 'React Upgrade', path: '/upgrade' },
  { label: 'React ES6', path: '/es6' },
  { label: 'React Render HTML', path: '/render-html' },
  { label: 'React JSX', path: '/jsx' },
  { label: 'React Components', path: '/components' },
  { label: 'React Class', path: '/class' },
  { label: 'React Props', path: '/props' },
  { label: 'React Events', path: '/events' },
  { label: 'React Conditionals', path: '/conditionals' },
  { label: 'React Lists', path: '/lists' },
  { label: 'React Forms', path: '/forms' },
  { label: 'React Router', path: '/router' },
  { label: 'React Memo', path: '/memo' },
  { label: 'React CSS Styling', path: '/css-styling' },
  { label: 'React Sass Styling', path: '/sass-styling' },
];

const hooks = [
  { label: 'What is a Hook?', path: '/hooks/what-is-a-hook' },
  { label: 'useState', path: '/hooks/use-state' },
  { label: 'useEffect', path: '/hooks/use-effect' },
  { label: 'useContext', path: '/hooks/use-context' },
  { label: 'useRef', path: '/hooks/use-ref' },
  { label: 'useReducer', path: '/hooks/use-reducer' },
  { label: 'useCallback', path: '/hooks/use-callback' },
  { label: 'useMemo', path: '/hooks/use-memo' },
  { label: 'Custom Hooks', path: '/hooks/custom-hooks' },
];

const Sidebar = () => (
  <div className="sidebar">
    <h2>React Tutorial</h2>
    <nav>
      {topics.map((topic) => (
        <NavLink
          key={topic.path}
          to={topic.path}
          className={({ isActive }) => isActive ? 'active' : ''}
          end={topic.path === '/'}
        >
          {topic.label}
        </NavLink>
      ))}
    </nav>
    <h2>React Hooks</h2>
    <nav>
      {hooks.map((hook) => (
        <NavLink
          key={hook.path}
          to={hook.path}
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          {hook.label}
        </NavLink>
      ))}
    </nav>
  </div>
);

export default Sidebar; 