// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import TactilizeLogo from '../styles/icons/tactlize-logo.svg';
import '../styles/Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Bloc 1 : Logo + Description */}
        <div className="footer-section">
          <Link to="/">
            <img src={TactilizeLogo} alt="Tactilize Logo" className="footer-logo" />
          </Link>
          <p className="footer-description">
            Architectural Tactic Detector identifies key design tactics in software to improve system performance, security, and maintainability.
          </p>
        </div>

        {/* Bloc 2 : Sections */}
        <div className="footer-section">
          <div className='section2'>
          <h4 className="footer-title">Sections</h4>
          <ul className="footer-links2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/tactics">Architectural Tactics</Link></li>
            <li><Link to="/DetectNow">Detect Now</Link></li>
          </ul>
          </div>
        </div>

        {/* Bloc 3 : Website info */}
        <div className="footer-section">
        <div className='section3'>
          <h4 className="footer-title">Website</h4>
          <p><span className="footer-title">Website by</span> Tactlize Team</p>
          <p>
           <span className="footer-title">Set in</span> <a href="https://www.esi.dz/" target="_blank" rel="noopener noreferrer">Ecole National Superieur d’informatique, Algiers</a>
          </p>
          <Link to="/contact" className="footer-contact">Contact Us</Link>
        </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer">
        <p className="last">Copyright © Tactlize Team. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
