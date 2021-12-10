import React from 'react';
import { FaLinkedin, FaGithubSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import TodoFirebaseImg from '../img/todofirebaseimg.JPG';
import CovidTrackAppImg from '../img/covidtrackingappimg - Copy.JPG';
import AnywhereFitnessAppImg from '../img/anywherefitnessimg.JPG';
import RecipeAppImg from '../img/RecipeAppImg.JPG';
import AmazonAppImg from '../img/AmazonAppImg.JPG';
import NasaImg from '../img/NasaSnip.png';

const Home = props => {

    return (
        <div className="content">
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
            <h1>Projects</h1>
            <div className="projects">
                {/* project 0 */}
                <div className="project">
                    <div className="project-img">
                        <img
                        src={CovidTrackAppImg}
                        alt="Covi-19 tracker app project"
                        />
                    </div>
                    <div className="project-name">
                        <h3>Project Name</h3>
                    </div>
                    <div className="project-description">
                        <p> Built an authenticated mobile-responsive COVID-19 tracker app that pulls from an API and shows you the total and new worldwide cases, as well as individual country and state data (cases, recovered, deaths, population, etc). There is a table, map, and graph that you can use to get a good visual of the data. I also implemented a weather tab so you can see the weather of any place in the world as well as a darkmode toggle for better viewing.</p>
                        <p>STACK: React, CSS, and Firebase.</p>
                    </div>
                    <div className="project-links">
                        <a href="https://covid-19-tracker-app-d7699.web.app/" rel="noopener noreferrer" target="_blank">Deployed</a>
                        <a href="https://github.com/ardissam0/COVID-19_TRACKER-APP" rel="noopener noreferrer" target="_blank">Github</a>
                    </div>
                </div>
                {/* project 1 */}
                <div className="project">
                    <div className="project-img">
                        <img
                        src={CovidTrackAppImg}
                        alt="Covi-19 tracker app project"
                        />
                    </div>
                    <div className="project-name">
                        <h3>Project Name</h3>
                    </div>
                    <div className="project-description">
                        <p> Built an authenticated mobile-responsive COVID-19 tracker app that pulls from an API and shows you the total and new worldwide cases, as well as individual country and state data (cases, recovered, deaths, population, etc). There is a table, map, and graph that you can use to get a good visual of the data. I also implemented a weather tab so you can see the weather of any place in the world as well as a darkmode toggle for better viewing.</p>
                        <p>STACK: React, CSS, and Firebase.</p>
                    </div>
                    <div className="project-links">
                        <a href="https://covid-19-tracker-app-d7699.web.app/" rel="noopener noreferrer" target="_blank">Deployed</a>
                        <a href="https://github.com/ardissam0/COVID-19_TRACKER-APP" rel="noopener noreferrer" target="_blank">Github</a>
                    </div>
                </div>
                {/* project 2 */}
                <div className="project">
                    <div className="project-img">
                        <img
                        src={RecipeAppImg}
                        alt="Recipe app proj"
                        />
                    </div>
                    <div className="project-name">
                        <h3>Project Name</h3>
                    </div>
                    <div className="project-description">
                        <p>Built an authenticated mobile-responsive Recipe and Nutrition App that pulls recipes and nutrtional data from an API. You can search for a recipe and see how to make it as well as the nutritional content such as: percentage of your daily value, total quantity of nutrients, and the type of diet it falls under.</p>
                        <p>STACK: React, CSS, and Firebase.</p>
                    </div>
                    <div className="project-links">
                        <a href="https://health-app-30d89.web.app/" rel="noopener noreferrer" target="_blank">Deployed</a>
                        <a href="https://github.com/ardissam0/Health-Fitness-App" rel="noopener noreferrer" target="_blank">Github</a>
                    </div>
                </div>
                {/* project 3 */}
                <div className="project">
                    <div className="project-img">
                        <img
                        src={AmazonAppImg}
                        alt="Amazon clone app project"
                        />
                    </div>
                    <div className="project-name">
                        <h3>Project Name</h3>
                    </div>
                    <div className="project-description">
                        <p>Built an Amazon clone that is mobile-responsive, uses firebase for signup/login/logout functionality, firestore for making orders, and stripe to use a card to place an order. You can add items to the cart, delete items, and check out your order page. </p>
                        <p>STACK: React, CSS, Stripe API, and Firebase.</p>
                    </div>
                    <div className="project-links">
                        <a href="https://ecom-store-2021.web.app/" rel="noopener noreferrer" target="_blank">Deployed</a>
                        <a href="https://github.com/ardissam0/ecom-store-2021/tree/Sam-Ardis/ecom-store-1" rel="noopener noreferrer" target="_blank">Github</a>
                    </div>
                </div>
                {/* project 4 */}
                <div className="project">
                    <div className="project-img">
                        <img
                        src={NasaImg}
                        alt="Nasa project"
                        />
                    </div>
                    <div className="project-name">
                        <h3>Project Name</h3>
                    </div>
                    <div className="project-description">
                        <p>Built a photo of the day app that uses NASA's API for an image, title, and explanation that updates daily. I also added a simple animation and made it mobile friendly.</p>
                        <p>STACK: React and CSS</p>
                    </div>
                    <div className="project-links">
                        <a href="https://nasa-photo-of-the-day-three.vercel.app/" rel="noopener noreferrer" target="_blank">Deployed</a>
                        <a href="https://github.com/ardissam0/nasa-photo-of-the-day" rel="noopener noreferrer" target="_blank">Github</a>
                    </div>
                </div>
                {/* project 5 */}
                <div className="project">
                    <div className="project-img">
                        <img
                        src={TodoFirebaseImg}
                        alt="Todo app proj"
                        />
                    </div>
                    <div className="project-name">
                        <h3>Project Name</h3>
                    </div>
                    <div className="project-description">
                        <p>Built a mobile-friendly TODO App where you can add items to your todo list and update/delete as needed using firebase as backend/host.</p>
                        <p>STACK: React and SASS.</p>
                    </div>
                    <div className="project-links">
                        <a href="https://todo-list-app-a1b10.web.app/" rel="noopener noreferrer" target="_blank">Deployed</a>
                        <a href="https://github.com/ardissam0/todo-list-app" rel="noopener noreferrer" target="_blank">Github</a>
                    </div>
                </div>
                {/* project 6 */}
                <div className="project">
                    <div className="project-img">
                        <img
                        src={AnywhereFitnessAppImg}
                        alt="Api for Anywhere Fitness app Proj"
                        />
                    </div>
                    <div className="project-name">
                        <h3>Project Name</h3>
                    </div>
                    <div className="project-description">
                        <p> Built the backend and deployed the API for a week long group project I did at lambda school called Anywhere Fitness. This app allows you to see what type of classes instrutors are hosting online and when you can attend them. You can login as a client or an instructor, and perform all CRUD operations. I will include the deployed frontend where you can try out the crud operations like registering, logging in, etc. </p>
                        <p>STACK: NodeJS and ExpressJS.</p>
                    </div>
                    <div className="project-links">
                        <a href="https://fitness-anywhere-bw.netlify.app/" rel="noopener noreferrer" target="_blank">Deployed</a>
                        <a href="https://github.com/BW-AnywhereFitness/BE" rel="noopener noreferrer" target="_blank">Github</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;