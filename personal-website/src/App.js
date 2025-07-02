import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import FlappyBirdGame from './components/FlappyBirdGame';
import About from './components/About'; // Import the new About component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/flappybird" className="nav-link">Flappy Bird</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/flappybird" element={<FlappyBirdGame />} />
          <Route path="/about" element={<About />} /> {/* Add the new About route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;