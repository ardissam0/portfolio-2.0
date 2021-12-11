import React from 'react';
import { ContactForm } from "../components/index";

const Contact = props => {
    return (
        <div className="content">
            <div className="contact-container">
                <div className="contact-list">
                <h2>Contact Me</h2>
                <ContactForm/>
                </div>
            </div>
        </div>
    )
}

export default Contact;

