import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Home.css';
import heroImage from '../styles/icons/imHome.svg';
import TactilizeLogo from '../styles/icons/tactlize-logo.svg';

export default function HomePage() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Detect <span>Architectural Tactics</span> with Smart Parsing
          </h1>
          <p className="hero-description">
            Upload your execution trace and let our JavaCC-powered parser generator detect architectural tactics for you.
          </p>
          <p className="hero-subdescription">
            Our platform simplifies parsing, offering precise detection and insights to enhance software architecture, leveraging JavaCC for its efficiency and flexibility.
          </p>
          <div className="hero-buttons">
            <Link to="/upload" className="btn btn-primary">
              Get started
              <span className="btn-icon">→</span>
            </Link>
            <Link to="/javaccdetails" className="btn btn-secondary">
              Learn more
              <span className="btn-icon">→</span>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={heroImage}
            alt="Hero section"
            style={{ width: "400px", height: "300px", objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Architectural Tactics Section */}
      <section className="tactics-section">
        <div className="tactics-section-inner">
          {/* Title Sub-Section */}
          <div className="tactics-title-section">
            <h2 className="tactics-title">Architectural Tactics</h2>
          </div>

          {/* First Row: 3 Tactic Cards */}
          <div className="tactics-row">
            <Link to="/IDPassword" className="tactic-card">
              <div className="tactic-icon id-password-icon"></div>
              <h3 className="tactic-name">ID password</h3>
              <p className="tactic-description">
                A simple and widely used authentication method where users enter a unique ID and password to gain access to a system.
              </p>
              <span className="learn-more">Learn More →</span>
            </Link>

            <Link to="/MaintainData" className="tactic-card">
              <div className="tactic-icon maintain-data-icon"></div>
              <h3 className="tactic-name">Maintain Data Confidentiality</h3>
              <p className="tactic-description">
                A security tactic that ensures sensitive information is only accessible to authorized users by using encryption and controlled access mechanisms.
              </p>
              <span className="learn-more">Learn More →</span>
            </Link>

            <Link to="/MaintainMCopies" className="tactic-card">
              <div className="tactic-icon maintain-copies-icon"></div>
              <h3 className="tactic-name">Maintain Multiple Copies</h3>
              <p className="tactic-description">
                Reliable data redundancy technique where multiple copies of data are stored across different locations or systems to ensure availability and fault tolerance in case of failure.
              </p>
              <span className="learn-more">Learn More →</span>
            </Link>
          </div>

          {/* Second Row: 2 Tactic Cards */}
          <div className="tactics-row">
            <Link to="/OneTime" className="tactic-card">
              <div className="tactic-icon one-time-password-icon"></div>
              <h3 className="tactic-name">The OneTime Password</h3>
              <p className="tactic-description">
                A secure authentication method where users are granted temporary access through a unique, time-sensitive code sent to them, typically via email or SMS, for one-time use only.
              </p>
              <span className="learn-more">Learn More →</span>
            </Link>

            <Link to="/PingEcho" className="tactic-card">
              <div className="tactic-icon ping-echo-icon"></div>
              <h3 className="tactic-name">Ping-Echo</h3>
              <p className="tactic-description">
                A basic availability-checking method where one component sends a "ping" message to another, which replies with an "echo" to confirm it is active and responsive.
              </p>
              <span className="learn-more">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <div className='information'>
        <div className='info1'>
          <Link to="/">
            <img
              src={TactilizeLogo}
              alt="Tactilize Logo"
              style={{
                width: "187.01px",
                height: "68.93px",
                objectFit: "contain",
              }}
            />
          </Link>
          <p className='gris'>
            Architectural Tactic Detector identifies key design tactics in software to improve system performance, security, and maintainability.
          </p>
        </div>
        <div className='info2'>
          <p className='gris'>Sections</p>
          <p>
            <Link to="/" className="link">Home<br /></Link>
            <Link to="/about" className="link">About<br /></Link>
            <Link to="/tactics" className="link">Architectural Tactics<br /></Link>
            <Link to="/DetectNow" className="link">Detect Now</Link>
          </p>
        </div>
        <div className='info3'>
          <p>
            <span className='gris'>Website by</span> Tactlize Team<br></br>
            <span className='gris'>Set in</span> <Link to="https://www.esi.dz/" className="link" target='_blank'>Ecole National Superieur d’informatique, Algiers</Link>
          </p>
          <p>
            <Link to="/contact" className="link">Contact Us</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
