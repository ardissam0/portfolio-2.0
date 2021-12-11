import React from 'react';
import { Link } from 'react-router-dom';
import avatarPic from "../img/Avatar-profile-new.png";

const Navigation = () => {
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
        <hr />
        </div>
    )
}

export default Navigation;
