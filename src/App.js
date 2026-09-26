import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import './App.css';
import AmbientBackground from './components/AmbientBackground';

// Lazy load the 3D components globally to prevent WebGL mounting lag
const DNAHelix = lazy(() => import('./components/DNAHelix')); 
const FloatingPokemon = lazy(() => import('./components/FloatingPokemon'));

function App() {
  return (
    <Router>
      <div className="App">
        <AmbientBackground />
        
        {/* 3D components now live outside the Routes. They load once and stay alive. */}
        <Suspense fallback={<div style={{ position: 'absolute', zIndex: -1 }}></div>}>
          <DNAHelix />
          <FloatingPokemon />
        </Suspense>

        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <a href="/cv.pdf" className="nav-link" target="_blank" rel="noopener noreferrer">CV</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;