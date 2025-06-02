import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ContactUs.css';
import Delete from '../styles/icons/delete1.svg';
import close from '../styles/icons/close.svg';

// Define translations outside the component to avoid re-creation
const translationsData = {
  en: {
    header: 'Reach Out to the <span class="colored-word">JavaCC</span> Parser Team',
    intro: {
      title: 'Who are we?',
      description: 'We\'re a team of ESI students passionate about software architecture and grammar parsing. If you have questions about our tactic detection system, suggestions to enhance our parser, or you\'d just like to discuss JavaCC – we\'d love to hear from you!'
    },
    instructions: {
      title: 'Form Instructions',
      list: [
        'Fill in your full name and a valid email address so we can get back to you.',
        'Let us know what\'s on your mind. Whether it\'s a question, suggestion, or feedback – we\'re here to listen.',
        'Click the "Submit" button to submit the form, and we\'ll receive your message directly.',
        'One of our team members will respond to you as soon as possible – usually within a day!',
        'By clicking "Clear All", all fields will be reset and emptied.'
      ]
    },
    form: {
      title: 'Please Fill Out the Form Below',
      placeholders: {
        firstName: 'First Name*',
        lastName: 'Last Name*',
        businessEmail: 'Business Email*',
        phoneNumber: 'Phone Number',
        job: 'Job',
        companyName: 'Company Name',
        message: 'How can we help you?'
      },
      errors: {
        firstName: 'First Name is required',
        lastName: 'Last Name is required',
        businessEmail: 'Business Email is required'
      },
      footer: 'Thank you for reaching out! Upon submitting, we will promptly review your message and get back to you as soon as possible. We appreciate your trust and look forward to assisting you.',
      buttons: {
        submit: 'Submit',
        clear: 'Clear All'
      }
    },
    modal: {
      warning: 'Warning!',
      message: 'Are you sure you want to clear all fields?',
      yes: 'Yes',
      no: 'No'
    }
  },
  fr: {
    header: 'Contactez l\'équipe d\'analyseur <span class="colored-word">JavaCC</span>',
    intro: {
      title: 'Qui sommes-nous ?',
      description: 'Nous sommes une équipe d\'étudiants de l\'ESI passionnés par l\'architecture logicielle et l\'analyse grammaticale. Si vous avez des questions sur notre système de détection de tactiques, des suggestions pour améliorer notre analyseur, ou si vous souhaitez simplement discuter de JavaCC, nous serions ravis d\'avoir de vos nouvelles !'
    },
    instructions: {
      title: 'Instructions pour le formulaire',
      list: [
        'Remplissez votre nom complet et une adresse email valide afin que nous puissions vous répondre.',
        'Dites-nous ce qui vous préoccupe. Que ce soit une question, une suggestion ou un retour d\'information – nous sommes à l\'écoute.',
        'Cliquez sur le bouton "Soumettre" pour envoyer le formulaire, et nous recevrons votre message directement.',
        'Un membre de notre équipe vous répondra dès que possible – généralement dans la journée !',
        'En cliquant sur "Tout effacer", tous les champs seront réinitialisés et vidés.'
      ]
    },
    form: {
      title: 'Veuillez remplir le formulaire ci-dessous',
      placeholders: {
        firstName: 'Prénom*',
        lastName: 'Nom*',
        businessEmail: 'Email professionnel*',
        phoneNumber: 'Numéro de téléphone',
        job: 'Profession',
        companyName: 'Nom de l\'entreprise',
        message: 'Comment pouvons-nous vous aider ?'
      },
      errors: {
        firstName: 'Le prénom est requis',
        lastName: 'Le nom est requis',
        businessEmail: 'L\'email professionnel est requis'
      },
      footer: 'Merci de nous avoir contactés ! Après soumission, nous examinerons rapidement votre message et vous répondrons dès que possible. Nous apprécions votre confiance et avons hâte de vous aider.',
      buttons: {
        submit: 'Soumettre',
        clear: 'Tout effacer'
      }
    },
    modal: {
      warning: 'Avertissement !',
      message: 'Êtes-vous sûr de vouloir effacer tous les champs ?',
      yes: 'Oui',
      no: 'Non'
    }
  }
};

const ContactUsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem('language') === 'FR/EN' ? 'fr' : 'en');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessEmail: '',
    phoneNumber: '',
    job: '',
    companyName: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    businessEmail: false
  });
  const navigate = useNavigate();

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error state for the field being edited
    if (value.trim() !== '') {
      setErrors((prev) => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const handleClear = () => {
    setFormData({
      firstName: '',
      lastName: '',
      businessEmail: '',
      phoneNumber: '',
      job: '',
      companyName: '',
      message: ''
    });
    setErrors({
      firstName: false,
      lastName: false,
      businessEmail: false
    });
  };

  const confirmClear = () => {
    setIsModalOpen(true);
  };

  const proceedClear = () => {
    handleClear();
    setIsModalOpen(false);
  };

  const cancelClear = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      firstName: formData.firstName.trim() === '',
      lastName: formData.lastName.trim() === '',
      businessEmail: formData.businessEmail.trim() === ''
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      // Simulate sending email to tactlize@gmail.com (not implemented due to sandbox restrictions)
      console.log('Form submitted to tactlize@gmail.com:', formData);
      navigate('/ContactUsResult');
    }
  };

  return (
    <>
      <div className="container">
        <section className="header-section">
          <h1 dangerouslySetInnerHTML={{ __html: translations[language].header }}></h1>
        </section>
        <section className="content-section">
          <div className="text-content">
            <div className="intro">
              <h2>{translations[language].intro.title}</h2>
              <p>{translations[language].intro.description}</p>
            </div>
            <div className="instructions">
              <h2>{translations[language].instructions.title}</h2>
              <ol>
                {translations[language].instructions.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
          <div className="image-space"></div>
        </section>
        <section className="form-section">
          <h2>{translations[language].form.title}</h2>
          <div className="form-grid">
            <input
              type="text"
              name="firstName"
              placeholder={translations[language].form.placeholders.firstName}
              value={formData.firstName}
              onChange={handleInputChange}
              style={{ border: errors.firstName ? '2px solid red' : '' }}
            />
            {errors.firstName && (
              <p style={{ color: 'red', fontSize: '12px', margin: '2px 0 0 0' }}>
                {translations[language].form.errors.firstName}
              </p>
            )}
            <input
              type="text"
              name="lastName"
              placeholder={translations[language].form.placeholders.lastName}
              value={formData.lastName}
              onChange={handleInputChange}
              style={{ border: errors.lastName ? '2px solid red' : '' }}
            />
            {errors.lastName && (
              <p style={{ color: 'red', fontSize: '12px', margin: '2px 0 0 0' }}>
                {translations[language].form.errors.lastName}
              </p>
            )}
            <input
              type="email"
              name="businessEmail"
              placeholder={translations[language].form.placeholders.businessEmail}
              value={formData.businessEmail}
              onChange={handleInputChange}
              style={{ border: errors.businessEmail ? '2px solid red' : '' }}
            />
            {errors.businessEmail && (
              <p style={{ color: 'red', fontSize: '12px', margin: '2px 0 0 0' }}>
                {translations[language].form.errors.businessEmail}
              </p>
            )}
            <input
              type="text"
              name="phoneNumber"
              placeholder={translations[language].form.placeholders.phoneNumber}
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="job"
              placeholder={translations[language].form.placeholders.job}
              value={formData.job}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="companyName"
              placeholder={translations[language].form.placeholders.companyName}
              value={formData.companyName}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              placeholder={translations[language].form.placeholders.message}
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="form-footer">
            <p>{translations[language].form.footer}</p>
          </div>
          <div className="buttons">
            <button className="btn btn-primary submit" onClick={handleSubmit}>
              {translations[language].form.buttons.submit}
            </button>
            <button className="btn btn-secondary clear" onClick={confirmClear}>
              {translations[language].form.buttons.clear}
            </button>
          </div>
        </section>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <span className="modal-close" onClick={cancelClear}>×</span>
            <button onClick={cancelClear}>
              <img src={close} alt="close" className='close'></img>
            </button>
            <div className="modal-icon">
              <img src={Delete} alt="delete"></img>
            </div>
            <h2 className="modal-warning">{translations[language].modal.warning}</h2>
            <p className='message'>{translations[language].modal.message}</p>
            <button className="modal-yes" onClick={proceedClear}>{translations[language].modal.yes}</button>
            <button className="modal-no" onClick={cancelClear}>{translations[language].modal.no}</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUsPage;