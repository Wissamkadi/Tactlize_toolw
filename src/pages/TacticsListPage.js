import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/TacticList.css';

export default function TacticsListPage() {
  return (
    <div className="tactics-list-page">
      <Navbar />
      <section className="section">
        <div className="section-content">
          <h2 className="section-subtitle">Architectural Tactics</h2>
          <h1 className="section-title">Explore Our Tactics</h1>
          <p>
            Select a tactic below to learn more and upload your system traces for analysis.
          </p>
          <div className="tactics-grid">
            <Link to="/tactics/tactic1" className="tactic-card">
              <h3>Tactic 1</h3>
              <p>Learn about  tactic1 and analyze its implementation.</p>
            </Link>
            <Link to="/tactics/tactic2" className="tactic-card">
              <h3>ID/Password Tactic</h3>
              <p>Explore Tactic 2 and its applications in software systems.</p>
            </Link>
            <Link to="/tactics/tactic3" className="tactic-card">
              <h3>Tactic 3</h3>
              <p>Discover how Tactic 3 enhances system architecture.</p>
            </Link>
            <Link to="/tactics/tactic4" className="tactic-card">
              <h3>Tactic 4</h3>
              <p>Analyze Tactic 4 to optimize your software design.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}