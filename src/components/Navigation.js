import React from 'react';
import { Link } from 'react-router-dom';
import avatarPic from "../img/Avatar-profile-new.png";
import useDarkMode from "../hooks/useDarkMode";

const Navigation = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <div className="nav">
            <div className="avatar-img">
                    <img width="150px"
                    src= {avatarPic}
                    alt="Samuel Ardis"/>
                </div>
            <div>
                <h3>Sam <br/> Ardis</h3>
            </div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
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
        <hr />
        </div>
    )
}

export default Navigation;
