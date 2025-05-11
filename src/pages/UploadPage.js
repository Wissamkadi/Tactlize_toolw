import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Upload.css';

// Define translations outside the component to avoid re-creation
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
        description: 'Each line must follow this structure: CALLER::caller,METHOD::mthd,CALLEE::callee;'
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
        description: 'Chaque ligne doit suivre cette structure : CALLER::caller,METHOD::mthd,CALLEE::callee;'
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

  const handleLocalUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setTimeout(() => {
        navigate('/ResultsPage', { state: { file } });
      }, 1000);
    }
  };

  return (
    <div className="display-page">
      <main className="main-content">
        {/* Title Section */}
        <div className="title-section">
          <h1 className="main-title" dangerouslySetInnerHTML={{ __html: translations[language].title }}></h1>
        </div>

        {/* Upload Section */}
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

        {/* Guideline Section */}
        <div className="guideline-section">
          <div className="upload-info">
            <div className="info-item">
              <span className="info-icon icon--accepted-file"></span>
              <p>
                <span className="info-title">{translations[language].guideline.acceptedFileTypes.title}</span>
                <br />
                {translations[language].guideline.acceptedFileTypes.description}
              </p>
            </div>
            <div className="info-item">
              <span className="info-icon icon--required-format"></span>
              <p>
                <span className="info-title">{translations[language].guideline.requiredFormat.title}</span>
                <br />
                {translations[language].guideline.requiredFormat.description}
              </p>
            </div>
            <div className="info-item">
              <span className="info-icon icon--file-preparation"></span>
              <p>
                <span className="info-title">{translations[language].guideline.filePreparation.title}</span>
                <br />
                {translations[language].guideline.filePreparation.description}
              </p>
            </div>
            <div className="info-item">
              <span className="info-icon icon--document-control"></span>
              <p>
                <span className="info-title">{translations[language].guideline.documentControl.title}</span>
                <br />
                {translations[language].guideline.documentControl.description}
              </p>
            </div>
            <div className="info-item">
              <span className="info-icon icon--automatic-deletion"></span>
              <p>
                <span className="info-title">{translations[language].guideline.automaticDeletion.title}</span>
                <br />
                {translations[language].guideline.automaticDeletion.description}
              </p>
            </div>
            <div className="info-item">
              <span className="info-icon icon--privacy-assurance"></span>
              <p>
                <span className="info-title">{translations[language].guideline.privacyAssurance.title}</span>
                <br />
                {translations[language].guideline.privacyAssurance.description}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}