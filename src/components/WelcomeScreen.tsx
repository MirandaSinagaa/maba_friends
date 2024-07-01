import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Pastikan path sesuai dengan lokasi file logo

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/register');
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-blue-600 text-white p-4">
      <div className="flex flex-col items-center justify-center z-10">
        <img src={logo} alt="Logo" className="w-45 h-45 mb-4" />
        <h1 className="text-2xl font-bold mb-2">Halo Sobat Maba!</h1>
        <p className="text-center mb-6">
          Selamat datang di TEMAN MABA <br />
          Yuk Update terus informasi tentang Kampus Impianmu!
        </p>
        <button
          className="bg-orange-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-orange-600 mb-16"
          onClick={handleContinue}
        >
          Lanjut
        </button>
      </div>
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-40">
          <path d="M0,0 C150,200 350,0 500,150 L0,150 Z" className="fill-current text-white"></path>
        </svg>
      </div>
    </div>
  );
};

export default WelcomeScreen;
