import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import JavaCCDetailsPage from "./pages/JavaCCDetailsPage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import ContactUsPageResult from "./pages/ContactUsPageResult";
import UploadPage from "./pages/UploadPage";
import ResultsPage from "./pages/ResultsPage";
import MaintainMCopiesPage from "./pages/MaintainMCopiesPage";
import IDPasswordPage from "./pages/IDPasswordPage";
import MaintainDataPage from "./pages/MaintainDataPage";
import OneTimePage from "./pages/OneTimePage";
import PingEchoPage from "./pages/PingEchoPage";
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
          <title>Tactlize</title>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/javaccdetails" element={<JavaCCDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/MaintainMCopies" element={<MaintainMCopiesPage />} />
            <Route path="/IDPassword" element={<IDPasswordPage />} />
            <Route path="/MaintainData" element={<MaintainDataPage />} />
            <Route path="/OneTime" element={<OneTimePage />} />
            <Route path="/PingEcho" element={<PingEchoPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/ContactUsResult" element={<ContactUsPageResult />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/ResultsPage" element={<ResultsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
