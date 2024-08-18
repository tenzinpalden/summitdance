import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavbarComponent = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/tibetan" activeClassName="active">Tibetan</NavLink></li>
                <li><NavLink to="/bhutanese" activeClassName="active">Bhutanese</NavLink></li>
                <li><NavLink to="/nepali" activeClassName="active">Nepali</NavLink></li>
                <li><NavLink to="/discussion" activeClassName="active">Discussion Page</NavLink></li> 
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavbarComponent;