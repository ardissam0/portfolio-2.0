import React from 'react';
import avatarPic from "../img/NewProfPic.png";
import DogImg from '../img/theo-img.png';


const About = props => {
    return (
        <div className="content">
            <div>
                <h1>Sam Ardis</h1>
                <img width="250px" height="250px" src= {avatarPic} alt="Samuel Ardis"/>
            </div>
            <div>
                <p> Hi, you can call me Sam. I am a Web Developer from Michigan. I enjoy every step of the software development process from ideation and design to development, testing, and publishing. I love the logic behind coding as well as the creative elements. When I'm not coding, you can find me gaming, writing books, reading random articles, and hanging with my dog.</p>
            </div>
            <div>
            <img 
                src={DogImg}
                alt="My dog"
                className="about-img-theo"/>
            </div>
        </div>
    )
}

export default About;
