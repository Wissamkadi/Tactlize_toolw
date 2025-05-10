import { Link } from "react-router-dom";
import React, { useState, useEffect, useMemo } from 'react';
import '../styles/OneTimePassword.css';
import '../styles/global.css';
import OneTime from '../styles/icons/OneTime.png';
import challenge from '../styles/icons/challenge.png';

const translationsData = {
  en: {
    title: 'The Onetime password<span className="colored-word">Tactic</span>',
    tagline: 'One-Time Pass, Full-Time Security',
    introTitle: 'Introduction to the Tactic',
    introText: 'The One-Time Password (OTP) Tactic enhances authentication security by generating a unique, temporary password for each login attempt. Unlike static passwords, OTPs prevent credential reuse and reduce the risk of attacks such as phishing and credential theft. They are typically delivered via SMS, email, or authentication apps, ensuring secure and time-sensitive access.',
    purposeTitle: 'Purpose & Benefits',
    purposeText: 'The OTP tactic strengthens authentication by preventing password reuse and reducing phishing risks. It enhances security, ensures time-limited access, and protects against unauthorized logins while maintaining user convenience.',
    howTitle: 'How It Works?',
    howText: 'When a user attempts to log in, the system generates a unique, time-sensitive OTP and delivers it via SMS, email, or an authentication app. The user enters the OTP, which is then verified against the system\'s records. If valid, access is granted; otherwise, the attempt is denied. Each OTP is single-use and expires after a short period. It ensures that even if a password is compromised, unauthorized access is still unlikely without the OTP. The limited validity window and single-use nature of OTPs help protect against replay attacks and other forms of intrusion.',
    tradeoffsTitle: 'Trade-offs & Challenges',
    tradeoffsText: 'Ensuring the security of one-time passwords (OTPs) requires strong encryption and secure transmission, adding computational overhead. While OTPs enhance security by preventing reuse, they can introduce usability challenges, such as delivery delays and synchronization issues.',
    startDetecting: 'Start Detecting'
  },
  fr: {
    title: 'La tactique de mot de passe à usage unique<span className="colored-word">Tactic</span>',
    tagline: 'Passe unique, Sécurité permanente',
    introTitle: 'Introduction à la tactique',
    introText: 'La tactique de mot de passe à usage unique (OTP) renforce la sécurité de l\'authentification en générant un mot de passe temporaire et unique pour chaque tentative de connexion. Contrairement aux mots de passe statiques, les OTP empêchent la réutilisation des identifiants et réduisent les risques d\'attaques telles que le phishing ou le vol d\'identifiants. Ils sont généralement envoyés par SMS, email ou via une application d\'authentification, garantissant un accès sécurisé et limité dans le temps.',
    purposeTitle: 'Objectif et avantages',
    purposeText: 'La tactique OTP renforce l\'authentification en empêchant la réutilisation des mots de passe et en réduisant les risques de phishing. Elle améliore la sécurité, assure un accès limité dans le temps, et protège contre les connexions non autorisées tout en préservant la commodité pour l\'utilisateur.',
    howTitle: 'Comment ça fonctionne ?',
    howText: 'Lorsqu\'un utilisateur tente de se connecter, le système génère un OTP unique et sensible au temps, qui est envoyé par SMS, email ou via une application d\'authentification. L\'utilisateur saisit l\'OTP, qui est ensuite vérifié par rapport aux enregistrements du système. Si l\'OTP est valide, l\'accès est accordé ; sinon, la tentative est refusée. Chaque OTP est à usage unique et expire après un court délai. Cela garantit que même si un mot de passe est compromis, un accès non autorisé reste improbable sans l\'OTP. La fenêtre de validité limitée et la nature à usage unique des OTP protègent contre les attaques par rejeu et autres formes d\'intrusion.',
    tradeoffsTitle: 'Compromis et défis',
    tradeoffsText: 'Garantir la sécurité des mots de passe à usage unique (OTP) nécessite un chiffrement robuste et une transmission sécurisée, ce qui ajoute une surcharge computationnelle. Bien que les OTP améliorent la sécurité en empêchant la réutilisation, ils peuvent introduire des défis d\'utilisabilité, tels que des retards de livraison et des problèmes de synchronisation.',
    startDetecting: 'Commencer la détection'
  }
};

export default function OneTimePage() {
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
    <div className='OneTime-page'>
      <section className="section">
        <div className="section-content">
          <h1 className="section-title" dangerouslySetInnerHTML={{ __html: translations[language].title }}></h1>
          <h4 className="section-tagline">{translations[language].tagline}</h4>
          <h2 className="section-subtitle">{translations[language].introTitle}</h2>
          <p>{translations[language].introText}</p>
        </div>
      </section>
      <section className="section">
        <div className="section-content">
          <h2 className="section-subtitle">{translations[language].purposeTitle}</h2>
          <p>{translations[language].purposeText}</p>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <h2 className="section-subtitle">{translations[language].howTitle}</h2>
          <div className="image-text-row">
            <div className="text-column">
              <p>{translations[language].howText}</p>
            </div>
            <div className="image-column">
              <img src={OneTime} alt="OneTimePassword-tactic" />
            </div>
          </div>
        </div>
      </section>

      <div className="card4">
        <h4>{translations[language].tradeoffsTitle}</h4>
        <p>{translations[language].tradeoffsText}</p>
      </div>
      <img src={challenge} alt='challenge' id='challenge2'></img>
      <div>
        <Link to="/upload" className="btn2 btn-primary">
          {translations[language].startDetecting}
          <span className="btn-icon">→</span>
        </Link>
      </div>
    </div>  
  )
}