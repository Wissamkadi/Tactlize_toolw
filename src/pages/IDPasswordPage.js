import { Link } from "react-router-dom";
import React, { useState, useEffect, useMemo } from 'react';
import '../styles/IDPassword.css';
import '../styles/global.css';
import IDPassword from '../styles/icons/IDPassword.png';
import challenge from '../styles/icons/challenge.png';

const translationsData = {
  en: {
    title: 'The ID/Password <span className="colored-word">Tactic</span>',
    tagline: 'Secure Access, Verified Identity',
    introTitle: 'Introduction to the Tactic',
    introText: 'ID/Password authentication is the most common method for verifying user identity in software systems. Users provide a unique identifier (ID) and a secret password, which the system validates before granting access. It’s a simple and effective way to control access to sensitive data and resources.<br></br>Imagine an office with a keycard entry system. Each employee has a unique keycard (ID) and a personal PIN (password) to enter the building. If the details don’t match, entry is denied.',
    purposeTitle: 'Purpose & Benefits',
    purposeText: 'Prevent unauthorized access by verifying user credentials.<br></br>Track user activity for accountability and security audits.<br></br>Provide a familiar authentication method that users understand and trust.<br></br>Is it used almost every online system—banking apps, email services, corporate networks, and e-commerce sites.',
    howTitle: 'How It Works?',
    howText: '<span className="highlight">User Input:</span> The user enters their ID and password.<span className="highlight">Verification:</span> The system checks if the credentials match the stored data.<span className="highlight">Access Decision:</span> If correct → User is granted access. If not, Access is denied.<span className="highlight">(Optional) Additional Security Measures:</span> Systems may lock the account after multiple failed attempts or require CAPTCHA verification.',
    tradeoffsTitle: 'Trade-offs & Challenges',
    tradeoffsText: 'Simple to implement but vulnerable to phishing/brute-force attacks. Requires password policies (complexity, expiration) which can frustrate users. Multi-factor authentication improves security but adds steps.',
    startDetecting: 'Start Detecting'
  },
  fr: {
    title: 'La tactique ID/Password <span className="colored-word">Tactic</span>',
    tagline: 'Accès sécurisé, Identité vérifiée',
    introTitle: 'Introduction à la tactique',
    introText: 'L\'authentification ID/Password est la méthode la plus répandue pour vérifier l\'identité des utilisateurs dans les systèmes informatiques. L\'utilisateur fournit un identifiant unique (ID) et un mot de passe secret, que le système valide avant d\'accorder l\'accès. C\'est une manière simple mais efficace de contrôler l\'accès aux données et ressources sensibles.<br></br>Imaginez un bureau avec un système d\'entrée par badge. Chaque employé possède un badge unique (ID) et un code PIN personnel (mot de passe) pour entrer dans le bâtiment. Si les détails ne correspondent pas, l\'entrée est refusée.',
    purposeTitle: 'Objectif et avantages',
    purposeText: 'Empêcher les accès non autorisés en vérifiant les identifiants des utilisateurs.<br></br>Suivre les activités des utilisateurs pour des raisons de responsabilité et d\'audits de sécurité.<br></br>Offrir une méthode d\'authentification familière et bien comprise par les utilisateurs.<br></br>Est utilisée dans presque tous les systèmes en ligne—applications bancaires, services de messagerie, réseaux d\'entreprise, et sites e-commerce.',
    howTitle: 'Comment ça fonctionne ?',
    howText: '<span className="highlight">Saisie des identifiants :</span> L\'utilisateur entre son identifiant et son mot de passe.<span className="highlight">Vérification :</span> Le système compare les données saisies avec celles enregistrées.<span className="highlight">Décision d\'accès :</span> Si correct → L\'accès est accordé. Sinon → L\'accès est refusé.<span className="highlight">(Optionnel) Mesures de sécurité supplémentaires :</span> Les systèmes peuvent bloquer le compte après plusieurs échecs ou exiger une vérification CAPTCHA.',
    tradeoffsTitle: 'Compromis & Défis',
    tradeoffsText: 'Facile à mettre en œuvre mais vulnérable aux attaques par hameçonnage ou force brute. Nécessite des politiques de mot de passe (complexité, expiration) qui peuvent frustrer les utilisateurs. L\'authentification multifactorielle améliore la sécurité mais ajoute des étapes.',
    startDetecting: 'Commencer la détection'
  }
};

export default function IDPasswordPage() {
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
    <div className='IDPassword-page'>
      <section className="section">
        <div className="section-content">
          <h1 className="section-title" dangerouslySetInnerHTML={{ __html: translations[language].title }}></h1>
          <h4 className="section-tagline">{translations[language].tagline}</h4>
          <h2 className="section-subtitle">{translations[language].introTitle}</h2>
          <p dangerouslySetInnerHTML={{ __html: translations[language].introText }}></p>
        </div>
      </section>
      <section className="section">
        <div className="section-content">
          <h2 className="section-subtitle">{translations[language].purposeTitle}</h2>
          <p dangerouslySetInnerHTML={{ __html: translations[language].purposeText }}></p>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <h2 className="section-subtitle">{translations[language].howTitle}</h2>
          <div className="image-text-row">
            <div className="text-column">
              <p dangerouslySetInnerHTML={{ __html: translations[language].howText }}></p>
            </div>
            <div className="image-column">
              <img src={IDPassword} alt='idpassword-tactic' id='idpassword'></img>
            </div>
          </div>
        </div>
      </section>

      <div className="card2">
        <h4>{translations[language].tradeoffsTitle}</h4>
        <p>{translations[language].tradeoffsText}</p>
      </div>
      <img src={challenge} alt='challenge' id='challenge'></img>
      <div>
        <Link to="/upload" className="btn2 btn-primary">
          {translations[language].startDetecting}
          <span className="btn-icon">→</span>
        </Link>
      </div>
    </div>  
  )
}