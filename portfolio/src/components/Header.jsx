import React, { useState } from "react";
import '../App.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="logo">Logo</div>
            <nav className={`topnav ${isOpen ? "responsive" : ""}`}>
                <a href="#home" className="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
                    &#9776;
                </a>
            </nav>
        </header>
    );
}

export default Header;
