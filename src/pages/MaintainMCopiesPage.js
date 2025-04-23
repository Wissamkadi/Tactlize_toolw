import { Link } from "react-router-dom";
import React from 'react';
import '../styles/MaintainMCopies.css';
import '../styles/global.css';
import MaintainMCopies from '../styles/icons/MaintainMCopies.svg';
import challenge from '../styles/icons/challenge.png';

export default function MaintainDataPagePage() {
return(
  <div className='MaintainMCopies-page'>
   <section className="section">
    <div className="section-content">
      <h1 className="section-title">Maintain Multiple Copies<span className='colored-word'>Tactic</span></h1>
      <h4 className="section-tagline">Redundancy for Realibility</h4>
      <h2 className="section-subtitle">Introduction to the Tactic</h2>
      <p>
      Caching is a technique used to improve system performance by storing frequently accessed data temporarily. However, improper caching mechanisms can expose sensitive data to unauthorized users. Ensuring data confidentiality in caching is crucial for maintaining security and privacy.      </p>
      </div>
    </section>
    <section className="section">
    <div className="section-content">
      <h2 className="section-subtitle">Purpose & Benefits</h2>
      <p>
      Improved Security: Prevents unauthorized access to cached data.<br></br>
      Better Performance: Enables fast data retrieval while maintaining confidentiality.<br></br>
      Reduced Cyber Risks: Minimizes threats like cache poisoning and data leaks.<br></br>
      Enhanced User Trust: Ensures privacy, leading to higher user confidence.<br></br>
     </p>
      </div>
    </section>

  <section className="section">
  <div className="section-content">
    <h2 className="section-subtitle">How It Works?</h2>
    <div className="image-text-row">
      <div className="text-column">
      <p>
      The tactic involves clients, a cache, a cache manager, and a data repository. The cache stores frequently requested data for faster access. The cache manager first checks the cache for a request; if the data is missing, it retrieves it from the repository and stores a copy. A key challenge is maintaining consistency across copies, which can be managed using the State Resynchronization tactic.
      </p>
      </div>
      <div className="image-column">
      <img src={MaintainMCopies} alt='maintainMCopies-tactic' id='MaintainMCopies'></img>
      </div>
    </div>
  </div>
</section>

   <div className="card3">
    <h4>Trade-offs & Challenges</h4>
   <p>
   Ensuring consistency across multiple copies adds complexity, increases storage requirements, and can introduce concurrency challenges. While frequent updates improve accuracy, they may impact performance, cause latency, and reduce caching efficiency.
    </p>
    </div>
    <img src={challenge} alt='challenge' id='challenge4'></img>
    <div>
    <Link to="/upload" className="btn2 btn-primary">
    Start Detecting
    <span className="btn-icon">→</span>
    </Link>
    </div>
  </div>  
)
}