import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = props => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('ardis_productions_gmail_com', 'template_of7oXN4X', e.target, 'user_JP3KJFruQIUasNlOMfyEB')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    
        e.target.reset();
        alert('Message sent!');
      }

    return (
        <div>
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name:</label>
                <input type="text" name="user_name" />
                <label>Email:</label>
                <input type="email" name="from_email" />
                <label>Message:</label>
                <textarea name="message_html" />
                <input className="btn-contact-form"  type="submit" value="Send"/>
            </form>
        </div>
    )
}

export default ContactForm;
