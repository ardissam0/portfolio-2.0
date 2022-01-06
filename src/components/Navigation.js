import React from 'react';
import { Link } from 'react-router-dom';
import useDarkMode from "../hooks/useDarkMode";
// import nameLogoImg from "../img/logo-name.png";

const Navigation = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <div className="nav">
            <div>
            {/* <Link to="/">
            <img 
                width="165px"
                src={nameLogoImg}
                alt="My dog"
                className="logo-img-name"/></Link> */}
            <Link to="/">
            <h3>Sam Ardis</h3>
            </Link>
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
