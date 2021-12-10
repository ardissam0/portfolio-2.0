import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="Nav">
         <h5>Sam Ardis</h5>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        <hr />
        </div>
    )
}

export default Navigation;
