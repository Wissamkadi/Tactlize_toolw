import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Home.css';
import heroImage from '../styles/icons/imHome.svg';

export default function HomePage() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>
            Detect <span>Reach Out to the</span> JavaCC Parser Team
          </h2>
          <p className="hero-description">
          Thank you for contacting us! Your message has been successfully sent. We’ll get back to you as soon as possible.  
          </p>
          <div className="hero-buttons">
            <Link to="/ContactUs" className="btn btn-primary">
            Send another message
              <span className="btn-icon">→</span>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={ContactUsResult}
            alt="ContactUsResult"
          />
        </div>
      </section>
    </div>
  );
}