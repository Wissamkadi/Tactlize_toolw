import { Link } from "react-router-dom";
import '../styles/Home.css'; // Import the dedicated Home.css
import heroImage from '../styles/icons/imHome.svg';
export default function HomePage() {
  return (
    <div className="home">
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
    </div>
  );
}