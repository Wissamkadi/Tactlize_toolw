import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Results.css';
import Delete from '../styles/icons/delete1.svg';
import close from '../styles/icons/close.svg';

// Define translations outside the component to avoid re-creation
const translationsData = {
  en: {
    title: 'Detect <span class="highlighted">Architectural Tactics</span> in your trace',
    fileUploaded: '"{uploadedFile.name}" Has been uploaded successfully',
    traceTitle: 'The Uploaded Execution Trace',
    resultTitle: 'The Result',
    tacticTitle: 'Choose another architectural tactic to detect',
    tactics: {
      id_password_authentication: 'ID-Password authentication',
      ping_echo: 'Ping Echo',
      maintain_data_confidentiality: 'Maintain Data Confidentiality',
      onetime_password: 'The OneTime Password',
      maintain_multiple_copies: 'Maintain Multiple Copies'
    },
    exportButton: 'Export detection result',
    exportSuccess: 'Result file has been exported successfully',
    noResult: 'Results will appear here after detection',
    errorUpload: 'Unsupported file type. Only .txt, .pdf, and .docx are supported.',
    errorDetect: 'Please upload a file and select a tactic.',
    errorBackend: 'Error connecting to the backend: {error}. Check console for details.',
    modalWarning: 'Warning!',
    modalMessage: 'Are you sure you want to delete the uploaded file?',
    modalYes: 'YES',
    modalNo: 'NO'
  },
  fr: {
    title: 'Détecter les <span class="highlighted">tactiques architecturales</span> dans votre trace',
    fileUploaded: "Le fichier '{uploadedFile.name}' a été téléchargé avec succès",
    traceTitle: 'La trace d\'exécution téléchargée',
    resultTitle: 'Le Résultat',
    tacticTitle: 'Choisissez une autre tactique architecturale à détecter',
    tactics: {
      id_password_authentication: 'ID-Password authentication',
      ping_echo: 'Ping Echo',
      maintain_data_confidentiality: 'Maintain Data Confidentiality',
      onetime_password: 'The OneTime Password',
      maintain_multiple_copies: 'Maintain Multiple Copies'
    },
    exportButton: 'Exporter le résultat de la détection',
    exportSuccess: 'Le fichier de résultats a été exporté avec succès',
    noResult: 'La trace apparaîtra ici à partir du fichier téléchargé',
    errorUpload: 'Type de fichier non pris en charge. Seuls .txt, .pdf et .docx sont autorisés.',
    errorDetect: 'Veuillez télécharger un fichier et sélectionner une tactique.',
    errorBackend: 'Erreur de connexion au backend : {error}. Vérifiez la console pour plus de détails.',
    modalWarning: 'Avertissement !',
    modalMessage: 'Êtes-vous sûr de vouloir supprimer le fichier téléchargé ?',
    modalYes: 'OUI',
    modalNo: 'NON'
  }
};

const ResultsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileContent, setFileContent] = useState('Trace will appear here from the uploaded file');
  const [fileLines, setFileLines] = useState([]); // Store file lines for highlighting
  const [invalidLines, setInvalidLines] = useState([]); // Store invalid line numbers
  const [selectedTactic, setSelectedTactic] = useState('');
  const [result, setResult] = useState('');
  const [exportSuccess, setExportSuccess] = useState(false);
  const [pdfDownloadUrl, setPdfDownloadUrl] = useState('');
  const [language, setLanguage] = useState(localStorage.getItem('language') === 'FR/EN' ? 'fr' : 'en');

const BASE_URL = 'https://web-production-be75b.up.railway.app';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

  const confirmDeleteFile = () => {
    handleDeleteFile();
    closeModal();
    navigate('/upload'); // Redirect to upload page after deletion
  };

  // Initialize the uploaded file from the state
  useEffect(() => {
    if (state?.file) {
      setUploadedFile(state.file);
    }
  }, [state]);

  // Handle file content display (txt, pdf, or docx)
  useEffect(() => {
    if (uploadedFile) {
      const fileExtension = uploadedFile.name.split('.').pop().toLowerCase();
      if (!['txt', 'pdf', 'docx'].includes(fileExtension)) {
        setFileContent(translations[language].errorUpload);
        setFileLines([]);
        return;
      }     

      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        setFileContent(text || translations[language].noResult);
        setFileLines(text ? text.split('\n') : []); // Split into lines for highlighting
      };
      reader.onerror = () => {
        setFileContent('Error reading the file.');
        setFileLines([]);
      };
      reader.readAsText(uploadedFile);
    }
  }, [uploadedFile, language, translations]);

  // Handle tactic selection
  const handleTacticSelect = (tactic) => {
    setSelectedTactic(tactic);
  };

  // Handle detection by sending the file and tactic to the backend
  const handleDetect = async () => {
    if (!uploadedFile || !selectedTactic) {
      setResult(translations[language].errorDetect);
      return;
    }

    const formData = new FormData();
    formData.append('file', uploadedFile);

    try {
const response = await fetch(`${BASE_URL}/api/files/upload/${selectedTactic}`, {
  method: 'POST',
  body: formData,
      });

      const data = await response.json();
      console.log('Response data:', data); // Debug the response

      if (response.ok) {
        setResult(data.parsedResult || translations[language].noResult);
        setPdfDownloadUrl(data.pdfDownloadUrl || '');
        setInvalidLines([]); // Clear invalid lines on success
      } else {
        if (data.error && data.invalidLines) {
          setResult(`❌ ${translations[language].errorDetect} ${data.invalidLines.join(', ')}`);
          setInvalidLines(data.invalidLines); // Store invalid lines for highlighting
        } else {
          setResult(data.message || data || translations[language].errorBackend.replace('{error}', 'Unknown error'));
          setInvalidLines([]);
        }
        setPdfDownloadUrl('');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setResult(translations[language].errorBackend.replace('{error}', error.message));
      setPdfDownloadUrl('');
      setInvalidLines([]);
    }
  };

  // Handle export of the PDF result
  const handleExport = () => {
    if (pdfDownloadUrl) {
      const link = document.createElement('a');
      link.href = `${BASE_URL}${pdfDownloadUrl}`;
      link.download = 'result.pdf';
      link.click();
      setExportSuccess(true);
    }
  };

  // Handle file deletion
  const handleDeleteFile = () => {
    setUploadedFile(null);
    setFileContent(translations[language].noResult);
    setFileLines([]);
    setInvalidLines([]);
    setResult('');
    setSelectedTactic('');
    setPdfDownloadUrl('');
    setExportSuccess(false);
  };

  // Render file content with highlighted invalid lines
  const renderFileContent = () => {
    if (!fileLines.length) {
      return <p>{fileContent}</p>;
    }

    return fileLines.map((line, index) => {
      const lineNumber = index + 1;
      const isInvalid = invalidLines.includes(lineNumber);
      return (
        <p
          key={lineNumber}
          style={{
            margin: 0,
            backgroundColor: isInvalid ? '#ffcccc' : 'transparent',
            color: isInvalid ? '#ff0000' : '#333333',
          }}
        >
          {lineNumber}: {line}
        </p>
      );
    });
  };

  return (
    <div className="results-container">
      <main className="results-content">
        <div className="results-decor-large"></div>
        <div className="results-decor-small"></div>

        <div className="results-title-area">
          <h1 className="main-title" dangerouslySetInnerHTML={{ __html: translations[language].title }}></h1>
        </div>

        {uploadedFile && (
          <div className="results-file-message">
            <div className="results-file-content">
              <span className="results-success-icon"></span>
              <p>{translations[language].fileUploaded.replace('{uploadedFile.name}', uploadedFile.name)}</p>
            </div>
            <button className="results-delete-btn" onClick={openModal}>
              <span className="results-trash-icon"></span>
            </button>
          </div>
        )}

        <div className="results-content-area">
          <div className="results-trace-area">
            <h2>{translations[language].traceTitle}</h2>
            <div className="results-trace-content">{renderFileContent()}</div>
          </div>

          <div className="results-output-area">
            <h2>{translations[language].resultTitle}</h2>
            <div className="results-output-content">
              <p>{result || translations[language].noResult}</p>
            </div>
            <button className="results-play-btn" onClick={handleDetect}>
              <span className="results-play-icon"></span>
            </button>
          </div>
        </div>

        <div className="results-tactic-area">
          <h3>{translations[language].tacticTitle}</h3>
          <div className="results-tactic-options">
            <button
              className={`results-tactic-option id-password ${selectedTactic === 'id_password_authentication' ? 'selected' : ''}`}
              onClick={() => handleTacticSelect('id_password_authentication')}
            >
              {translations[language].tactics.id_password_authentication}
            </button>
            <button
              className={`results-tactic-option ping-echo ${selectedTactic === 'ping_echo' ? 'selected' : ''}`}
              onClick={() => handleTacticSelect('ping_echo')}
            >
              {translations[language].tactics.ping_echo}
            </button>
            <button
              className={`results-tactic-option maintain-data-confidentiality ${selectedTactic === 'maintain_data_confidentiality' ? 'selected' : ''}`}
              onClick={() => handleTacticSelect('maintain_data_confidentiality')}
            >
              {translations[language].tactics.maintain_data_confidentiality}
            </button>
            <button
              className={`results-tactic-option one-time-password ${selectedTactic === 'onetime_password' ? 'selected' : ''}`}
              onClick={() => handleTacticSelect('onetime_password')}
            >
              {translations[language].tactics.onetime_password}
            </button>
            <button
              className={`results-tactic-option maintain-multiple-copies ${selectedTactic === 'maintain_multiple_copies' ? 'selected' : ''}`}
              onClick={() => handleTacticSelect('maintain_multiple_copies')}
            >
              {translations[language].tactics.maintain_multiple_copies}
            </button>
          </div>
        </div>

        <div className="results-export-area">
          <button className="results-export-btn" onClick={handleExport} disabled={!pdfDownloadUrl}>
            {translations[language].exportButton}
          </button>
          {exportSuccess && (
            <p className="results-export-message">{translations[language].exportSuccess}</p>
          )}
        </div>
      </main>
      
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <span className="modal-close" onClick={closeModal}>×</span>
            <button onClick={closeModal}>
              <img src={close} alt="close" className='close'></img>
            </button>
            <div className="modal-icon">
              <img src={Delete} alt="delete"></img>
            </div>
            <h2 className="modal-warning">{translations[language].modalWarning}</h2>
            <p className='message'>{translations[language].modalMessage}</p>
            <div className="modal-actions">
              <button className="modal-yes" onClick={confirmDeleteFile}>{translations[language].modalYes}</button>
              <button className="modal-no" onClick={closeModal}>{translations[language].modalNo}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsPage;
