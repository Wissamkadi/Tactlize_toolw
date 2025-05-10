import React, { useState, useEffect, useMemo } from 'react';
import '../styles/About.css';
import aboutImage from '../styles/icons/imabout.svg';
import stSecurities from '../styles/icons/stSecurities.svg';
import stReliability from '../styles/icons/stReliability.svg';
import stPerformance from '../styles/icons/stPerformance.svg';
import stAvailable from '../styles/icons/stAvailable.svg';
import powerImage from '../styles/icons/stPower.svg';

// Define translations outside the component to avoid re-creation
const translationsData = {
  en: {
    intro: {
      subtitle: 'About Us',
      title: 'Architectural Tactic Detector',
      tagline: 'Detect. Analyze. Optimize.',
      description: 'Welcome to Architectural Tactic Detector, a platform designed to analyze and detect architectural tactics in software systems. In modern software architectures, design decisions greatly impact performance, security, and maintainability. Our goal is to provide an automated way to identify key tactics used in system design to improve understanding, validation, and optimization of software architectures.'
    },
    whatIsTactic: {
      subtitle: 'What is an Architectural Tactic?',
      title: 'Architectural Tactic',
      description1: 'Architectural tactics are design strategies used to address system quality attributes such as :',
      icons: {
        security: 'Security',
        reliability: 'Reliability',
        performance: 'Performance',
        availability: 'Availability'
      },
      description2: 'By detecting these tactics in software architectures, developers and architects can evaluate design choices, ensure consistency, and enhance system robustness.'
    },
    howItWorks: {
      subtitle: 'How Our Tool Works?',
      title: 'Intelligent System Trace Analyzer',
      description: 'Our tool automatically analyzes system traces to detect occurrences of architectural tactics. It:',
      list: [
        'Parses execution traces to identify tactic patterns.',
        'Maps detected behaviors to known architectural tactics.',
        'Provides insights into how tactics are implemented in the system.'
      ]
    },
    whyItMatters: {
      subtitle: 'Why It Matters?',
      title: 'The Power of Architectural Tactic Detection',
      description: 'Understanding and detecting architectural tactics is crucial for:',
      list: [
        'Software maintainability – Ensuring that systems are designed following best practices.',
        'Security assessment – Verifying that authentication mechanisms are correctly implemented.',
        'Performance optimization – Identifying and improving response times and data handling.',
        'System evaluation – Helping architects and developers assess the design quality of software.'
      ]
    }
  },
  fr: {
    intro: {
      subtitle: 'À propos de nous',
      title: 'Détecteur de tactiques architecturales',
      tagline: 'Détecter. Analyser. Optimiser.',
      description: 'Bienvenue sur le Détecteur de tactiques architecturales, une plateforme conçue pour analyser et détecter les tactiques architecturales dans les systèmes logiciels. Dans les architectures logicielles modernes, les décisions de conception ont un impact majeur sur les performances, la sécurité et la maintenabilité. Notre objectif est de fournir un moyen automatisé d\'identifier les tactiques clés utilisées dans la conception des systèmes pour améliorer la compréhension, la validation et l\'optimisation des architectures logicielles.'
    },
    whatIsTactic: {
      subtitle: 'Qu\'est-ce qu\'une tactique architecturale ?',
      title: 'Tactique architecturale',
      description1: 'Les tactiques architecturales sont des stratégies de conception utilisées pour répondre aux attributs de qualité du système tels que :',
      icons: {
        security: 'Sécurité',
        reliability: 'Fiabilité',
        performance: 'Performance',
        availability: 'Disponibilité'
      },
      description2: 'En détectant ces tactiques dans les architectures logicielles, les développeurs et architectes peuvent évaluer les choix de conception, garantir la cohérence et améliorer la robustesse du système.'
    },
    howItWorks: {
      subtitle: 'Comment fonctionne notre outil ?',
      title: 'Analyseur intelligent de traces système',
      description: 'Notre outil analyse automatiquement les traces système pour détecter les occurrences de tactiques architecturales. Il :',
      list: [
        'Analyse les traces d\'exécution pour identifier les motifs de tactiques.',
        'Mappe les comportements détectés aux tactiques architecturales connues.',
        'Fournit des informations sur la manière dont les tactiques sont implémentées dans le système.'
      ]
    },
    whyItMatters: {
      subtitle: 'Pourquoi est-ce important ?',
      title: 'La puissance de la détection des tactiques architecturales',
      description: 'Comprendre et détecter les tactiques architecturales est crucial pour :',
      list: [
        'Maintenabilité logicielle – S\'assurer que les systèmes sont conçus selon les meilleures pratiques.',
        'Évaluation de la sécurité – Vérifier que les mécanismes d\'authentification sont correctement implémentés.',
        'Optimisation des performances – Identifier et améliorer les temps de réponse et la gestion des données.',
        'Évaluation du système – Aider les architectes et développeurs à évaluer la qualité de la conception logicielle.'
      ]
    }
  }
};

export default function AboutPage() {
  const [language, setLanguage] = useState(localStorage.getItem('language') === 'FR/EN' ? 'fr' : 'en');

  // Poll localStorage for language changes
  useEffect(() => {
    const checkLanguage = () => {
      const storedLanguage = localStorage.getItem('language');
      const newLanguage = storedLanguage === 'FR/EN' ? 'fr' : 'en';
      if (newLanguage !== language) {
        setLanguage(newLanguage);
      }
    };

    const interval = setInterval(checkLanguage, 100); // Check every 100ms
    return () => clearInterval(interval); // Cleanup on unmount
  }, [language]);

  // Memoize translations to prevent re-creation
  const translations = useMemo(() => translationsData, []);

  return (
    <div className="about-page">
      <section className="section intro-section">
        <div className="section-content">
          <h2 className="section-subtitle">{translations[language].intro.subtitle}</h2>
          <h1 className="section-title">{translations[language].intro.title}</h1>
          <h3 className="section-tagline">{translations[language].intro.tagline}</h3>
          <p>{translations[language].intro.description}</p>
        </div>
        <div className="section-image">
          <img
            src={aboutImage}
            alt="Illustration of software tactic detection"
            style={{ maxWidth: "100%", height: "auto", left: "5px" }}
          />         
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <h2 className="section-subtitle">{translations[language].whatIsTactic.subtitle}</h2>
          <h1 className="section-title">{translations[language].whatIsTactic.title}</h1>
          <p>{translations[language].whatIsTactic.description1}</p>
          <div className="icon-row">
            <div className="icon-item">
              <img src={stSecurities} alt="Security Icon" style={{ width: '100px', height: '100px', objectFit: 'contain' }} className="icon" />
              <span className="section-tagline2">{translations[language].whatIsTactic.icons.security}</span>
            </div>
            <div className="icon-item">
              <img src={stReliability} alt="Reliability Icon" style={{ width: '100px', height: '100px', objectFit: 'contain' }} className="icon" />
              <span className="section-tagline2">{translations[language].whatIsTactic.icons.reliability}</span>
            </div>
            <div className="icon-item">
              <img src={stPerformance} alt="Performance Icon" style={{ width: '100px', height: '100px', objectFit: 'contain' }} className="icon" />
              <span className="section-tagline2">{translations[language].whatIsTactic.icons.performance}</span>
            </div>
            <div className="icon-item">
              <img src={stAvailable} alt="Availability Icon" style={{ width: '100px', height: '100px', objectFit: 'contain' }} className="icon" />
              <span className="section-tagline2">{translations[language].whatIsTactic.icons.availability}</span>
            </div>
          </div>
          <p>{translations[language].whatIsTactic.description2}</p>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <h2 className="section-subtitle">{translations[language].howItWorks.subtitle}</h2>
          <h1 className="section-title">{translations[language].howItWorks.title}</h1>
          <p>{translations[language].howItWorks.description}</p>
          <ul className="plain-list">
            {translations[language].howItWorks.list.map((item, index) => (
              <li key={index}>
                <span className="highlight2">{item.split('–')[0]}</span>{item.includes('–') ? `–${item.split('–')[1]}` : ''}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section why-it-matters-section">
        <div className="section-content">
          <h2 className="section-subtitle">{translations[language].whyItMatters.subtitle}</h2>
          <h1 className="section-title">{translations[language].whyItMatters.title}</h1>
          <p>{translations[language].whyItMatters.description}</p>
          <ul className="plain-list">
            {translations[language].whyItMatters.list.map((item, index) => (
              <li key={index}>
                <span className="highlight">{item.split('–')[0]}</span> – {item.split('–')[1]}
              </li>
            ))}
          </ul>
        </div>
        <div className="section-image">
          <img
            src={powerImage}
            alt="Power Icon"
            style={{ width: '200px', height: '200px', objectFit: 'contain' }}
          />
        </div>
      </section>
    </div>
  );
}