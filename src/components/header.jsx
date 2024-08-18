import React from 'react';
import './HeaderComponent.css';

const HeaderComponent = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/logo1.png" alt="Logo" /> {/* Adjusted path */}
            </div>
        </header>
    );
};

export default HeaderComponent;