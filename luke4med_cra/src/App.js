import React, { useState } from 'react';
import './App.css';
import logo from '../public/logo.png';

function App() {
  const [search, setSearch] = useState('');

  const medications = [
    { name: 'Paracetamol', category: 'Pain Relief', desc: 'Used to reduce fever and relieve mild to moderate pain such as headaches, muscle aches, and toothaches.' },
    { name: 'Amoxicillin', category: 'Antibiotic', desc: 'An antibiotic that treats bacterial infections like pneumonia, bronchitis, and infections of the ear, nose, throat, or skin.' },
    { name: 'Loperamide', category: 'Digestive', desc: 'Used to control and reduce the frequency of diarrhea by slowing down bowel movement.' },
    { name: 'Cetirizine', category: 'Allergy', desc: 'An antihistamine that helps relieve allergy symptoms such as runny nose, sneezing, and itchy or watery eyes.' },
    { name: 'Metformin', category: 'Diabetes', desc: 'A medication for managing type 2 diabetes by lowering blood sugar levels and improving the body\'s response to insulin.' },
    { name: 'Salbutamol', category: 'Respiratory', desc: 'A bronchodilator used to relieve symptoms of asthma and chronic obstructive pulmonary disease (COPD) by relaxing airway muscles.' }
  ];

  const filtered = medications.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <div className="container header-inner">
          <div className="brand">
            <img src="/logo.png" alt="Luke4Med logo" className="logo" />
            <h1>Luke4Med</h1>
          </div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#medications">Medications</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <h2>Welcome to Luke4Med</h2>
            <p>A simple guide for people who want to understand medications and their purposes.</p>
          </div>
        </section>

        <section id="about" className="container section">
          <h3>About</h3>
          <p>Luke4Med provides short, clear, and accurate descriptions of commonly used drugs, their purposes, and safe use information for people who have limited knowledge about medicines.</p>
        </section>

        <section id="medications" className="container section">
          <h3>Common Medications</h3>
          <p>Browse commonly used medications and their purposes.</p>

          <div className="search-wrap">
            <input
              type="text"
              placeholder="Search by name or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="grid">
            {filtered.length ? filtered.map((med, i) => (
              <div key={i} className="card">
                <h4 className="card-title">{med.name}</h4>
                <div className="card-cat">{med.category}</div>
                <p className="card-desc">{med.desc}</p>
              </div>
            )) : <p className="no-results">No medications found.</p>}
          </div>
        </section>

        <section id="contact" className="container section">
          <h3>Contact</h3>
          <p>For inquiries or feedback: <a href="mailto:esanlorenzo@gbox.adnu.edu.ph">esanlorenzo@gbox.adnu.edu.ph</a></p>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand">
            <img src="/logo.png" alt="Luke4Med logo" className="logo" />
            <span>Luke4Med</span>
          </div>
          <div>© {new Date().getFullYear()} Luke4Med. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
