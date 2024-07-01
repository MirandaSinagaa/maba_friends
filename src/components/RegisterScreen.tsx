import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold mb-8">Daftar Akun</h1>
      <div className="w-full max-w-xs">
        <p className="text-center mb-4">Belum Punya Akun?</p>
        <button
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-full shadow-lg mb-4 hover:bg-orange-600"
          onClick={handleSignUp}
        >
          Daftar Sekarang
        </button>
        <p className="text-center mb-4">Sudah Punya Akun?</p>
        <button
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-orange-600"
          onClick={() => navigate('/login')}
        >
          Masuk
        </button>
      </div>
      <div className="absolute bottom-4 text-center text-xs text-white">
        Dengan masuk atau membuat akun, Anda setuju dengan kami <br />
        <span className="underline">Syarat dan Ketentuan</span> dan <span className="underline">Pernyataan Privasi</span>
      </div>
    </div>
  );
};

export default RegisterScreen;
