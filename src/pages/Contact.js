import React from 'react';
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="content">
      <div className="contact-container">
        <div className="contact-list">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;