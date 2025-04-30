import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Results.css';

const ResultsPage = () => {
  const { state } = useLocation();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileContent, setFileContent] = useState('Trace will appear here from the uploaded file');
  const [selectedTactic, setSelectedTactic] = useState('');
  const [result, setResult] = useState('');
  const [exportSuccess, setExportSuccess] = useState(false);
  const [pdfDownloadUrl, setPdfDownloadUrl] = useState('');

  // Initialize the uploaded file from the state
  useEffect(() => {
    if (state?.file) {
      setUploadedFile(state.file);
    }
  }, [state]);

  // Handle file content display (txt or pdf converted to txt)
  useEffect(() => {
    if (uploadedFile) {
      const fileExtension = uploadedFile.name.split('.').pop().toLowerCase();

      if (fileExtension === 'txt') {
        // For txt files, read directly
        const reader = new FileReader();
        reader.onload = (e) => {
          const text = e.target.result;
          setFileContent(text || 'No content found in the file.');
        };
        reader.onerror = () => {
          setFileContent('Error reading the file.');
        };
        reader.readAsText(uploadedFile);
      } else if (fileExtension === 'pdf') {
        // For pdf files, send to backend to convert to txt
        const formData = new FormData();
        formData.append('file', uploadedFile);

        fetch('http://localhost:8080/api/files/upload/convert-to-txt', {
          method: 'POST',
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.convertedText) {
              setFileContent(data.convertedText);
            } else {
              setFileContent('Error converting PDF to text.');
            }
          })
          .catch((error) => {
            console.error('PDF conversion error:', error);
            setFileContent(`Error converting PDF: ${error.message}`);
          });
      } else {
        setFileContent('Unsupported file type. Only .txt and .pdf are supported.');
      }
    }
  }, [uploadedFile]);

  // Handle tactic selection
  const handleTacticSelect = (tactic) => {
    setSelectedTactic(tactic);
  };

  // Handle detection by sending the file and tactic to the backend
  const handleDetect = async () => {
    if (!uploadedFile || !selectedTactic) {
      setResult('Please upload a file and select a tactic.');
      return;
    }

    const formData = new FormData();
    formData.append('file', uploadedFile);

    try {
      const response = await fetch(`http://localhost:8080/api/files/upload/${selectedTactic}`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data.parsedResult || 'No parsed result returned.');
        setPdfDownloadUrl(data.pdfDownloadUrl || '');
      } else {
        if (Array.isArray(data)) {
          setResult(data.join('\n'));
        } else {
          setResult(data || 'Unknown error occurred.');
        }
        setPdfDownloadUrl('');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setResult(`Error connecting to the backend: ${error.message}. Please ensure the backend server is running on http://localhost:8080.`);
      setPdfDownloadUrl('');
    }
  };

  // Handle export of the PDF result
  const handleExport = () => {
    if (pdfDownloadUrl) {
      const link = document.createElement('a');
      link.href = `http://localhost:8080${pdfDownloadUrl}`;
      link.download = 'result.pdf';
      link.click();
      setExportSuccess(true);
    }
  };

  // Handle file deletion
  const handleDeleteFile = () => {
    setUploadedFile(null);
    setFileContent('Trace will appear here from the uploaded file');
    setResult('');
    setSelectedTactic('');
    setPdfDownloadUrl('');
    setExportSuccess(false);
  };

  return (
    <div className="results-container">
      <main className="results-content">
        <div className="results-decor-large"></div>
        <div className="results-decor-small"></div>

        <div className="results-title-area">
          <h1 className="main-title">
            Detect <span className="highlighted">Architectural Tactics</span> in your trace
          </h1>
        </div>

        {uploadedFile && (
          <div className="results-file-message">
            <div className="results-file-content">
              <span className="results-success-icon"></span>
              <p>"{uploadedFile.name}" Has been uploaded successfully</p>
            </div>
            <button className="results-delete-btn" onClick={handleDeleteFile}>
              <span className="results-trash-icon"></span>
            </button>
          </div>
        )}

        <div className="results-content-area">
          <div className="results-trace-area">
            <h2>The Uploaded Execution Trace</h2>
            <div className="results-trace-content">
              <p>{fileContent}</p>
            </div>
          </div>

          <div className="results-output-area">
            <h2>The Result</h2>
            <div className="results-output-content">
              <p>{result || 'Results will appear here after detection'}</p>
            </div>
            <button className="results-play-btn" onClick={handleDetect}>
              <span className="results-play-icon"></span>
            </button>
          </div>
        </div>

        <div className="results-tactic-area">
          <h3>Choose another architectural tactic to detect</h3>
          <div className="results-tactic-options">
            <button
              className={`results-tactic-option id-password ${selectedTactic === 'id_password_authentication' ? 'selected' : ''}`}
              onClick={() => handleTacticSelect('id_password_authentication')}
            >
              ID-Password authentication
            </button>
            <button
              className={`results-tactic-option ping-echo ${selectedTactic === 'ping_echo' ? 'selected' : ''}`}
              onClick={() => handleTacticSelect('ping_echo')}
            >
              Ping Echo
            </button>
            <button
              className={`results-tactic-option maintain-data-confidentiality ${selectedTactic === 'maintain_data_confidentiality' ? 'selected' : ''}`}
              onClick={() => handleTacticSelect('maintain_data_confidentiality')}
            >
              Maintain Data Confidentiality
            </button>
            <button
              className={`results-tactic-option one-time-password ${selectedTactic === 'onetime_password' ? 'selected' : ''}`}
              onClick={() => handleTacticSelect('onetime_password')}
            >
              The One Time Password
            </button>
            <button
              className={`results-tactic-option maintain-multiple-copies ${selectedTactic === 'maintain_multiple_copies' ? 'selected' : ''}`}
              onClick={() => handleTacticSelect('maintain_multiple_copies')}
            >
              Maintain Multiple Copies
            </button>
          </div>
        </div>

        <div className="results-export-area">
          <button className="results-export-btn" onClick={handleExport} disabled={!pdfDownloadUrl}>
            Export detection result
          </button>
          {exportSuccess && (
            <p className="results-export-message">Result file has been exported successfully</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default ResultsPage;