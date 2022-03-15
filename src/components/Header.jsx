import React, { useState }from 'react'

import './Header.css'

function Header({ darkMode, setDarkMode }) {


    const handleClick = () => {
        setDarkMode(!darkMode);
        
    }

    return ( 
        <div className={`Header ${darkMode ? 'dark-header' : ''}`}>
            <h1>Rick and Morty</h1>
            <button type="button" className={`btn ${darkMode ? 'dark dark-btn' : ''}`} onClick={handleClick}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        </div>
    );
}

export { Header };