import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
  <div className="App">
  {/*Page Navbar*/}
    <Navbar />
    <HeroSection />
    <Features />
    <Contact />
    <Footer />
  </div>
  );
}

export default App;
