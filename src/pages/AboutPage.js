import React from 'react';
import '../styles/About.css';
import aboutImage from '../styles/icons/imabout.svg';
import stSecurities from '../styles/icons/stSecurities.svg';
import stReliability from '../styles/icons/stReliability.svg';
import stPerformance from '../styles/icons/stPerformance.svg';
import stAvailable from '../styles/icons/stAvailable.svg';
import powerImage from '../styles/icons/stPower.svg';
export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="section intro-section">
        
        <div className="section-content">
          <h2 className="section-subtitle">About Us</h2>
          <h1 className="section-title">Architectural Tactic Detector</h1>
          <h3 className="section-tagline">Detect. Analyze. Optimize.</h3>
          <p>
            Welcome to Architectural Tactic Detector, a platform designed to analyze and detect architectural tactics in software systems. In modern software architectures, design decisions greatly impact performance, security, and maintainability. Our goal is to provide an automated way to identify key tactics used in system design to improve understanding, validation, and optimization of software architectures.
          </p>
        </div>
        <div className="section-image">
          <img
            src={aboutImage}
            alt="Illustration of software tactic detection"
            style={{ maxWidth: "100%", height: "auto" , left:"5px"}}
          />         
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <h2 className="section-subtitle">What is an Architectural Tactic?</h2>
          <h1 className="section-title">Architectural Tactic</h1>
          <p>
            Architectural tactics are design strategies used to address system quality attributes such as :
          </p>
          <div className="icon-row">
            <div className="icon-item">
              <img src={stSecurities} alt="Security Icon" style={{ width: '100px', height: '100px', objectFit: 'contain' }} className="icon"  />
              <span className="section-tagline2">Security</span>
            </div>
            <div className="icon-item">
              <img src={stReliability} alt="Reliability Icon" style={{ width: '100px', height: '100px', objectFit: 'contain' }} className="icon" />
              <span className="section-tagline2">Reliability</span>
            </div>
            <div className="icon-item">
              <img src={stPerformance} alt="Performance Icon" style={{ width: '100px', height: '100px', objectFit: 'contain' }} className="icon" />
              <span className="section-tagline2">Performance</span>
            </div>
            <div className="icon-item">
              <img src={stAvailable} alt="Availability Icon" style={{ width: '100px', height: '100px', objectFit: 'contain' }} className="icon" />
              <span className="section-tagline2">Availability</span>
            </div>
          </div>
          <p>
            By detecting these tactics in software architectures, developers and architects can evaluate design choices, ensure consistency, and enhance system robustness.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <h2 className="section-subtitle">How Our Tool Works?</h2>
          <h1 className="section-title">Intelligent System Trace Analyzer</h1>
          <p>
            Our tool automatically analyzes system traces to detect occurrences of architectural tactics. It:
          </p>
          <ul className="plain-list">
          <li>
              <span className="highlight2">Parses execution traces</span> to identify tactic patterns.
            </li>
            <li>
              <span className="highlight2">Maps detected behaviors </span> to known architectural tactics.</li>
            <li>
              <span className="highlight2">Provides insights</span> into how tactics are implemented in the system.</li>
          </ul>
        </div>
      </section>

      <section className="section why-it-matters-section">
        <div className="section-content">
          <h2 className="section-subtitle">Why It Matters?</h2>
          <h1 className="section-title">The Power of Architectural Tactic Detection</h1>
          <p>
            Understanding and detecting architectural tactics is crucial for:
          </p>
          <ul className="plain-list">
            <li>
              <span className="highlight">Software maintainability</span> – Ensuring that systems are designed following best practices.
            </li>
            <li>
              <span className="highlight">Security assessment</span> – Verifying that authentication mechanisms are correctly implemented.
            </li>
            <li>
              <span className="highlight">Performance optimization</span> – Identifying and improving response times and data handling.
            </li>
            <li>
              <span className="highlight">System evaluation</span> – Helping architects and developers assess the design quality of software.
            </li>
          </ul>
        </div>
        <div className="section-image">
          <img
            src={powerImage}
            alt="Power Icon"
            style={{ width: '200px', height: '200px', objectFit: 'contain' }}
          />
        </div>
      </section>
    </div>
  );
}