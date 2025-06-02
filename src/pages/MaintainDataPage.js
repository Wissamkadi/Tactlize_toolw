import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useMemo } from 'react';
import '../styles/MaintainData.css';
import '../styles/global.css';
import MaintainData from '../styles/icons/MaintainData.png';
import challenge from '../styles/icons/challenge.png';

const translationsData = {
  en: {
    title: 'Maintain Data Confidentiality<span class="colored-word">Tactic</span>',
    tagline: 'Encrypted & Safe, Every Step',
    introTitle: 'Introduction to the Tactic',
    introText: 'This tactic ensures that sensitive data is kept private and accessible only to authorized users. It involves techniques such as encryption, access control, and secure transmission to prevent data leaks or unauthorized access. It is used in a digital world, protecting confidential information (e.g., user credentials, financial records, medical data) is crucial. It is like Like sealing a letter in an envelope—only the recipient can open and read it.',
    purposeTitle: 'Purpose & Benefits',
    purposeText: 'Prevents data breaches by making unauthorized access difficult.<br></br>Ensures privacy compliance with laws like GDPR and HIPAA.<br></br>Protects user trust by securing sensitive information.<br></br>Is it used in Banking apps, healthcare systems, government databases, and cloud storage services.',
    howTitle: 'How It Works?',
    howText: '<span class="highlight">Encryption:</span> Data is converted into an unreadable format (ciphertext) before storage or transmission.<span className="highlight"> Access Control:</span> Only users with the correct permissions or decryption keys can access the data.<span className="highlight"> Secure Transmission:</span> Data is sent over encrypted connections (e.g., HTTPS, TLS) to prevent interception.',
    tradeoffsTitle: 'Trade-offs & Challenges',
    tradeoffsText: 'Strong encryption ensures safety but impacts performance. Key management is complex—losing keys means losing data. Access controls must balance security with usability.',
    startDetecting: 'Start Detecting'
  },
  fr: {
    title: 'La Tactique de Maintain Data Confidentiality<span class="colored-word">Tactic</span>',
    tagline: 'Chiffré & Sécurisé, Chaque Étape',
    introTitle: 'Introduction à la tactique',
    introText: 'Cette tactique garantit que les données sensibles restent privées et accessibles uniquement aux utilisateurs autorisés. Elle repose sur des techniques comme le chiffrement, le contrôle d\'accès et la transmission sécurisée afin d\'éviter toute fuite ou accès non autorisé. À l\'ère du numérique, protéger les informations confidentielles (identifiants utilisateurs, données médicales, informations financières) est crucial. C\'est un peu comme sceller une lettre dans une enveloppe—seul le destinataire peut l\'ouvrir et la lire.',
    purposeTitle: 'Objectif et avantages',
    purposeText: 'Empêcher les violations de données en rendant l\'accès non autorisé extrêmement difficile.<br></br>Assurer la conformité aux lois sur la vie privée, comme le RGPD et la HIPAA.<br></br>Protéger la confiance des utilisateurs en sécurisant leurs informations.<br></br>Est utilisée dans les applications bancaires, les systèmes de santé, les bases de données gouvernementales, et les services de stockage cloud.',
    howTitle: 'Comment ça fonctionne ?',
    howText: '<span class="highlight">Chiffrement :</span> Les données sont converties en un format illisible (texte chiffré) avant leur stockage ou leur transmission.<span className="highlight"> Contrôle d\'accès :</span> Seules les personnes disposant des droits ou des clés de déchiffrement peuvent accéder aux données.<span className="highlight"> Transmission sécurisée :</span> Les données sont envoyées via des connexions chiffrées (ex. : HTTPS, TLS) pour éviter toute interception.',
    tradeoffsTitle: 'Compromis et défis',
    tradeoffsText: 'Un chiffrement fort garantit une sécurité optimale, mais peut réduire les performances du système. La gestion des clés est complexe—perdre les clés signifie perdre les données. Les contrôles d\'accès doivent trouver un bon équilibre entre sécurité et facilité d\'utilisation.',
    startDetecting: 'Commencer la détection'
  }
};

export default function MaintainDataPagePage() {
  const navigate = useNavigate();
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

  const handleStartDetecting = () => {
    navigate('/upload', {
      state: { tactic: 'MaintainData' } // This will be passed to the upload page
    });
  };

  return (
    <div className='MaintainData-page'>
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
              <img src={MaintainData} alt='maintaindata-tactic' id='MaintainData'></img>
            </div>
          </div>
        </div>
      </section>

      <div className="card3">
        <h4>{translations[language].tradeoffsTitle}</h4>
        <p>{translations[language].tradeoffsText}</p>
      </div>

      <img src={challenge} alt='challenge' id='challenge1' />

      <div>
        <button onClick={handleStartDetecting} className="btn2 btn-primary">
          {translations[language].startDetecting}
          <span className="btn-icon">→</span>
        </button>
      </div>
    </div>
  );
}
