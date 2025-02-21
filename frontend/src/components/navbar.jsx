import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavbarComponent = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavbarComponent;