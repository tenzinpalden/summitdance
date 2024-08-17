import React from 'react';
import './NavbarComponent.css';

const NavbarComponent = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Summit Dance</a>
            </div>
            <ul className="navbar-links">
                <li><a href="/tibetan">Tibetan</a></li>
                <li><a href="/bhutanese">Bhutanese</a></li>
                <li><a href="/nepali">Nepali</a></li>
            </ul>
        </nav>
    );
};

export default NavbarComponent;