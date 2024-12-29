import React, { useState } from "react";
import DogImg from "../img/theo-img.png";
import { Modal } from "../components/index";
import { useEffect } from "react";

// TimeTracker component logic integrated directly into About
const calculateTimeElapsed = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months };
};

const About = (props) => {
  const [show, setShow] = useState(false);

  // Job Start Date Tracker
  const startDate = "2023-08-04";
  const [timeElapsed, setTimeElapsed] = useState({ years: 0, months: 0 });

  useEffect(() => {
    const updateElapsedTime = () => {
      const elapsedTime = calculateTimeElapsed(startDate);
      setTimeElapsed(elapsedTime);
    };

    updateElapsedTime();

    // Optional: Automatically update every day
    const timer = setInterval(updateElapsedTime, 1000 * 60 * 60 * 24);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [startDate]);

  return (
    <div className="content about-content">
      <div className="about-box">
        <div className="about-title">
          <h3>NAME: Sam Ardis</h3>
          <h3>ROLE: Associate Business Process Improvement Specialist</h3>
          <p>
            Aug 2023 - Present · {timeElapsed.years} year
            {timeElapsed.years === 1 ? "" : "s"} {timeElapsed.months} month
            {timeElapsed.months === 1 ? "" : "s"}
          </p>
          <p>United States · Remote</p>

          <h3>POSITION: Robotic Process Automation (RPA) Developer</h3>
          <p>
            - Help design, develop, test, debug, document, and publish RPA bots
            independently and as part of a team
          </p>
          <p>
            - Develop various RPA bots to save time and money for Genworth's
            business operations
          </p>
          <p>
            - For example I developed a bot that takes customer data using
            Automation Anywhere, Excel, and Alteryx. This bot takes 15 minutes
            to run each business day and saves the business 2 hours of manual
            work every business day, which totals to approximately 40 hours per
            month saved on average.
          </p>
          <p>- Use Agile principles to complete features in an efficient manner</p>
        </div>
        <div className="about-description">
          <h3>Location</h3>
          <p>
            I'm from a small town in the middle of <span>Michigan</span> but
            currently working <span>remotely</span>.
          </p>
          <h3>About Me</h3>
          <p>
            Growing up in a small town of 1,500 residents, I developed a strong
            curiosity about the broader world. Books and online resources
            became my gateways to understanding, fueling a fascination with
            technology and its transformative potential. This combination of
            logic and creativity shaped my interests in problem-solving,
            understanding complex systems, and engaging with fiction, creative
            writing, design, and gaming.
          </p>
          <p>
            After high school, I began my academic journey studying Biomedical
            Science at Grand Valley State University. However, I soon realized
            my true passions lay elsewhere. Transitioning to a writing major
            brought me closer to creativity but still didn’t align with my
            career aspirations. In 2018, I took a step back to reflect and later
            discovered software engineering—a discipline that perfectly merged
            my logical and creative inclinations. This revelation solidified my
            career direction.
          </p>
          <p>
            Since then, I have completed a 9-month 40 Hour per week immersive
            coding bootcamp at Bloom Institute of Technology and am finishing my
            Associate of Applied Science degree in Web Development and
            Programming at Montcalm Community College. Currently, I work as an
            Associate Business Process Improvement Specialist, focusing on
            Robotic Process Automation (RPA) development. With three years of
            experience in IT and software development, I’ve honed my technical
            skills and gained valuable industry knowledge.
          </p>
          <p>
            Thank you for taking the time to check out my portfolio. If you
            would like to get in touch, you can contact me through social media
            or use the contact form on the contact page. I look forward to
            hearing from you!
          </p>
          <h3>Why I Love To Code</h3>
          <p>
            Coding is an iterative and rewarding process that consistently
            challenges both my technical and creative abilities. From designing
            initial structures to writing functional code and troubleshooting
            errors, I find fulfillment in every phase of development.
          </p>
          <p>
            There’s a distinct satisfaction in transforming abstract concepts
            into tangible, working programs. Whether I’m solving problems
            independently or collaborating through platforms like Stack
            Overflow, I am driven by the opportunity to create impactful and
            efficient solutions that make a difference. The constant cycle of
            learning and problem-solving is what fuels my enduring passion for
            coding.
          </p>
          <h3>Hobbies</h3>
          <p>
            When I’m not working on coding projects, I engage in activities that
            inspire and relax me. Gaming allows me to explore immersive worlds
            and unwind, while writing stories provides a creative outlet for my
            imagination. I also enjoy reading thought-provoking articles on a
            variety of topics that expand my knowledge and perspective. Most
            importantly, I cherish spending time with my family and my dog,{" "}
            <button
              className="btn-modal"
              type="button"
              onClick={() => setShow(true)}
            >
              Theo
            </button>
            , whose companionship is an endless source of joy.
          </p>
          <div>
            <Modal show={show} setShow={setShow}>
              <img
                width="200px"
                src={DogImg}
                alt="My dog"
                className="about-img-theo"
              />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;