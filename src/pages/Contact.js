import React from 'react';
import { ContactForm } from "../components/index";

const Contact = props => {
    return (
        <div className="content">
            <div className="contact-container">
                <div className="contact-list">
                <ContactForm/>
                </div>
            </div>
        </div>
    )
}

export default Contact;

