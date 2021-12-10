import React from 'react';
import { FaLinkedin, FaGithubSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import avatarPic from "../img/NewProfPic.png";

const Home = props => {

    return (
        <div>
            <div>
                <h1>Samuel Ardis</h1>
                <img width="250px" height="250px" src= {avatarPic} alt="Samuel Ardis"/>
            </div>
            <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/samuel-ardis/" rel="noopener noreferrer" target="_blank">
                    <FaLinkedin />
                </a>

                {/* Github */}
                <a href="https://github.com/ardissam0" rel="noopener noreferrer" target="_blank">
                    <FaGithubSquare />
                </a>

                {/* Twitter */}
                <a href="https://twitter.com/samuel_ardis" rel="noopener noreferrer" target="_blank">
                    <FaTwitterSquare />
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/samuel.d.ardis/?hl=en" rel="noopener noreferrer" target="_blank">
                    <FaInstagramSquare />
                </a>

            </div>
        </div>
    );
}

export default Home;