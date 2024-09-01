import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Netflix Clone
      </Link>
      <div className="navbar-search">
        <input type="text" placeholder="Buscar..." />
      </div>
    </nav>
  );
}

export default NavBar;
