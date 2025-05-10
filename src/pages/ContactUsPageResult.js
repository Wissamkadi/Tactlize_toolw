import React, { useState, useEffect, useMemo } from 'react';
import { Link } from "react-router-dom";
import '../styles/ContactUsResult.css';
import '../styles/global.css';
import ContactUsResult from '../styles/icons/ContactUsResult.svg';

const translationsData = {
  en: {
    header: 'Reach Out to the <span>JavaCC Parser Team</span>',
    message: 'Thank you for contacting us! Your message has been successfully sent. We’ll get back to you as soon as possible.',
    button: 'Send another message'
  },
  fr: {
    header: 'Contactez l\'équipe du <span>JavaCC Parser</span>',
    message: 'Merci de nous avoir contactés ! Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.',
    button: 'Envoyer un autre message'
  }
};

export default function ContactUsResultPage() {
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
    <div className="contact-result-container">
      <div className="contact-result-content">
        <div className="contact-result-text">
          <h1 dangerouslySetInnerHTML={{ __html: translations[language].header }}></h1>
          <p>{translations[language].message}</p>
          <Link to="/contact" className="btn4">
            {translations[language].button}
          </Link>
        </div>
        <div className="contact-result-image">
          <img src={ContactUsResult} alt="Contact Us Result" />
        </div>
      </div>
    </div>
  );
}