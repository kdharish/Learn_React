import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import PropsVisualization from './pages/PropsVisualization';
import MemoVisualization from './pages/MemoVisualization';
import ES6Main from './pages/ES6Main';
import ES6ArrowFunctions from './pages/ES6ArrowFunctions';
import ES6LetConst from './pages/ES6LetConst';
import ES6Destructuring from './pages/ES6Destructuring';
import ES6TemplateLiterals from './pages/ES6TemplateLiterals';
import ES6SpreadRest from './pages/ES6SpreadRest';
import ES6DefaultParameters from './pages/ES6DefaultParameters';
import ES6ImportExport from './pages/ES6ImportExport';
import RenderHTML from './pages/RenderHTML';
import JSX from './pages/JSX';
import Components from './pages/Components';
import ClassComponentPage from './pages/ClassComponent';
import Events from './pages/Events';
import Conditionals from './pages/Conditionals';
import Lists from './pages/Lists';
import Forms from './pages/Forms';
import RouterDemo from './pages/Router';
import CSSStyling from './pages/CSSStyling';
import SassStyling from './pages/SassStyling';
import WhatIsAHook from './pages/WhatIsAHook';
import UseState from './pages/UseState';
import UseContext from './pages/UseContext';
import UseRef from './pages/UseRef';
import UseReducer from './pages/UseReducer';
import UseCallback from './pages/UseCallback';
import UseMemo from './pages/UseMemo';
import CustomHooks from './pages/CustomHooks';
import './App.css';

// Placeholder components for topics and hooks
const Placeholder = ({ title }) => (
  <div className="home-container">
    <h1>{title}</h1>
  </div>
);

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Placeholder title="React Intro" />} />
          <Route path="/get-started" element={<Placeholder title="React Get Started" />} />
          <Route path="/upgrade" element={<Placeholder title="React Upgrade" />} />
          <Route path="/es6" element={<ES6Main />} />
          <Route path="/es6/arrow-functions" element={<ES6ArrowFunctions />} />
          <Route path="/es6/let-const" element={<ES6LetConst />} />
          <Route path="/es6/destructuring" element={<ES6Destructuring />} />
          <Route path="/es6/template-literals" element={<ES6TemplateLiterals />} />
          <Route path="/es6/spread-rest" element={<ES6SpreadRest />} />
          <Route path="/es6/default-parameters" element={<ES6DefaultParameters />} />
          <Route path="/es6/import-export" element={<ES6ImportExport />} />
          <Route path="/render-html" element={<RenderHTML />} />
          <Route path="/jsx" element={<JSX />} />
          <Route path="/components" element={<Components />} />
          <Route path="/class" element={<ClassComponentPage />} />
          <Route path="/props" element={<PropsVisualization />} />
          <Route path="/events" element={<Events />} />
          <Route path="/conditionals" element={<Conditionals />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/router" element={<RouterDemo />} />
          <Route path="/memo" element={<MemoVisualization />} />
          <Route path="/css-styling" element={<CSSStyling />} />
          <Route path="/sass-styling" element={<SassStyling />} />
          <Route path="/hooks/what-is-a-hook" element={<WhatIsAHook />} />
          <Route path="/hooks/use-state" element={<UseState />} />
          <Route path="/hooks/use-effect" element={<Placeholder title="useEffect" />} />
          <Route path="/hooks/use-context" element={<UseContext />} />
          <Route path="/hooks/use-ref" element={<UseRef />} />
          <Route path="/hooks/use-reducer" element={<UseReducer />} />
          <Route path="/hooks/use-callback" element={<UseCallback />} />
          <Route path="/hooks/use-memo" element={<UseMemo />} />
          <Route path="/hooks/custom-hooks" element={<CustomHooks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
