import { Link } from "react-router-dom";
import React, { useState, useEffect, useMemo } from 'react';
import '../styles/MaintainMCopies.css';
import '../styles/global.css';
import MaintainMCopies from '../styles/icons/MaintainMCopies.svg';
import challenge from '../styles/icons/challenge.png';

const translationsData = {
  en: {
    title: 'Maintain Multiple Copies<span className="colored-word">Tactic</span>',
    tagline: 'Redundancy for Reliability',
    introTitle: 'Introduction to the Tactic',
    introText: 'Caching is a technique used to improve system performance by storing frequently accessed data temporarily. However, improper caching mechanisms can expose sensitive data to unauthorized users. Ensuring data confidentiality in caching is crucial for maintaining security and privacy.',
    purposeTitle: 'Purpose & Benefits',
    purposeText: 'Improved Security: Prevents unauthorized access to cached data.<br></br>Better Performance: Enables fast data retrieval while maintaining confidentiality.<br></br>Reduced Cyber Risks: Minimizes threats like cache poisoning and data leaks.<br></br>Enhanced User Trust: Ensures privacy, leading to higher user confidence.<br></br>',
    howTitle: 'How It Works?',
    howText: 'The tactic involves clients, a cache, a cache manager, and a data repository. The cache stores frequently requested data for faster access. The cache manager first checks the cache for a request; if the data is missing, it retrieves it from the repository and stores a copy. A key challenge is maintaining consistency across copies, which can be managed using the State Resynchronization tactic.',
    tradeoffsTitle: 'Trade-offs & Challenges',
    tradeoffsText: 'Ensuring consistency across multiple copies adds complexity, increases storage requirements, and can introduce concurrency challenges. While frequent updates improve accuracy, they may impact performance, cause latency, and reduce caching efficiency.',
    startDetecting: 'Start Detecting'
  },
  fr: {
    title: 'Tactique de Maintien de Plusieurs Copies<span className="colored-word">Tactic</span>',
    tagline: 'Redondance pour la fiabilité',
    introTitle: 'Introduction à la tactique',
    introText: 'La mise en cache est une technique utilisée pour améliorer les performances d’un système en stockant temporairement les données fréquemment consultées. Cependant, des mécanismes de mise en cache inappropriés peuvent exposer des données sensibles à des utilisateurs non autorisés. Garantir la confidentialité des données dans la mise en cache est essentiel pour maintenir la sécurité et la confidentialité.',
    purposeTitle: 'Objectif et avantages',
    purposeText: 'Sécurité améliorée : Empêche l\'accès non autorisé aux données mises en cache.<br></br>Meilleures performances : Permet une récupération rapide des données tout en préservant la confidentialité.<br></br>Risques cybernétiques réduits : Minimise les menaces telles que l\'empoisonnement de cache et les fuites de données.<br></br>Confiance des utilisateurs renforcée : Garantit la confidentialité, renforçant ainsi la confiance des utilisateurs.<br></br>',
    howTitle: 'Comment ça fonctionne ?',
    howText: 'La tactique implique des clients, un cache, un gestionnaire de cache, et un référentiel de données. Le cache stocke les données fréquemment demandées pour un accès plus rapide. Le gestionnaire de cache vérifie d\'abord le cache pour une requête ; si les données sont absentes, il les récupère depuis le référentiel et en stocke une copie. Un défi majeur est de maintenir la cohérence entre les copies, ce qui peut être géré en utilisant la tactique de resynchronisation d\'état.',
    tradeoffsTitle: 'Compromis et défis',
    tradeoffsText: 'Garantir la cohérence entre plusieurs copies ajoute de la complexité, augmente les besoins en stockage et peut introduire des défis de concurrence. Bien que des mises à jour fréquentes améliorent la précision, elles peuvent affecter les performances, causer de la latence, et réduire l\'efficacité de la mise en cache.',
    startDetecting: 'Commencer la détection'
  }
};

export default function MaintainMCopiesPage() {
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
    <div className='MaintainMCopies-page'>
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
          <p dangerouslySetInnerHTML={{ __html: translations[language].purposeText }}></p>
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
              <img src={MaintainMCopies} alt='maintainMCopies-tactic' id='MaintainMCopies'></img>
            </div>
          </div>
        </div>
      </section>

      <div className="card3">
        <h4>{translations[language].tradeoffsTitle}</h4>
        <p>{translations[language].tradeoffsText}</p>
      </div>
      <img src={challenge} alt='challenge' id='challenge4'></img>
      <div>
        <Link to="/upload" className="btn2 btn-primary">
          {translations[language].startDetecting}
          <span className="btn-icon">→</span>
        </Link>
      </div>
    </div>  
  )
}