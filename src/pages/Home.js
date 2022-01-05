import React from 'react';
import CovidTrackAppImg from '../img/new-covid-app-img.JPG';
import AnywhereFitnessAppImg from '../img/new-anywhere-fitness-app-img.JPG';
import CPGM132FinalImg from "../img/final-project-img.JPG";
import RecipeAppImg from '../img/new-recipe-app-img2.JPG';
import AmazonAppImg from '../img/new-amazon-img.JPG';
import NasaImg from '../img/new-nasa-app-img.JPG';

const Home = props => {

    return (
        <div className="content">
            <h1 className="projects-name">Projects</h1>
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
                        <h3>CPGM 132 Final</h3>
                    </div>
                    <div className="project-description">
                        <p>Built this mobile-friednly final project for one of my classes at MCC. It is a company that sells health-related products online. You can add items to your cart, "buy it", learn more about the products, calculate your BMI, and more.</p>
                        <p>STACK: HTML, CSS, vanilla JavaScript, and firebase.</p>
                    </div>
                    <div className="project-links">
                        <a href="https://ardissam0.github.io/longevity-clinic-final-project/" rel="noopener noreferrer" target="_blank">Deployed</a>
                        <a href="https://github.com/ardissam0/longevity-clinic-final-project" rel="noopener noreferrer" target="_blank">Github</a>
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
                        <h3>Covid Tracker</h3>
                    </div>
                    <div className="project-description">
                        <p> Built an authenticated mobile-responsive COVID-19 tracker app that pulls from an API and shows you the total and new worldwide cases, as well as individual country and state data (cases, recovered, deaths, population, etc). There is a table, map, and graph that you can use to get a good visual of the data. I also implemented a weather tab so you can see the weather of any place in the world. You can use the darkmode toggle for better viewing.</p>
                        <p>Login information if you don't want to create an account: Username: <span>test@gmail.com</span> | Password: <span>test123</span></p>
                        <p>STACK: React, CSS, API, and Firebase.</p>
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
                        <h3>Recipe Finder</h3>
                    </div>
                    <div className="project-description">
                        <p>Built an authenticated mobile-responsive Recipe and Nutrition App that pulls recipes and nutrtional data from an API. You can search for any type of food and see how to make it as well as the nutritional content such as: percent of daily value, total quantity of nutrients, and the type of diet it falls under.</p>
                        <p>Login information if you don't want to create an account: Username: <span>test@gmail.com</span> | Password: <span>test123</span></p>
                        <p>STACK: React, CSS, API, and Firebase.</p>
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
                        <h3>Amazon Clone</h3>
                    </div>
                    <div className="project-description">
                        <p>Built an Amazon clone that is mobile-responsive, used firebase for signup/login/logout functionality, firestore for making orders, and stripe to use a card to place an order. You can add items to the cart, delete items, and check out your order page. </p>
                        <p>Login information if you don't want to create an account: Username: <span>test@gmail.com</span> | Password: <span>test123</span></p>
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
                        <h3>NASA Photo of The Day</h3>
                    </div>
                    <div className="project-description">
                        <p>Built a photo of the day app that uses NASA's API and updates daily. I also added a simple animation and made it mobile friendly.</p>
                        <p>STACK: React, API, and CSS</p>
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
                        src={AnywhereFitnessAppImg}
                        alt="Api for Anywhere Fitness app Proj"
                        />
                    </div>
                    <div className="project-name">
                        <h3>Anywhere Fitness Backend</h3>
                    </div>
                    <div className="project-description">
                        <p> Built the backend and deployed the API for a week long group project I did at Bloom Institute of Technology called Anywhere Fitness. This app allows you to see what type of classes instrutors are hosting online and when you can attend them. You can login as a client or an instructor, and perform all CRUD operations. I will include the deployed frontend where you can try out the crud operations like registering, logging in, etc. </p>
                        <p>STACK: Node.js and Express.js.</p>
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