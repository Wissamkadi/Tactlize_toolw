import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import logo from "../styles/icons/tactlize-logo.svg"; 
import logo2 from "../styles/icons/logo2.svg"; 

const translationsData = {
  en: {
    home: "Home",
    about: "About",
    tactics: "Architectural Tactics",
    detect: "Detect now",
    contact: "Contact Us",
    tacticsList: "Tactics List",
    maintainMCopies: {
      title: "Maintain Multiple Copies Tactic",
      subtext: "Redundancy for Reliability"
    },
    idPassword: {
      title: "ID/Password Authentication Tactic",
      subtext: "Secure Access, Verified Identity"
    },
    oneTime: {
      title: "The one time password Tactic",
      subtext: "One-Time Pass, Full-Time Security"
    },
    maintainData: {
      title: "Main data confidentiality Tactic",
      subtext: "Encrypted & Safe, Every Step"
    },
    pingEcho: {
      title: "Ping echo tactic",
      subtext: "Liveness Verified, Connectivity Ensured"
    }
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    tactics: "Tactiques Architecturales",
    detect: "Détecter maintenant",
    contact: "Nous Contacter",
    tacticsList: "Liste des Tactiques",
    maintainMCopies: {
      title: "Tactique de Maintien de Plusieurs Copies",
      subtext: "Redondance pour la Fiabilité"
    },
    idPassword: {
      title: "Tactique d'Authentification ID/Mot de Passe",
      subtext: "Accès Sécurisé, Identité Vérifiée"
    },
    oneTime: {
      title: "Tactique de Mot de Passe à Usage Unique",
      subtext: "Passe Unique, Sécurité Permanente"
    },
    maintainData: {
      title: "Tactique de Confidentialité des Données Principales",
      subtext: "Chiffré et Sécurisé, à Chaque Étape"
    },
    pingEcho: {
      title: "Tactique d'Écho Ping",
      subtext: "Vivacité Vérifiée, Connectivité Assurée"
    }
  }
};

export default function Navbar() {
  const [language, setLanguage] = useState(localStorage.getItem('language') || "EN/FR");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkLanguage = () => {
      const storedLanguage = localStorage.getItem('language');
      const newLanguage = storedLanguage || "EN/FR";
      if (newLanguage !== language) {
        setLanguage(newLanguage);
      }
    };

    const interval = setInterval(checkLanguage, 100);
    return () => clearInterval(interval);
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === "EN/FR" ? "FR/EN" : "EN/FR";
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translations = useMemo(() => translationsData, []);
  const langKey = language === "FR/EN" ? "fr" : "en";

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

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/"><nav>{translations[langKey].home}</nav></Link>
        </li>
        <li>
          <Link to="/about"><nav>{translations[langKey].about}</nav></Link>
        </li>
        <li className="dropdown">
          <Link to="/tactics">
            <nav>{translations[langKey].tactics} <span className="arrow"></span></nav>
          </Link>
          <div className="navbar-dropdown">
            <h4>{translations[langKey].tacticsList}</h4>
            <ul>
              <li>
                <div className="icon icon--tactic1"></div>
                <div className="tactic-content">
                  <Link to="/MaintainMCopies">{translations[langKey].maintainMCopies.title}</Link>
                  <span className="dropdown-subtext">{translations[langKey].maintainMCopies.subtext}</span>
                </div>
              </li>
              <li>
                <div className="icon icon--tactic2"></div>
                <div className="tactic-content">
                  <Link to="/IDPassword">{translations[langKey].idPassword.title}</Link>
                  <span className="dropdown-subtext">{translations[langKey].idPassword.subtext}</span>
                </div>
              </li>
              <li>
                <div className="icon icon--tactic3"></div>
                <div className="tactic-content">
                  <Link to="/OneTime">{translations[langKey].oneTime.title}</Link>
                  <span className="dropdown-subtext">{translations[langKey].oneTime.subtext}</span>
                </div>
              </li>
              <li>
                <div className="icon icon--tactic4"></div>
                <div className="tactic-content">
                  <Link to="/MaintainData">{translations[langKey].maintainData.title}</Link>
                  <span className="dropdown-subtext">{translations[langKey].maintainData.subtext}</span>
                </div>
              </li>
              <li>
                <div className="icon icon--tactic5"></div>
                <div className="tactic-content">
                  <Link to="/PingEcho">{translations[langKey].pingEcho.title}</Link>
                  <span className="dropdown-subtext">{translations[langKey].pingEcho.subtext}</span>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/upload"><nav>{translations[langKey].detect}</nav></Link>
        </li>
        <li>
          <Link to="/contact"><nav>{translations[langKey].contact}</nav></Link>
        </li>
      </ul>

      <div className="language-switcher" onClick={toggleLanguage}>
        {language}
      </div>
    </nav>
  ); 
}