import React from 'react';
import "./styles/App.css";
import { Route, Routes } from 'react-router-dom';
import { Navigation } from "./components/index";
import { Home, About, Contact } from "./pages/index";

export const Router = ()=> {
    return (
        <div className="App">
            <div>
                <Navigation />
            </div>
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
