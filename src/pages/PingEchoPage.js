import { Link } from "react-router-dom";
import React from 'react';
import '../styles/PingEcho.css';
import '../styles/global.css';
import PingEcho from '../styles/icons/PingEcho.svg';
import challenge from '../styles/icons/challenge.png';

export default function PingEchoPage() {
return(
  <div className='PingEcho-page'>
   <section className="section">
    <div className="section-content">
      <h1 className="section-title">Ping Echo<span className='colored-word'>Tactic</span></h1>
      <h4 className="section-tagline">Liveness Verified, Connectivity Ensured</h4>
      <h2 className="section-subtitle">Introduction to the Tactic</h2>
      <p>
      This tactic monitors system health by sending ping requests and expecting echo replies. If no reply is received, the system is marked as unresponsive. It’s like a heartbeat check for servers, networks, or microservices—ensuring they’re alive and reachable.
      </p>
      </div>
    </section>
    <section className="section">
      <div className="section-content">
      <h2 className="section-subtitle">Purpose & Benefits</h2>
      <p>
      <ul id="ul1">
      <li><span className="highlightB">Fast Failure Detection:</span> Identifies unresponsive nodes in seconds</li>
      <li><span className="highlightB">Lightweight:</span> Uses minimal network resources (ICMP or custom packets)</li>
      <li><span className="highlightB">Universal:</span> Works across servers, microservices, and network devices</li>
      <li><span className="highlightB">Automated Recovery:</span> Integrates with failover mechanisms</li>
      </ul>
      </p>
      </div>
      </section>
<section className="section">
  <div className="section-content">
    <h2 className="section-subtitle">How It Works?</h2>
    <div className="image-text-row">
      <div className="text-column">
        <p>
        <span className="highlightB">Ping Message:</span> A sender component periodically sends a ping message to one or more receivers to check their availability.<br />
        <span className="highlightB">Echo Response:</span> If a receiver is active, it responds with an echo message to confirm it is functioning correctly.<br />
        <span className="highlightB">Timeout & Failure Detection:</span> it detects this failure, handles the exception (e.g., logs the issue, initiates recovery), and ensures system resilience.<br />
        <span className="highlightB">Fault Monitoring:</span> Systems may lock the account after multiple failed attempts or        </p>
      </div>
      <div className="image-column">
        <img src={PingEcho} alt='PingEcho-tactic' id="pingecho"/>
      </div>
    </div>
  </div>
</section>

   <div className="card5">
    <h4>Trade-offs & Challenges</h4>
   <p>
   Network latency may cause false positives; requires careful timeout tuning. Unsecured implementations risk ping flood attacks. Frequent pings improve accuracy but increase traffic.
    </p>
    </div>
    <img src={challenge} alt='challenge' id='challenge3'></img>
    <div>
    <Link to="/upload" className="btn2 btn-primary">
    Start Detecting
    <span className="btn-icon">→</span>
    </Link>
    </div>
  </div>  
)
}