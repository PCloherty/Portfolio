import React from 'react';
import Introduction from "./Introduction.js"

const Header = () => {
    return (
        
        <header>
            <button className="nav-toggle" area-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
        
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href={Introduction} className="nav__link">Introduction</a></li>
                <li className="nav__item"><a href="test" className="nav__link">About me</a></li>
                <li className="nav__item"><a href="test" className="nav__link">Projects</a></li>
            </ul>
        </nav>

            
        </header>
        
    );
};

export default Header;