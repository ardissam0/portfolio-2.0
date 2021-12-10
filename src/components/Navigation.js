import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="nav">
            <div>
                <h3>Sam Ardis</h3>
            </div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        <hr />
        </div>
    )
}

export default Navigation;
