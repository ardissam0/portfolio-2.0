import React, {useState} from "react";
import DogImg from "../img/theo-img.png";
import { Modal } from "../components/index";

const About = props => {
    const [show, setShow] = useState(false);
    return (
        <div className="content about-content">
            <div className="about-box">
                <div className="about-title">
                    <h2>Software Developer</h2>
                </div>
                <div className="about-description">
                    <h3>Location</h3>
                    <p>I'm from a tiny town in the middle of <span>Michigan</span> but I am open to work anywhere in the <span>United States</span> or <span>remotely</span>.</p>
                    <h3>About Me</h3>
                    <p> Being from a small town of about 1500 people, I have always had an intense curiosity about the world. I read a lot of books growing up and constantly throw questions at google. Like most people nowadays, I became fascinated with technology and found myself daydreaming about what the world could look like in 50 years. 
                        I wondered how I could use technology to make a living. As a result, I am both a logical and creative person who loves solving mathematical problems, learning why and how things work, as well as immersing myself in fictional books, movies, creative writing, design, and video games.</p>
                        <p>After High School, I went straight to Grand Valley State University to study Biomedical Science but I soon changed to a writing major after contemplating what I was more passionate about. Except, that still didn't give me the career outlook that I wanted. 
                        So, I dropped out of school in 2018 and reflected on what I really wanted to do with my life. It wasn't until I came across software engineering later that year, that I knew I found the perfect combination of logic and creativity. It was one of those aha moments where I knew what I wanted to do for the rest of my life.</p>
                        <p>Since then, I have completed a 9-month bootcamp called Bloom Institute of Technology and I am currently one semester away from completing my Associates of Applied Science Degree majoring in Web Development and Programming at Montcalm Community College. 
                            I believe after a few years of studying, coding, researching, and prepping, I am now ready to jump into the professional workforce. I am excited to connect with other professionals and businesses to see if I would be a good fit for any opportunities you may have.</p> 
                            <p>Thank you for taking the time to check out my portfolio. If you would like to get in touch, you can contact me through social media or use the contact form on the contact page. I look forward to hearing from you! </p>
                    <h3>Why I Love To Code</h3>
                    <p>I enjoy the process. From designing to developing and even debugging, there's no better feeling than seeing your code come alive on the screen or creating working solutions to coding challenges (Whether I solved them alone or researched on stack overflow).</p>
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
