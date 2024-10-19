import React from 'react';
import './header_style.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Learning Management System</div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                />
                <button className="close-btn">
                    ✕
                </button>
            </div>
        </header>
    );
};

export default Header;