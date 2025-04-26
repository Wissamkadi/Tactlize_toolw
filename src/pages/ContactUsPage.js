import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ContactUs.css';

const ContactUsPage = () => {
  const handleClear = () => {
    document.querySelectorAll('input, textarea').forEach(field => {
      field.value = '';
    });
  };
  
  return (
    <>
      <div className="container">
        <section className="header-section">
          <h1>Reach Out to the <span className="colored-word">JavaCC</span> Parser Team</h1>
        </section>
        <section className="content-section">
          <div className="text-content">
            <div className="intro">
              <h2>Who are we?</h2>
              <p>We're a team of ESI students passionate about software architecture and grammar parsing. If you have questions about our tactic detection system, suggestions to enhance our parser, or you'd just like to discuss JavaCC – we'd love to hear from you!</p>
            </div>
            <div className="instructions">
              <h2>Form Instructions</h2>
              <ol>
                <li>Fill in your full name and a valid email address so we can get back to you.</li>
                <li>Let us know what's on your mind. Whether it's a question, suggestion, or feedback – we're here to listen.</li>
                <li>Click the "Submit" button to submit the form, and we'll receive your message directly.</li>
                <li>One of our team members will respond to you as soon as possible – usually within a day!</li>
                <li>By clicking "Clear All", all fields will be reset and emptied.</li>
              </ol>
            </div>
          </div>
          <div className="image-space"></div>
        </section>
        <section className="form-section">
          <h2>Please Fill Out the Form Below</h2>
          <div className="form-grid">
            <input type="text" placeholder="First Name*" required />
            <input type="text" placeholder="Last Name*" required />
            <input type="email" placeholder="Business Email*" required />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Job" />
            <input type="text" placeholder="Company Name" />
            <textarea placeholder="How can we help you?"></textarea>
          </div>
          <div className="form-footer">
            <p>Thank you for reaching out! Upon submitting, we will promptly review your message and get back to you as soon as possible. We appreciate your trust and look forward to assisting you.</p>
          </div>
          <div className="buttons">
          <Link to="/ContactUsResult" className="btn btn-primary submit">
            Submit
          </Link>  
          <button className="btn btn-secondary clear" onClick={handleClear}>Clear All</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUsPage;