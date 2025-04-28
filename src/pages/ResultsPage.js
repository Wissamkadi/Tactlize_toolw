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

  useEffect(() => {
    if (state?.file) {
      setUploadedFile(state.file);
    }
  }, [state]);

  useEffect(() => {
    if (uploadedFile) {
      setFileContent('CALLER::client,METHOD::request,CALLEE::server;\nCALLER::server,METHOD::response,CALLEE::client;');
    }
  }, [uploadedFile]);

  const handleTacticSelect = (tactic) => {
    setSelectedTactic(tactic);
  };

  const handleDetect = async () => {
    if (!uploadedFile || !selectedTactic) {
      setResult('Please select a file and a tactic.');
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
        setResult(data.parsedResult);
        setPdfDownloadUrl(data.pdfDownloadUrl);
      } else {
        setResult(Array.isArray(data) ? data.join('\n') : data);
        setPdfDownloadUrl('');
      }
    } catch (error) {
      setResult('Error connecting to the backend.');
      setPdfDownloadUrl('');
    }
  };

  const handleExport = () => {
    if (pdfDownloadUrl) {
      const link = document.createElement('a');
      link.href = `http://localhost:8080${pdfDownloadUrl}`;
      link.download = 'result.pdf';
      link.click();
      setExportSuccess(true);
    }
  };

  const handleDeleteFile = () => {
    setUploadedFile(null);
    setFileContent('Trace will appear here from the uploaded file');
    setResult('');
    setPdfDownloadUrl('');
    setExportSuccess(false);
  };

  return (
    <div className="results-container">
      <main className="results-content">
        {/* Decorative Images */}
        <div className="results-decor-large"></div>
        <div className="results-decor-small"></div>

        <div className="results-title-area">
          <h1 className="main-title">
            Detect <span className="highlighted">Architectural Tactics</span> in your trace
          </h1>
        </div>

        {uploadedFile && (
          <div className="results-file-message">
            <span className="results-success-icon"></span>
            <p>"{uploadedFile.name}" Has been uploaded successfully</p>
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
              className={`results-tactic-option ${selectedTactic === 'id_password_authentication' ? 'selected' : ''}`}
              onClick={() => handleTacticSelect('id_password_authentication')}
            >
              ID-Password authentication
            </button>
            <button
              className={`results-tactic-option ${selectedTactic === 'ping_echo' ? 'selected' : ''}`}
              onClick={() => handleTacticSelect('ping_echo')}
            >
              Ping Echo
            </button>
            <button
              className={`results-tactic-option ${selectedTactic === 'maintain_data_confidentiality' ? 'selected' : ''}`}
              onClick={() => handleTacticSelect('maintain_data_confidentiality')}
            >
              Maintain Data Confidentiality
            </button>
            <button
              className={`results-tactic-option ${selectedTactic === 'onetime_password' ? 'selected' : ''}`}
              onClick={() => handleTacticSelect('onetime_password')}
            >
              The One Time Password
            </button>
            <button
              className={`results-tactic-option ${selectedTactic === 'maintain_multiple_copies' ? 'selected' : ''}`}
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