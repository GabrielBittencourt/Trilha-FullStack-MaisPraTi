import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        const body = document.body;
        if (darkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    return (
        <Router>
            <div className={darkMode ? 'dark-mode' : ''}>
                <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
