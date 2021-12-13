import React from 'react';
import "./styles/App.css";
import { Route, Routes } from 'react-router-dom';
import { Navigation } from "./components/index";
import { Home, About, Contact } from "./pages/index";
import { FaLinkedin, FaGithubSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

export const Router = ()=> {
    return (
        <div className="App">
            <div>
                <Navigation />
            </div>
            <div className="social-background">
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
            <hr/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
            <footer>
                <div> 
                    &copy;{(new Date().getFullYear())} <a href="https://samardis.com/">samardis.com</a>
                </div>
            </footer>
        </div>
    )
}

export default Router;
