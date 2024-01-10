import React, { useEffect } from 'react';
import '../assets/css/HeroSectionStyle.css';
import profileImage from '../assets/image/Kucing.png'; // Ganti dengan path gambar Anda
import Typed from 'typed.js';

function HeroSection() {
  useEffect(() => {
    // Konfigurasi Typed.js
    const options = {
      strings: ["I'm Muhammad Galang"],
      typeSpeed: 50,
      backSpeed: 30,
      showCursor: true,
      loop: true, // Mengaktifkan pengulangan
    };

    // Inisialisasi Typed.js
    const typed = new Typed('.typed-text', options);

    // Membersihkan Typed.js saat komponen tidak lagi digunakan
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="hero-section">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h1>Welcome To My Website</h1>
      <p className="typed-text"></p>
      <button>Get Started</button>
    </div>
  );
}

export default HeroSection;