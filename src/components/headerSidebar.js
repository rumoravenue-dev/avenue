import React from 'react';
import './styles/headerSidebar.css';

const HeaderSidebar = () => {

    return (
        <nav className='navSidebar'>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href='/services'>Services</a>
                </li>
                <li>
                    <a href='/portfolio'>Portfolio</a>
                </li>
                <li>
                    <a href='/about'>About Us</a>
                </li>
                <li>
                    <button>
                        <a href='/contact'>Start a new Project</a>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderSidebar;

