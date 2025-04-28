import React from 'react';
import '../styles/Display.css';

const UploadSection = () => {
  const handleLocalUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setTimeout(() => {
        window.location.href = '/ResultsPage';
      }, 1000);
    }
  };

  return (
    <div className="upload-section">
      <div className="upload-box">
        <div className="upload-icon"></div>
        <p className="upload-text">Drag & drop your file here or</p>
        <div>
          <input
            type="file"
            id="localUpload"
            style={{ display: 'none' }}
            accept=".pdf,.txt"
            onChange={handleLocalUpload}
          />
          <button
            className="upload-btn"
            onClick={() => {
                console.log('Button clicked');
                document.getElementById('localUpload').click();
              }}
          >
            Upload File
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadSection;