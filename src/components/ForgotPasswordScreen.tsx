import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleResetPassword = () => {
    // Logic untuk reset password
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#013C58] to-[#0B1E33] text-white p-4">
      <h1 className="text-4xl font-bold mb-8">Lupa Kata Sandi?</h1>
      <div className="w-full max-w-xs space-y-4">
        <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-md">
          <FaEnvelope className="font-roboto text-[#F5A201] mr-3" />
          <input type="email" placeholder="Email ID" className="font-roboto flex-grow text-black outline-none" />
        </div>
        <button
          className="font-roboto w-full bg-[#F5A201] text-[#0B1E33] py-2 px-4 rounded-full shadow-lg mb-4 transition-all duration-300 transform hover:scale-105"
          onClick={handleResetPassword}
        >
          Reset Password
        </button>
        <div className="font-roboto text-center mt-4">
          <button
            className="text-[#FFFFFF] underline"
            onClick={() => navigate('/login')}
          >
            Ingat Akunmu? Login disini
          </button>
        </div>
      </div>
      <div className="font-roboto absolute bottom-4 text-center text-xs text-white">
        Dengan masuk atau membuat akun, Anda setuju dengan kami <br />
        <span className="underline">Syarat dan Ketentuan</span> dan <span className="underline">Pernyataan Privasi</span>
      </div>
    </div>
  );
};

export default ForgotPasswordScreen;
