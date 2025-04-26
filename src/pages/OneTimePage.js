import { Link } from "react-router-dom";
import React from 'react';
import '../styles/OneTimePassword.css';
import '../styles/global.css';
import OneTime from '../styles/icons/OneTime.png';
import challenge from '../styles/icons/challenge.png';

export default function OneTimePage() {
return(
  <div className='OneTime-page'>
   <section className="section">
    <div className="section-content">
      <h1 className="section-title">The Onetime password<span className='colored-word'>Tactic</span></h1>
      <h4 className="section-tagline">One-Time Pass, Full-Time Security</h4>
      <h2 className="section-subtitle">Introduction to the Tactic</h2>
      <p>
      The One-Time Password (OTP) Tactic enhances authentication security by generating a unique, temporary password for each login attempt. Unlike static passwords, OTPs prevent credential reuse and reduce the risk of attacks such as phishing and credential theft. They are typically delivered via SMS, email, or authentication apps, ensuring secure and time-sensitive access.
      </p>
      </div>
    </section>
    <section className="section">
      <div className="section-content">
      <h2 className="section-subtitle">Purpose & Benefits</h2>
      <p>
      The OTP tactic strengthens authentication by preventing password reuse and reducing phishing risks. It enhances security, ensures time-limited access, and protects against unauthorized logins while maintaining user convenience.
      </p>
      </div>
      </section>

  <section className="section">
  <div className="section-content">
    <h2 className="section-subtitle">How It Works?</h2>
    <div className="image-text-row">
      <div className="text-column">
      <p>
        When a user attempts to log in, the system generates a
        unique, time-sensitive OTP and delivers it via SMS, email,
        or an authentication app. The user enters the OTP, which is
        then verified against the system's records. If valid, access is
        granted; otherwise, the attempt is denied. Each OTP is
        single-use and expires after a short period.
        It ensures that even if a password is compromised,
        unauthorized access is still unlikely without the OTP. The
        limited validity window and single-use nature of OTPs help
        protect against replay attacks and other forms of intrusion.
      </p>
      </div>
      <div className="image-column">
      <img src={OneTime} alt="OneTimePassword-tactic" />      
      </div>
    </div>
  </div>
</section>


   <div className="card4">
    <h4>Trade-offs & Challenges</h4>
   <p>
   Ensuring the security of one-time passwords (OTPs) requires strong encryption and secure transmission, adding computational overhead. While OTPs enhance security by preventing reuse, they can introduce usability challenges, such as delivery delays and synchronization issues.
   </p>
    </div>
    <img src={challenge} alt='challenge' id='challenge2'></img>
    <div>
    <Link to="/upload" className="btn2 btn-primary">
    Start Detecting
    <span className="btn-icon">→</span>
    </Link>
    </div>
  </div>  
)
}