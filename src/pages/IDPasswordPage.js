import { Link } from "react-router-dom";
import React from 'react';
import '../styles/IDPassword.css';
import '../styles/global.css';
import IDPassword from '../styles/icons/IDPassword.png';
import challenge from '../styles/icons/challenge.png';

export default function IDPasswordPage() {
return(
  <div className='IDPassword-page'>
   <section className="section">
    <div className="section-content">
      <h1 className="section-title">The ID/Password <span className='colored-word'>Tactic</span></h1>
      <h4 className="section-tagline">Secure Access, Verified Identity</h4>
      <h2 className="section-subtitle">Introduction to the Tactic</h2>
      <p>
            ID/Password authentication is the most common method for verifying user identity in software systems.
            Users provide a unique identifier (ID) and a secret password, which the system validates before granting access.
            It’s a simple and effective way to control access to sensitive data and resources.<br></br>
            Imagine an office with a keycard entry system. Each employee has a unique keycard (ID) and a personal PIN (password)
            to enter the building. If the details don’t match, entry is denied.
      </p>
      </div>
    </section>
    <section className="section">
      <div className="section-content">
      <h2 className="section-subtitle">Purpose & Benefits</h2>
      <p>
      Prevent unauthorized access by verifying user credentials.<br></br>
      Track user activity for accountability and security audits.<br></br>
      Provide a familiar authentication method that users understand and trust.<br></br>
      Is it used almost every online system—banking apps, email services, corporate networks, and e-commerce sites.
      </p>
      </div>
      </section>

      <section className="section">
  <div className="section-content">
    <h2 className="section-subtitle">How It Works?</h2>
    <div className="image-text-row">
      <div className="text-column">
      <p>
      <span className="highlight">User Input:</span> The user enters their ID and password.
      <span className="highlight">Verification:</span> The system checks if the credentials match the stored data.
      <span className="highlight">Access Decision:</span> If correct → User is granted access.If not, Access is denied.
      <span className="highlight">(Optional) Additional Security Measures:</span> Systems may lock the account after multiple failed attempts or require CAPTCHA verification.
      </p>
      </div>
      <div className="image-column">
      <img src={IDPassword} alt='idpassword-tactic' id='idpassword'></img>
      </div>
    </div>
  </div>
</section>

   <div className="card2">
    <h4>Trade-offs & Challenges</h4>
   <p>
   Simple to implement but vulnerable to phishing/brute-force attacks. Requires password policies (complexity, expiration) which can frustrate users. Multi-factor authentication improves security but adds steps. 
    </p>
    </div>
    <img src={challenge} alt='challenge' id='challenge'></img>
    <div>
    <Link to="/upload" className="btn2 btn-primary">
    Start Detecting
    <span className="btn-icon">→</span>
    </Link>
    </div>
  </div>  
)
}