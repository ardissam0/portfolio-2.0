import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'ardis_productions_gmail_com', 
      'template_of7oXN4X', 
      e.target, 
      'LNfXASjiWvxCMKb6Z'
    )
    .then((result) => {
      console.log("Success:", result.text);
      alert('Message sent!');
    })
    .catch((error) => {
      console.error("Error:", error);
      alert('Failed to send message. Please try again later.');
    });

    e.target.reset();
  };

  return (
    <div>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name:</label>
        <input type="text" name="user_name" required />
        <label>Email:</label>
        <input type="email" name="from_email" required />
        <label>Message:</label>
        <textarea name="message_html" required />
        <input className="btn-contact-form" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;