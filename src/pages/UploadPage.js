import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Upload.css';
import Frame from '../styles/icons/Frame.svg';

const translationsData = {
  en: {
    title: 'Detect <span class="highlighted">Architectural Tactics</span> in your trace',
    uploadText: 'Drag & upload your trace here',
    uploadButton: 'Upload from here',
    guideline: {
      acceptedFileTypes: {
        title: 'Accepted File Types',
        description: 'You can upload your execution trace as a .txt, .doc, .docx, or .pdf file only.'
      },
      requiredFormat: {
        title: 'Required Format',
        description: 'Each line must follow this structure: CALLER:caller,METHOD:mthd,CALLEE:callee;'
      },
      filePreparation: {
        title: 'File Preparation Guidelines',
        description: 'Submit readable, properly formatted files. Avoid corrupted or password-protected files.'
      },
      documentControl: {
        title: 'Document Control',
        description: 'You can modify, replace, or delete your file anytime before parsing.'
      },
      automaticDeletion: {
        title: 'Automatic Deletion',
        description: 'All uploaded files are automatically deleted after they are processed—nothing is stored.'
      },
      privacyAssurance: {
        title: 'Privacy Assurance',
        description: 'Uploaded documents are not publicly shared, listed, or stored. We prioritize your privacy.'
      }
    }
  },
  fr: {
    title: 'Détecter les <span class="highlighted">tactiques architecturales</span> dans votre trace',
    uploadText: 'Glisser et télécharger votre trace ici',
    uploadButton: 'Télécharger depuis ici',
    guideline: {
      acceptedFileTypes: {
        title: 'Types de fichiers acceptés',
        description: 'Vous pouvez télécharger votre trace d\'exécution uniquement sous forme de fichier .txt, .doc, .docx ou .pdf.'
      },
      requiredFormat: {
        title: 'Format requis',
        description: 'Chaque ligne doit suivre cette structure : CALLER:caller,METHOD:mthd,CALLEE:callee;'
      },
      filePreparation: {
        title: 'Directives de préparation des fichiers',
        description: 'Soumettez des fichiers lisibles et correctement formatés. Évitez les fichiers corrompus ou protégés par mot de passe.'
      },
      documentControl: {
        title: 'Contrôle des documents',
        description: 'Vous pouvez modifier, remplacer ou supprimer votre fichier à tout moment avant l\'analyse.'
      },
      automaticDeletion: {
        title: 'Suppression automatique',
        description: 'Tous les fichiers téléchargés sont automatiquement supprimés après leur traitement — rien n\'est stocké.'
      },
      privacyAssurance: {
        title: 'Assurance de confidentialité',
        description: 'Les documents téléchargés ne sont pas partagés publiquement, répertoriés ou stockés. Nous priorisons votre confidentialité.'
      }
    }
  }
};

export default function UploadPage() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState(localStorage.getItem('language') === 'FR/EN' ? 'fr' : 'en');
  const [showModal, setShowModal] = useState(false);
  const [invalidLines, setInvalidLines] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const storedLang = localStorage.getItem('language');
      const newLang = storedLang === 'FR/EN' ? 'fr' : 'en';
      if (newLang !== language) setLanguage(newLang);
    }, 100);
    return () => clearInterval(interval);
  }, [language]);

  const translations = useMemo(() => translationsData, []);

  const handleLocalUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      const lines = content.split(/\r?\n/);
      const regex = /^CALLER:[^,]+,METHOD:[^,]+,CALLEE:[^;]+;$/;

      const invalid = lines
        .map((line, index) => ({ line, index }))
        .filter(({ line }) => line.trim() && !regex.test(line));

      if (invalid.length > 0) {
        const invalidLineNumbers = invalid.map(({ index }) => index + 1);
        setInvalidLines(invalidLineNumbers);
        setShowModal(true);
      } else {
        navigate('/ResultsPage', { state: { file } });
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="display-page">
      <main className="main-content">
        <div className="title-section">
          <h1 className="main-title" dangerouslySetInnerHTML={{ __html: translations[language].title }}></h1>
        </div>

        <div className="upload-section">
          <div className="upload-box">
            <div className="upload-icon"></div>
            <p className="upload-text">{translations[language].uploadText}</p>
            <input
              type="file"
              id="localUpload"
              style={{ display: 'none' }}
              accept=".pdf,.txt"
              onChange={handleLocalUpload}
            />
            <button
              className="upload-btn"
              onClick={() => document.getElementById('localUpload').click()}
            >
              {translations[language].uploadButton}
            </button>
          </div>
        </div>

        <div className="guideline-section">
          <div className="upload-info">
            {Object.values(translations[language].guideline).map((item, index) => (
              <div className="info-item" key={index}>
                <span className={`info-icon icon--${Object.keys(translations[language].guideline)[index].toLowerCase()}`}></span>
                <p>
                  <span className="info-title">{item.title}</span><br />
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <img src={Frame} alt="error" />
                <h2>Error!</h2>
                <p>
                  Unable to upload the file.<br />
                  Format error at line(s):<br />
                  </p>
                  <ul className="scrollable">
                  <p>
                  {invalidLines.join(', ')}
                </p>
              </ul>
              <button className="try-again-btn" onClick={() => setShowModal(false)}>Try Again</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
