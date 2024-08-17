import React from 'react';
import './HeaderComponent.css';

const HeaderComponent = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="path_to_your_logo.png" alt="Logo" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <nav className="menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderComponent;