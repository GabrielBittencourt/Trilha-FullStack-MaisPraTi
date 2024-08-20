import React, { useState } from "react";
import '../App.css';

function Header({ toggleDarkMode, darkMode }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} sticky-top`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Meu Portfólio</a>
                <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-expanded={isOpen ? "true" : "false"}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link texto" href="projects">Projetos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link texto" href="about">Sobre Mim</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link texto" href="contact">Contato</a>
                        </li>
                    </ul>
                    <button className={`btn ${darkMode ? 'btn-primary' : 'btn-primary'}`} onClick={toggleDarkMode}>
                        {darkMode ? 'Modo Claro' : 'Modo Escuro'}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
