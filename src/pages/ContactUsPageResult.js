import React from 'react';
import { Link } from "react-router-dom";
import '../styles/ContactUsResult.css';
import '../styles/global.css';
import ContactUsResult from '../styles/icons/ContactUsResult.svg';

export default function ContactUsResultPage() {
  return (
    <div className="contact-result-container">
      <div className="contact-result-content">
        <div className="contact-result-text">
          <h1>
            Reach Out to the <span>JavaCC Parser Team</span>
          </h1>
          <p>
            Thank you for contacting us! Your message has been successfully sent.
            We’ll get back to you as soon as possible.
          </p>
          <Link to="/contact" className="btn4">
            Send another message
          </Link>
        </div>
        <div className="contact-result-image">
          <img src={ContactUsResult} alt="Contact Us Result" />
        </div>
      </div>
    </div>
  );
}
