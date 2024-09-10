import React from "react";
import "../Contact/Contact.css";
import mail_icon from '../../assets/profime_img/mail_icon.svg'
import call_icon from '../../assets/profime_img/call_icon.svg'
import location_icon from '../../assets/profime_img/location_icon.svg'
function Contact() {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch with me</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
               <img src={mail_icon } alt="" /> <p>rahulkrbh1122@gmail.com</p>
            </div>
            <div className="contact-detail">
               <img src={call_icon } alt="" /> 
               <p> +91 7091216039</p>
            </div>
            <div className="contact-detail">
               <img src={location_icon } alt="" /> 
               <p>INDIA, Jharkhand</p>
            </div>
          </div>
        </div>
       <form className="conact-right">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder="Enter your name" />
        <label htmlFor="">Your Email</label>
        <input type="text" placeholder="Enter your email" />
        <label htmlFor="">Write your message here</label>
        <textarea name="message" rows={8} placeholder="Enter your message"></textarea>
        <button type="submit" className="contact-submit">submit now</button>
       </form>
      </div>
    </div>
  );
}

export default Contact;
