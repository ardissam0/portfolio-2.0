import React, {useState} from "react";
import DogImg from "../img/theo-img.png";
import { Modal } from "../components/index";

const About = props => {
    const [show, setShow] = useState(false);
    return (
        <div className="content about-content">
            <div className="about-box">
                <div className="about-title">
                    <h2>Web Developer</h2>
                </div>
                <div className="about-description">
                    <h3>Location</h3>
                    <p>I'm from <span>Michigan</span> but I am open to work anywhere in the <span>United States</span> or <span>remotely</span>.</p>
                    <h3>My Story</h3>
                    <p>I grew up in a small town with little access to technology. So, I was always outdoors. However, technology advanced rapidly into my teenage years and the internet fed my endless curiosity about the world. 
                        I have always been both a logical and creative person who loves solving mathematical problems, learning about the way things work, and looking at the world through a logical lense but at the same time immersing myself in fictional books, movies, creative writing, design, and video games.</p>
                        <p>Once I graduated High School, I went straight to Grand Valley State University to study Pre-Med. That eventually changed to a writing major. Except, that still didn't give me the career outlook that I wanted. 
                        So, I dropped out of my university in 2018 and was lost for a while until I came across programming later that year. Ever since then, I have been obsessed with learning anything about programming.</p>
                        <p>I have completed a 9-month bootcamp called Bloom Institute of Technology and I am currently halfway through my Associates Degree in Applied Science majoring in Web Development and Programming at Montcalm Community College. 
                            I am now ready to jump into the professional world of software development so, I am excited to connect and see if I would be a good fit for any of your full-time opportunities.</p> 
                            <p>Thank you for taking the time to check out my portfolio. Contact me through social media or use the contact form on the contact page. I look forward to hearing from you! </p>
                    <h3>Why I Love To Code</h3>
                    <p>I enjoy the process. From designing to developing and even debugging, there's no better feeling than seeing your code come alive on the screen or solving difficult problems.</p>
                    <h3>Hobbies</h3>
                    <p>When I'm not coding, you can find me gaming, writing books, reading articles about cool stuff, and hanging out with my dog <button className="btn-modal" type="button" onClick={() => setShow(true)}>Theo</button>.</p>
                    <div>
                        <Modal show={show} setShow={setShow}>
                        <img 
                        width="200px"
                        src={DogImg}
                        alt="My dog"
                        className="about-img-theo"/>
                        </Modal>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About;
