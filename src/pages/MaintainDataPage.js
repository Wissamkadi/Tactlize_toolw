import { Link } from "react-router-dom";
import React from 'react';
import '../styles/MaintainData.css';
import '../styles/global.css';
import MaintainData from '../styles/icons/MaintainData.png';
import challenge from '../styles/icons/challenge.png';

export default function MaintainDataPagePage() {
return(
  <div className='MaintainData-page'>
   <section className="section">
    <div className="section-content">
      <h1 className="section-title">Maintain Data Confidentiality<span className='colored-word'>Tactic</span></h1>
      <h4 className="section-tagline">Encrypted & Safe, Every Step</h4>
      <h2 className="section-subtitle">Introduction to the Tactic</h2>
      <p>
           This tactic ensures that sensitive data is kept private and accessible only to authorized users. It involves techniques such as encryption, access control, and secure transmission to prevent data leaks or unauthorized access. IIt is used in a digital world, protecting confidential information (e.g., user credentials, financial records, medical data) is crucial.It is like Like sealing a letter in an envelope—only the recipient can open and read it.
      </p>
      </div>
    </section>
    <section className="section">
    <div className="section-content">
      <h2 className="section-subtitle">Introduction to the Tactic</h2>
      <p>
      Prevents data breaches by making unauthorized access difficult.<br></br>   
      Ensures privacy compliance with laws like GDPR and HIPAA.<br></br>  
      Protects user trust by securing sensitive information.<br></br>
      Is it used in Banking apps, healthcare systems, government databases, and cloud storage services.
     </p>
      </div>
    </section>

  <section className="section">
  <div className="section-content">
    <h2 className="section-subtitle">How It Works?</h2>
    <div className="image-text-row">
      <div className="text-column">
      <p>
      <span className="highlight">Encryption:</span> Data is converted into an unreadable format (ciphertext) before storage or transmission.
      <span className="highlight"> Access Control:</span> Only users with the correct permissions or decryption keys can access the data.
      <span className="highlight"> Secure Transmission:</span> Data is sent over encrypted connections (e.g., HTTPS, TLS) to prevent interception.
      </p>
      </div>
      <div className="image-column">
      <img src={MaintainData} alt='maintaindata-tactic' id='MaintainData'></img>
      </div>
    </div>
  </div>
</section>

   <div className="card3">
    <h4>Trade-offs & Challenges</h4>
   <p>
   Strong encryption ensures safety but impacts performance. Key management is complex—losing keys means losing data. Access controls must balance security with usability.
    </p>
    </div>
    <img src={challenge} alt='challenge' id='challenge1'></img>
    <div>
    <Link to="/upload" className="btn2 btn-primary">
    Start Detecting
    <span className="btn-icon">→</span>
    </Link>
    </div>
  </div>  
)
}