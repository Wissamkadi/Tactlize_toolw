import { Link } from "react-router-dom";
import React, { useState, useEffect, useMemo } from 'react';
import '../styles/PingEcho.css';
import '../styles/global.css';
import PingEcho from '../styles/icons/PingEcho.svg';
import challenge from '../styles/icons/challenge.png';

const translationsData = {
  en: {
    title: 'Ping Echo<span className="colored-word">Tactic</span>',
    tagline: 'Liveness Verified, Connectivity Ensured',
    introTitle: 'Introduction to the Tactic',
    introText: 'This tactic monitors system health by sending ping requests and expecting echo replies. If no reply is received, the system is marked as unresponsive. It’s like a heartbeat check for servers, networks, or microservices—ensuring they’re alive and reachable.',
    purposeTitle: 'Purpose & Benefits',
    purposeText: '<ul id="ul1"><li><span className="highlightB">Fast Failure Detection:</span> Identifies unresponsive nodes in seconds</li><li><span className="highlightB">Lightweight:</span> Uses minimal network resources (ICMP or custom packets)</li><li><span className="highlightB">Universal:</span> Works across servers, microservices, and network devices</li><li><span className="highlightB">Automated Recovery:</span> Integrates with failover mechanisms</li></ul>',
    howTitle: 'How It Works?',
    howText: '<span className="highlightB">Ping Message:</span> A sender component periodically sends a ping message to one or more receivers to check their availability.<br /><span className="highlightB">Echo Response:</span> If a receiver is active, it responds with an echo message to confirm it is functioning correctly.<br /><span className="highlightB">Timeout & Failure Detection:</span> If no response is received within a timeout, it detects this failure, handles the exception (e.g., logs the issue, initiates recovery), and ensures system resilience.<br /><span className="highlightB">Fault Monitoring:</span> Systems may lock the account after multiple failed attempts or',
    tradeoffsTitle: 'Trade-offs & Challenges',
    tradeoffsText: 'Network latency may cause false positives; requires careful timeout tuning. Unsecured implementations risk ping flood attacks. Frequent pings improve accuracy but increase traffic.',
    startDetecting: 'Start Detecting'
  },
  fr: {
    title: 'Tactique Ping Echo<span className="colored-word">Tactic</span>',
    tagline: 'Vérification de vitalité, Connectivité assurée',
    introTitle: 'Introduction à la tactique',
    introText: 'Cette tactique surveille l\'état de santé d\'un système en envoyant des requêtes ping et en attendant des réponses echo. Si aucune réponse n\'est reçue, le système est considéré comme inactif. C\'est comme vérifier le battement de cœur d\'un serveur, d\'un réseau ou d\'un microservice — on s\'assure qu\'il est vivant et accessible.',
    purposeTitle: 'Objectif et avantages',
    purposeText: '<ul id="ul1"><li><span className="highlightB">Détection rapide des défaillances :</span> Identifie les nœuds non réactifs en quelques secondes</li><li><span className="highlightB">Léger :</span> Utilise très peu de ressources réseau (ICMP ou paquets personnalisés)</li><li><span className="highlightB">Universel :</span> Fonctionne sur les serveurs, microservices, et équipements réseau</li><li><span className="highlightB">Récupération automatisée :</span> Peut s\'intégrer à des mécanismes de basculement automatique (failover)</li></ul>',
    howTitle: 'Comment ça fonctionne ?',
    howText: '<span className="highlightB">Message Ping :</span> Un composant émetteur envoie régulièrement un message ping à un ou plusieurs récepteurs pour vérifier leur disponibilité.<br /><span className="highlightB">Réponse Echo :</span> Si un récepteur est actif, il répond avec un message echo pour confirmer qu\'il fonctionne correctement.<br /><span className="highlightB">Délai & Détection d\'échec :</span> S\'il n\'y a pas de réponse dans un délai donné, il détecte cet échec, gère l\'exception (ex. : enregistre l\'incident, initie une récupération), et assure la résilience du système.<br /><span className="highlightB">Surveillance des pannes :</span> Les systèmes peuvent verrouiller le compte après plusieurs tentatives échouées ou',
    tradeoffsTitle: 'Compromis et défis',
    tradeoffsText: 'La latence réseau peut entraîner des faux positifs ; nécessite un réglage précis du délai. Les implémentations non sécurisées risquent des attaques par ping flood. Des ping trop fréquents améliorent la précision mais augmentent le trafic réseau.',
    startDetecting: 'Commencer la détection'
  }
};

export default function PingEchoPage() {
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
    <div className='PingEcho-page'>
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
              <p dangerouslySetInnerHTML={{ __html: translations[language].howText }}></p>
            </div>
            <div className="image-column">
              <img src={PingEcho} alt='PingEcho-tactic' id="pingecho"/>
            </div>
          </div>
        </div>
      </section>

      <div className="card5">
        <h4>{translations[language].tradeoffsTitle}</h4>
        <p>{translations[language].tradeoffsText}</p>
      </div>
      <img src={challenge} alt='challenge' id='challenge3'></img>
      <div>
        <Link to="/upload" className="btn2 btn-primary">
          {translations[language].startDetecting}
          <span className="btn-icon">→</span>
        </Link>
      </div>
    </div>  
  )
}