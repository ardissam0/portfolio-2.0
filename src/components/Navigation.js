import React from 'react';
import { Link } from 'react-router-dom';
import useDarkMode from "../hooks/useDarkMode";

const Navigation = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <div className="nav">
            <div>
                <h3>Sam Ardis</h3>
            </div>
            <div>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/About"><li>About</li></Link>
                    <Link to="/Contact"><li>Contact</li></Link>
                </ul>
            </div>
            <div className="dark-mode__container">
                  <span className="light__symbol">☀︎</span>
                    <div className='dark-mode__toggle'>
                        <div 
                        onClick={toggleMode} 
                        className={darkMode ? 'toggle toggled' : 'toggle'} 
                        />
                     </div>
                <span className="dark__symbol">☾</span>
            </div>
        </div>
    )
}

export default Navigation;
