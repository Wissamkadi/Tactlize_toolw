import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import TactilizeLogo from '../styles/icons/tactlize-logo.svg';
import '../styles/Footer.css';

const translationsData = {
  en: {
    description: 'Architectural Tactic Detector identifies key design tactics in software to improve system performance, security, and maintainability.',
    sectionsTitle: 'Sections',
    home: 'Home',
    about: 'About',
    tactics: 'Architectural Tactics',
    detect: 'Detect Now',
    websiteTitle: 'Website',
    websiteBy: 'Website by ',
    setIn: 'Set in ',
    contact: 'Contact Us',
    copyright: 'Copyright © Tactlize Team. All rights reserved.'
  },
  fr: {
    description: 'Détecteur de Tactiques Architecturales identifie les tactiques de conception clés dans les logiciels pour améliorer les performances, la sécurité et la maintenabilité des systèmes.',
    sectionsTitle: 'Sections',
    home: 'Accueil',
    about: 'À propos',
    tactics: 'Tactiques Architecturales',
    detect: 'Détecter maintenant',
    websiteTitle: 'Site Web',
    websiteBy: 'Site par ',
    setIn: 'Situé à ',
    contact: 'Nous Contacter',
    copyright: 'Copyright © Équipe Tactlize. Tous droits réservés.'
  }
};

const Footer = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language') === 'FR/EN' ? 'fr' : 'en');

  useEffect(() => {
    const checkLanguage = () => {
      const storedLanguage = localStorage.getItem('language');
      const newLanguage = storedLanguage === 'FR/EN' ? 'fr' : 'en';
      if (newLanguage !== language) {
        setLanguage(newLanguage);
      }
    };

    const interval = setInterval(checkLanguage, 100);
    return () => clearInterval(interval);
  }, [language]);

  const translations = useMemo(() => translationsData, []);

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <Link to="/">
            <img src={TactilizeLogo} alt="Tactlize Logo" className="footer-logo" />
          </Link>
          <p className="footer-description">{translations[language].description}</p>
        </div>

        <div className="footer-section">
          <div className='section2'>
            <h4 className="footer-title">{translations[language].sectionsTitle}</h4>
            <ul className="footer-links2">
              <li><Link to="/">{translations[language].home}</Link></li>
              <li><Link to="/about">{translations[language].about}</Link></li>
              <li><Link to="/tactics">{translations[language].tactics}</Link></li>
              <li><Link to="/upload">{translations[language].detect}</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-section">
          <div className='section3'>
            <h4 className="footer-title">{translations[language].websiteTitle}</h4>
            <p><span className="footer-title">{translations[language].websiteBy}</span> Tactlize Team</p>
            <p>
              <span className="footer-title">{translations[language].setIn}</span>
              <a href="https://www.esi.dz/" target="_blank" rel="noopener noreferrer"> Ecole National Superieur d’informatique, Algiers</a>
            </p>
            <Link to="/contact" className="footer-contact">{translations[language].contact}</Link>
          </div>
        </div>
      </div>

      <div className="footer">
        <p className="last">{translations[language].copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;