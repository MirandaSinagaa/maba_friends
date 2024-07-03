import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Pastikan path gambar logo sudah benar

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/register');
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#0B1E33] to-[#013C58] text-[#f1f5f9] p-4 font-righteous overflow-hidden">
      <div className="flex flex-col items-center justify-center z-10">
        <img src={logo} alt="Logo" className="w-40 h-40 mb-4" /> {/* Disesuaikan ukuran agar pas */}
        <h1 className="text-4xl font-bold mb-4 text-center">Selamat Datang di Teman Maba!</h1>
        <p className="text-center mb-8 font-roboto">
          Dapatkan informasi terbaru tentang kampus impianmu!<br />
          Temukan jurusan, beasiswa, dan jalur masuk terbaik.
        </p>
        <button
          className="bg-[#F5A201] text-[#0B1E33] py-3 px-6 rounded-full shadow-lg hover:bg-[#FFBA42] hover:shadow-xl transition duration-300 font-roboto transform hover:scale-105"
          onClick={handleContinue}
        >
          Lanjutkan
        </button>
      </div>
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-40">
          <path d="M0,0 C150,200 350,0 500,150 L0,150 Z" className="fill-current text-[#f1f5f9]"></path>
        </svg>
      </div>
    </div>
  );
};

export default WelcomeScreen;
