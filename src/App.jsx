// src/App.js
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';

import Home     from './pages/Home';
import Projects from './pages/Projects';
import Contact  from './pages/Contact';
import Seeme from './pages/Projects/Seeme.jsx';
import MarsField from './pages/Projects/MarsField.jsx';


import './App.css';

function App() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/',        label: 'Home'     },
    { to: '/projects',label: 'Projects' },
    { to: '/contact', label: 'Contact'  },
  ];

  return (
    <Router>
      <nav>
        <div className="container">
          <div className="logo">Harwinder Singh</div>

          <ul className={`nav-links${open ? ' open' : ''}`}>
            {links.map(({to,label}) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({isActive}) => isActive ? 'active' : ''}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setOpen(o => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className="page">
        <Routes>
          <Route path="/"        element={<Home />}     />
          <Route path="/projects"element={<Projects />} />
          <Route path="/contact" element={<Contact />}  />
          <Route path="/projects/seeme-voice" element={<Seeme />} />
          <Route path="/projects/mars-field" element={<MarsField />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
