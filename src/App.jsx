import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import pages
import BentoHome from './pages/BentoHome';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import SeeMe from './pages/Projects/Seeme';
import MarsField from './pages/Projects/MarsField';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router basename="/my-portfolio">
      <div className="app">
        {/* Animated gradient background */}
        <div className="gradient-bg">
          <div 
            className="gradient-orb gradient-orb-1" 
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          />
          <div 
            className="gradient-orb gradient-orb-2" 
            style={{
              transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`
            }}
          />
          <div className="gradient-orb gradient-orb-3" />
        </div>

        {/* Glass Navigation */}
        <motion.nav
          className="glass-nav"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="nav-container">
            <motion.div
              className="nav-logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="logo-text">HS</span>
            </motion.div>
            
            <div className="nav-links">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>

            <motion.button
              className="nav-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={() => window.location.href = '/contact'}
            >
              Let's Talk
            </motion.button>
          </div>
        </motion.nav>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<BentoHome />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/seeme-voice" element={<SeeMe />} />
          <Route path="/projects/mars-field" element={<MarsField />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

function NavLink({ href, children }) {
  const isActive = window.location.pathname === href;
  
  return (
    <motion.a
      href={href}
      className={`nav-link ${isActive ? 'active' : ''}`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      {isActive && (
        <motion.div
          className="nav-indicator"
          layoutId="nav-indicator"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      )}
    </motion.a>
  );
}

export default App;