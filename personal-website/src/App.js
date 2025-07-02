import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import CV from './components/CV';
import FlappyBirdGame from './components/FlappyBirdGame'; // Import the new FlappyBirdGame component
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
              <Link to="/cv" className="nav-link">CV</Link>
            </li>
            <li className="nav-item">
              <Link to="/flappybird" className="nav-link">Flappy Bird</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/flappybird" element={<FlappyBirdGame />} /> {/* Add the new FlappyBirdGame route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;