import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Upload.css';

export default function UploadPage() {
  const navigate = useNavigate();

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
          <h1 className="main-title">
            Detect <span className="highlighted">Architectural Tactics</span> in tour trace
          </h1>
        </div>

        {/* Upload Section */}
        <div className="upload-section">
          <div className="upload-box">
            <div className="upload-icon"></div>
            <p className="upload-text">Drag & upload your trace here</p>
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
              Upload from here
            </button>
          </div>
        </div>

        {/* Guideline Grid Section */}
        <div className="guideline-section">
          <div className="upload-info">
            <div className="info-item">
              <span className="info-icon icon--accepted-file"></span>
              <p>
                <span className="info-title">Accepted File Types</span>
                <br />
                You can upload your execution trace as a .txt, .doc, .docx, or .pdf file only.
              </p>
            </div>
            <div className="info-item">
              <span className="info-icon icon--required-format"></span>
              <p>
                <span className="info-title">Required Format</span>
                <br />
                Each line must follow this structure: CALLER::caller,METHOD::mthd,CALLEE::callee;
              </p>
            </div>
            <div className="info-item">
              <span className="info-icon icon--file-preparation"></span>
              <p>
                <span className="info-title">File Preparation Guidelines</span>
                <br />
                Submit readable, properly formatted files. Avoid corrupted or password-protected files.
              </p>
            </div>
            <div className="info-item">
              <span className="info-icon icon--document-control"></span>
              <p>
                <span className="info-title">Document Control</span>
                <br />
                You can modify, replace, or delete your file anytime before parsing.
              </p>
            </div>
            <div className="info-item">
              <span className="info-icon icon--automatic-deletion"></span>
              <p>
                <span className="info-title">Automatic Deletion</span>
                <br />
                All uploaded files are automatically deleted after they are processed—nothing is stored.
              </p>
            </div>
            <div className="info-item">
              <span className="info-icon icon--privacy-assurance"></span>
              <p>
                <span className="info-title">Privacy Assurance</span>
                <br />
                Uploaded documents are not publicly shared, listed, or stored. We prioritize your privacy.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}