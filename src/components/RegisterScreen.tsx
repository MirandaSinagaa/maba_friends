import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#0B1E33] to-[#013C58] text-white p-4">
      <h1 className="text-4xl font-bold mb-20">Daftar Akun</h1>
      <div className="w-full max-w-xs">
        <p className="text-center mb-4 font-roboto">Belum Punya Akun?</p>
        <button
          className="font-roboto w-full bg-[#F5A201] text-[#0B1E33] py-2 px-4 rounded-full shadow-lg mb-4 transition-all duration-300 transform hover:scale-95"
          onClick={handleSignUp}
        >
          Daftar Sekarang
        </button>
        <p className="text-center mb-4 font-roboto">Sudah Punya Akun?</p>
        <button
          className="font-roboto w-full bg-[#F5A201] text-[#0B1E33] py-2 px-4 rounded-full shadow-lg mb-4 transition-all duration-300 transform hover:scale-95"
          onClick={() => navigate('/login')}
        >
          Masuk
        </button>
      </div>
      <div className="font-roboto absolute bottom-4 text-center text-xs text-white">
        Dengan masuk atau membuat akun, Anda setuju dengan kami <br />
        <span className="underline">Syarat dan Ketentuan</span> dan <span className="underline">Pernyataan Privasi</span>
      </div>
    </div>
  );
};

export default RegisterScreen;
