import React from 'react';
import { ContactForm } from "../components/index";

const Contact = props => {
    return (
        <div className="content">
            <div>
                <p>Have a question or want to work together?</p>
                <div className="contact-list">
                <h2>Contact Me</h2>
                  <hr/>
                <ContactForm/>
                </div>
            </div>
        </div>
    )
}

export default Contact;

