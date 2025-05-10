import React, { useState, useEffect, useMemo } from 'react';
import { Link } from "react-router-dom";
import '../styles/Home.css';
import heroImage from '../styles/icons/imHome.svg';

const translationsData = {
  en: {
    heroTitle: 'Detect <span>Architectural Tactics</span> with Smart Parsing',
    heroDescription: 'Upload your execution trace and let our JavaCC-powered parser generator detect architectural tactics for you.',
    heroSubdescription: 'Our platform simplifies parsing, offering precise detection and insights to enhance software architecture, leveraging JavaCC for its efficiency and flexibility.',
    getStarted: 'Get started',
    learnMore: 'Learn more',
    tacticsTitle: 'Architectural Tactics',
    idPassword: {
      name: 'ID password',
      description: 'A simple and widely used authentication method where users enter a unique ID and password to gain access to a system.'
    },
    maintainData: {
      name: 'Maintain Data Confidentiality',
      description: 'A security tactic that ensures sensitive information is only accessible to authorized users by using encryption and controlled access mechanisms.'
    },
    maintainMCopies: {
      name: 'Maintain Multiple Copies',
      description: 'Reliable data redundancy technique where multiple copies of data are stored across different locations or systems to ensure availability and fault tolerance in case of failure.'
    },
    oneTime: {
      name: 'The OneTime Password',
      description: 'A secure authentication method where users are granted temporary access through a unique, time-sensitive code sent to them, typically via email or SMS, for one-time use only.'
    },
    pingEcho: {
      name: 'Ping-Echo',
      description: 'A basic availability-checking method where one component sends a "ping" message to another, which replies with an "echo" to confirm it is active and responsive.'
    }
  },
  fr: {
    heroTitle: 'Détecter les <span>tactiques architecturales</span> avec une analyse intelligente',
    heroDescription: 'Téléversez votre trace d\'exécution et laissez notre générateur d\'analyseur basé sur JavaCC détecter les tactiques architecturales pour vous.',
    heroSubdescription: 'Notre plateforme simplifie l\'analyse en offrant une détection précise et des insights pour améliorer l\'architecture logicielle, en tirant parti de l\'efficacité et de la flexibilité de JavaCC.',
    getStarted: 'Commencer',
    learnMore: 'En savoir plus',
    tacticsTitle: 'Tactiques Architecturales',
    idPassword: {
      name: 'ID Mot de Passe',
      description: 'Une méthode d\'authentification simple et largement utilisée où les utilisateurs entrent un identifiant unique et un mot de passe pour accéder à un système.'
    },
    maintainData: {
      name: 'Maintenir la Confidentialité des Données',
      description: 'Une tactique de sécurité qui garantit que les informations sensibles ne sont accessibles qu\'aux utilisateurs autorisés grâce à un chiffrement et des mécanismes d\'accès contrôlés.'
    },
    maintainMCopies: {
      name: 'Maintenir Plusieurs Copies',
      description: 'Une technique de redondance de données fiable où plusieurs copies de données sont stockées à différents endroits ou systèmes pour assurer la disponibilité et la tolérance aux pannes en cas de défaillance.'
    },
    oneTime: {
      name: 'Mot de Passe à Usage Unique',
      description: 'Une méthode d\'authentification sécurisée où les utilisateurs obtiennent un accès temporaire via un code unique et sensible au temps, envoyé généralement par email ou SMS, pour une utilisation unique.'
    },
    pingEcho: {
      name: 'Ping-Écho',
      description: 'Une méthode de vérification de disponibilité de base où un composant envoie un message "ping" à un autre, qui répond par un "écho" pour confirmer qu\'il est actif et réactif.'
    }
  }
};

export default function HomePage() {
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
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 dangerouslySetInnerHTML={{ __html: translations[language].heroTitle }}></h1>
          <p className="hero-description">{translations[language].heroDescription}</p>
          <p className="hero-subdescription">{translations[language].heroSubdescription}</p>
          <div className="hero-buttons">
            <Link to="/upload" className="btn btn-primary">
              {translations[language].getStarted}
              <span className="btn-icon">→</span>
            </Link>
            <Link to="/javaccdetails" className="btn btn-secondary">
              {translations[language].learnMore}
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

      <section className="tactics-section">
        <div className="tactics-section-inner">
          <div className="tactics-title-section">
            <h2 className="tactics-title">{translations[language].tacticsTitle}</h2>
          </div>

          <div className="tactics-row">
            <div className="tactic-card">
              <div className="tactic-icon id-password-icon"></div>
              <h3 className="tactic-name">{translations[language].idPassword.name}</h3>
              <p className="tactic-description">{translations[language].idPassword.description}</p>
              <Link to="/IDPassword">
                <span className="learn-more">Learn More →</span>
              </Link>
            </div>

            <div className="tactic-card">
              <div className="tactic-icon maintain-data-icon"></div>
              <h3 className="tactic-name">{translations[language].maintainData.name}</h3>
              <p className="tactic-description">{translations[language].maintainData.description}</p>
              <Link to="/MaintainData">
                <span className="learn-more">Learn More →</span>
              </Link>
            </div>

            <div className="tactic-card">
              <div className="tactic-icon maintain-copies-icon"></div>
              <h3 className="tactic-name">{translations[language].maintainMCopies.name}</h3>
              <p className="tactic-description">{translations[language].maintainMCopies.description}</p>
              <Link to="/MaintainMCopies">
                <span className="learn-more">Learn More →</span>
              </Link>
            </div>
          </div>

          <div className="tactics-row">
            <div className="tactic-card">
              <div className="tactic-icon one-time-password-icon"></div>
              <h3 className="tactic-name">{translations[language].oneTime.name}</h3>
              <p className="tactic-description">{translations[language].oneTime.description}</p>
              <Link to="/OneTime">
                <span className="learn-more">Learn More →</span>
              </Link>
            </div>

            <div className="tactic-card">
              <div className="tactic-icon ping-echo-icon"></div>
              <h3 className="tactic-name">{translations[language].pingEcho.name}</h3>
              <p className="tactic-description">{translations[language].pingEcho.description}</p>
              <Link to="/PingEcho">
                <span className="learn-more">Learn More →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}