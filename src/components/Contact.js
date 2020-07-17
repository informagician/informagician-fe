require('dotenv').config();
import React, { useState } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {

    const [ formStatus , setFormStatus ] = useState()

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, e.target, process.env.USER_ID)
          .then((result) => {
              console.log(result.text);
              setFormStatus(result.text)
          }, (error) => {
              console.log(error.text);
          });
      }

    return(
        <section className="contact" id="contact">
            <div className="container">
                <h2>Get in touch</h2>
                <p>Reach out to me by email: hi[at]informagician.com or use the form below:</p>
                {formStatus == 'OK' ? (
                    <div className="res">Your message is sent to Milo, stay tuned!</div>
                ) : (
                    <form className="contact-form" onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                    <label>Name</label>
                    <input type="text" name="name" />
                    <label>Email</label>
                    <input type="email" name="reply_to" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                    </form>
                )}
            </div>
        </section>
    )
}

export default Contact