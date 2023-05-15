import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './footer'
import Navigation from './navigation'
import HomePage from './homepage';
import AboutPage from './aboutpage';
import ContactPage from './contactpage';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="banner">
        {/* Title graphic */}
        <h1>RusticMonkey</h1>
      </header>

      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;