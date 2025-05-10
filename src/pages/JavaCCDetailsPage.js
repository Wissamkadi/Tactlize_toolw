import React, { useState, useEffect, useMemo } from 'react';
import '../styles/JavaCCDetails.css';
import CodeBlock1 from '../styles/icons/CodeBlock1.png';
import CodeBlock2 from '../styles/icons/CodeBlock2.png';
import CodeBlock3 from '../styles/icons/CodeBlock3.png';
import Arrow from '../styles/icons/arrow.png';
import image3 from '../styles/icons/image3.svg';

// Define translations outside the component to avoid re-creation
const translationsData = {
  en: {
    title: 'Parser Generator <span className="colored-word">JavaCC</span>',
    whatIsJavaCC: {
      subtitle: 'What is JavaCC?',
      description: 'JavaCC (Java Compiler Compiler) is a tool for defining and processing the syntax of programming languages using formal grammar rules. It generates parsers that help analyze structured text based on these rules.'
    },
    roleOfJavaCC: {
      subtitle: 'Role of JavaCC',
      list: [
        'JavaCC automatically generates parsers from a high-level grammar definition.',
        'Used to define custom programming languages or domain-specific languages (DSLs).',
        'Often used in compiler front-ends for language analysis and transformation.',
        'JavaCC ensures that input follows the correct grammatical structure.',
        'Useful for database query languages (SQL-like parsers).',
        'Helps analyze code for vulnerabilities and security issues.'
      ]
    },
    whyJavaCC: {
      subtitle: 'Why JavaCC?',
      list: [
        'JavaCC generates parsers that are written entirely in Java, making them easy to integrate into Java applications.',
        'JavaCC follows recursive-descent parsing with lookahead (LL(k)), which makes it easier to understand and debug.',
        'Unlike bottom-up parsers (like YACC/Bison), it works naturally with many programming languages.',
        'Supports complex token matching (e.g., handling whitespace, comments, keywords).',
        'Supports custom lookahead (k-token or unlimited lookahead) to handle ambiguous grammars more efficiently.',
        'JJTree, a preprocessor for JavaCC, generates Abstract Syntax Trees (ASTs) automatically.'
      ]
    },
    howJavaCCWorks: {
      subtitle: 'How JavaCC Works?',
      defineGrammar: {
        title: 'Define a Grammar (.jj file)',
        description: 'Specify tokens (lexer rules) and parser rules (syntax rules).'
      },
      generateParser: {
        title: 'Generate the Parser',
        description: 'Run JavaCC on the .jj file to generate Java source files.'
      },
      parsingProcess: {
        title: 'Parsing Process',
        description1: 'JavaCC’s lexer converts input into tokens.',
        description2: 'The parser (LL(k)) applies grammar rules to validate the input.',
        subTitle: 'Handling Parsing Output',
        success: 'Success: Returns structured data.',
        failure: 'Failure: Throws a ParseException with an error message.'
      },
      compileRun: {
        title: 'Compile & Run the Parser',
        description: 'Compile generated Java files.'
      }
    }
  },
  fr: {
    title: 'Générateur d\'analyseur <span className="colored-word">JavaCC</span>',
    whatIsJavaCC: {
      subtitle: 'Qu\'est-ce que JavaCC ?',
      description: 'JavaCC (Java Compiler Compiler) est un outil permettant de définir et de traiter la syntaxe des langages de programmation à l\'aide de règles grammaticales formelles. Il génère des analyseurs qui aident à analyser du texte structuré selon ces règles.'
    },
    roleOfJavaCC: {
      subtitle: 'Rôle de JavaCC',
      list: [
        'JavaCC génère automatiquement des analyseurs à partir d\'une définition grammaticale de haut niveau.',
        'Utilisé pour définir des langages de programmation personnalisés ou des langages spécifiques à un domaine (DSL).',
        'Souvent utilisé dans les interfaces de compilateurs pour l\'analyse et la transformation de langages.',
        'JavaCC garantit que l\'entrée suit la structure grammaticale correcte.',
        'Utile pour les langages de requêtes de bases de données (analyseurs de type SQL).',
        'Aide à analyser le code pour détecter les vulnérabilités et les problèmes de sécurité.'
      ]
    },
    whyJavaCC: {
      subtitle: 'Pourquoi JavaCC ?',
      list: [
        'JavaCC génère des analyseurs entièrement écrits en Java, ce qui facilite leur intégration dans des applications Java.',
        'JavaCC utilise une analyse descendante récursive avec anticipation (LL(k)), ce qui le rend plus facile à comprendre et à déboguer.',
        'Contrairement aux analyseurs ascendants (comme YACC/Bison), il fonctionne naturellement avec de nombreux langages de programmation.',
        'Prend en charge la correspondance complexe de jetons (par exemple, gestion des espaces, commentaires, mots-clés).',
        'Prend en charge une anticipation personnalisée (k-jetons ou anticipation illimitée) pour gérer les grammaires ambiguës plus efficacement.',
        'JJTree, un préprocesseur pour JavaCC, génère automatiquement des arbres de syntaxe abstraite (AST).'
      ]
    },
    howJavaCCWorks: {
      subtitle: 'Comment fonctionne JavaCC ?',
      defineGrammar: {
        title: 'Définir une grammaire (fichier .jj)',
        description: 'Spécifier les jetons (règles du lexer) et les règles de l\'analyseur (règles syntaxiques).'
      },
      generateParser: {
        title: 'Générer l\'analyseur',
        description: 'Exécuter JavaCC sur le fichier .jj pour générer des fichiers source Java.'
      },
      parsingProcess: {
        title: 'Processus d\'analyse',
        description1: 'Le lexer de JavaCC convertit l\'entrée en jetons.',
        description2: 'L\'analyseur (LL(k)) applique les règles grammaticales pour valider l\'entrée.',
        subTitle: 'Gestion de la sortie de l\'analyse',
        success: 'Succès : Retourne des données structurées.',
        failure: 'Échec : Lève une ParseException avec un message d\'erreur.'
      },
      compileRun: {
        title: 'Compiler et exécuter l\'analyseur',
        description: 'Compiler les fichiers Java générés.'
      }
    }
  }
};

export default function JavaCCDetailsPage() {
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
    <div className='JavaCC'>
      <section className="section">
        <div className="container1">
          <h2 dangerouslySetInnerHTML={{ __html: translations[language].title }}></h2>

          <div className="section-content">
            <h3 className='sec'>{translations[language].whatIsJavaCC.subtitle}</h3>
            <div className="card1">
              <div className="box1">
                <p className="card-body">{translations[language].whatIsJavaCC.description}</p>
                <img src={image3} alt='java-plain' id='icon--javacc'></img>
              </div>
            </div>
          </div>

          <br></br>

          <div className="section-content">
            <h3>{translations[language].roleOfJavaCC.subtitle}</h3>
            <div className="card1">
              <div className="box2">
                <ul className="card-body plain-list">
                  {translations[language].roleOfJavaCC.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <br></br>

          <div className="section-content">
            <h3>{translations[language].whyJavaCC.subtitle}</h3>
            <div className="card1">
              <div className="box3">
                <ul className="card-body plain-list">
                  {translations[language].whyJavaCC.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <br></br>

          <div className="section-content">
            <h3>{translations[language].howJavaCCWorks.subtitle}</h3>
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-lg)' }}>
              <div className="card">
                <h4 className="card-header">{translations[language].howJavaCCWorks.defineGrammar.title}</h4>
                <p className="card-body plain-list">
                  <li>{translations[language].howJavaCCWorks.defineGrammar.description}</li>
                </p>
                <div className="card-diagram">
                  <img id="CodeBlock1" src={CodeBlock1} alt="Grammar example" className="codeblock" />
                </div>
              </div>

              <div className="card">
                <h4 className="card-header">{translations[language].howJavaCCWorks.generateParser.title}</h4>
                <p className="card-body plain-list">
                  <li>{translations[language].howJavaCCWorks.generateParser.description}</li>
                </p>
                <div className="card-diagram">
                  <img src={CodeBlock2} alt="Generate Parser" className="codeblock" />
                </div>
              </div>

              <div className="card">
                <h4 className="card-header">{translations[language].howJavaCCWorks.parsingProcess.title}</h4>
                <p className="card-body plain-list">
                  <li>{translations[language].howJavaCCWorks.parsingProcess.description1}</li>
                  <li>{translations[language].howJavaCCWorks.parsingProcess.description2}</li>
                </p>
                <strong className="card-header">{translations[language].howJavaCCWorks.parsingProcess.subTitle}</strong><br />
                <p className="card-body plain-list">
                  <li>{translations[language].howJavaCCWorks.parsingProcess.success}</li>
                  <li>{translations[language].howJavaCCWorks.parsingProcess.failure}</li>
                </p>
              </div>

              <div className="card">
                <h4 className="card-header">{translations[language].howJavaCCWorks.compileRun.title}</h4>
                <p className="card-body1 plain-list">
                  <li>{translations[language].howJavaCCWorks.compileRun.description}</li>
                </p>
                <div className="card-diagram">
                  <img src={CodeBlock3} alt="Compile and Run" className="codeblock" />
                </div>
              </div>
            </div>
          </div>

          <div className="arrow-section">
            <img src={Arrow} className="arrows arrow1" alt="Arrow 1" />
            <img src={Arrow} className="arrows arrow2" alt="Arrow 2" />
            <img src={Arrow} className="arrows arrow3" alt="Arrow 3" />
          </div>
        </div>
      </section>
    </div>
  );
}