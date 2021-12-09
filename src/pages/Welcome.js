import React from 'react';
import avatarPic from "../img/NewProfPic.png";

export default function Welcome() {

    return (
        <div className = "welcome-component">
            <div>
                <h1>Samuel Ardis</h1>
                <img width="250px" height="250px" src= {avatarPic} alt="Samuel Ardis"/>
            </div>
        </div>
    );
}