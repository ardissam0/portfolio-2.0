import React, { useState } from 'react';
import CPGM132FinalImg from "../img/final-project-img.JPG";
import RecipeAppImg from '../img/new-recipe-app-img2.JPG';
import NasaImg from '../img/new-nasa-app-img.JPG';

const Home = props => {

    return (
        <div className="content">
            <div className="projects">
                {/* project 0 */}
                <div className="project">
                    <div className="project-img">
                        <img
                        src={CPGM132FinalImg}
                        alt="Covi-19 tracker app project"
                        />
                    </div>
                    <div className="project-name">
                        <h3>CPGM Final Project</h3>
                    </div>
                    <div className="project-description">
                        <p>Built this mobile-friendly final project for one of my classes at MCC. It is an imaginary company that sells health-related products online. You can add items to your cart, "buy it", learn more about the products, calculate your BMI, and more.</p>
                        <p>STACK: HTML, CSS, vanilla JavaScript, and firebase.</p>
                    </div>
                    <div className="project-links">
                        <a href="https://ardissam0.github.io/longevity-clinic-final-project/" rel="noopener noreferrer" target="_blank">Website</a>
                        <a href="https://github.com/ardissam0/longevity-clinic-final-project" rel="noopener noreferrer" target="_blank">Github</a>
                    </div>
                </div>
                {/* project 1 */}
                <div className="project">
                    <div className="project-img">
                        <img
                        src={RecipeAppImg}
                        alt="Recipe app proj"
                        />
                    </div>
                    <div className="project-name">
                        <h3>Recipe Finder</h3>
                    </div>
                    <div className="project-description">
                        <p>Built an authenticated mobile-responsive Recipe and Nutrition App that pulls recipes and nutrtional data from an API. You can search for any type of food and see how to make it as well as the nutritional content such as: percent of daily value, total quantity of nutrients, and the type of diet it falls under.</p>
                        <p>Login information if you don't want to create an account: Username: <span>test@gmail.com</span> | Password: <span>test123</span></p>
                        <p>STACK: React, CSS, API, and Firebase.</p>
                    </div>
                    <div className="project-links">
                        <a href="https://health-app-30d89.web.app/" rel="noopener noreferrer" target="_blank">Website</a>
                        <a href="https://github.com/ardissam0/Health-Fitness-App" rel="noopener noreferrer" target="_blank">Github</a>
                    </div>
                </div>
                {/* project 3 */}
                <div className="project">
                    <div className="project-img">
                        <img
                        src={NasaImg}
                        alt="Nasa project"
                        />
                    </div>
                    <div className="project-name">
                        <h3>NASA Photo App</h3>
                    </div>
                    <div className="project-description">
                        <p>Built a photo of the day web app that uses NASA's API and updates daily. I also added a simple animation and made it mobile friendly.</p>
                        <p>STACK: React, API, and CSS</p>
                    </div>
                    <div className="project-links">
                        <a href="https://nasa-photo-of-the-day-three.vercel.app/" rel="noopener noreferrer" target="_blank">Website</a>
                        <a href="https://github.com/ardissam0/nasa-photo-of-the-day" rel="noopener noreferrer" target="_blank">Github</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;