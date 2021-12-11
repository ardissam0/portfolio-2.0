import React from 'react';
import DogImg from '../img/theo-img.png';


const About = props => {
    return (
        <div className="content about-content">
            <div className="about-name">
                    <h1>About Me</h1>
            </div>
            <div className="about-box">
                <div className="about-title">
                    <h2>Web Developer</h2>
                </div>
                <div className="about-description">
                    <h3>Location</h3>
                    <p>I am from <span>Michigan</span> but am open to work anywhere in the <span>United States</span> or <span>remotely</span>.</p>
                    <h3>My Story</h3>
                    <p>I grew up in a small town with little access to technology. So, I was always outdoors. However, technology advanced rapidly into my teenage years and the internet fed my endless curiosity about the world. 
                        I have always been both a logical and creative person who loves solving mathematical problems, learning about the way things work, and looking at the world through a logical lense but at the same time immersing myself in fictional books, movies, creative writing, design, and video games. 
                        Once I graduated high school, I went straight to Grand Valley State Univeristy to study Pre-Med. That eventually changed to a writing major. Except, that still didn't give me the career outlook that I wanted. 
                        So, I dropped out of my univeristy in 2018 and was lost for a while until I came across programming later that year. Ever since then, I have been obsessed with learning anything about coding. 
                        I have completed a 9-month bootcamp called Bloom Institute of Technology and I am currently halfway through my Associates Degree in Applied Science majoring in Web Development and Programming at Montcalm Community College.</p>
                    <h3>Why I Love To Code</h3>
                    <p>I enjoy every step of the development process such as: UI design, development, testing, debugging, documenting, and maintaining.</p>
                    <p>I love the logic behind coding as well as the creative elements.</p>
                    <h3>Hobbies</h3>
                    <p>When I'm not coding, you can find me gaming, writing books, reading random articles, and hanging with my dog Theo.</p>
                    <div>
                <img 
                    width="80px"
                    src={DogImg}
                    alt="My dog"
                    className="about-img-theo"/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About;
