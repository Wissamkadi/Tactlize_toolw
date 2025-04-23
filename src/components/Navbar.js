import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../styles/icons/tactlize-logo.svg"; 
import logo2 from "../styles/icons/logo2.svg"; 

export default function Navbar() {
  const [language, setLanguage] = useState("EN/FR");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "EN/FR" ? "FR/EN" : "EN/FR");
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>

<Link to="/" className="navbar-logo">
        <img
          src={isScrolled ? logo2 : logo}
          alt="Tactilize Logo"
          style={{
            width: "187.01px",
            height: "68.93px",
            objectFit: "contain",
          }}
        />
      </Link>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navbar Links */}
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/"> <nav>  Home  </nav></Link>
        </li>
        <li>
          <Link to="/about"><nav>  About  </nav></Link>
        </li>
        <li className="dropdown">
            <Link to="/tactics">
             <nav>  Architectural Tactics  <span className="arrow"></span> </nav>
                 {/* Static down arrow */}
            </Link>
          <div className="navbar-dropdown">
            <h4>Tactics List</h4>
            <ul>
              <li>
                <div className="icon icon--tactic1"></div>
                <div className="tactic-content">
                  <Link to="MaintainMCopies">Maintain Multiple Copies Tactic</Link>
                  <span className="dropdown-subtext">Redundancy for Reliability</span>
                </div>
              </li>
              <li>
                <div className="icon icon--tactic2"></div>
                <div className="tactic-content">
                  <Link to="/IDPassword">ID/Password Authentication Tactic</Link>
                  <span className="dropdown-subtext">Secure Access, Verified Identity</span>
                </div>
              </li>
              <li>
                <div className="icon icon--tactic3"></div>
                <div className="tactic-content">
                  <Link to="OneTime">The one time password Tactic</Link>
                  <span className="dropdown-subtext">One-Time Pass, Full-Time Security</span>
                </div>
              </li>
              <li>
                <div className="icon icon--tactic4"></div>
                <div className="tactic-content">
                  <Link to="/MaintainData">Main data confidentiality Tactic</Link>
                  <span className="dropdown-subtext">Encrypted & Safe, Every Step</span>
                </div>
              </li>
              <li>
                <div className="icon icon--tactic5"></div>
                <div className="tactic-content">
                  <Link to="/PingEcho">Ping echo tactic</Link>
                  <span className="dropdown-subtext">Liveness Verified, Connectivity Ensured</span>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/DetectNow"><nav>  Detect now  </nav></Link>
        </li>
        <li>
          <Link to="/contact"><nav>Contact Us</nav></Link>
        </li>
      </ul>

      <div className="language-switcher" onClick={toggleLanguage}>
        {language}
      </div>
    </nav>
  );
}