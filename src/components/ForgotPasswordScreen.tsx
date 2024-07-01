import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleResetPassword = () => {
    // Logic untuk reset password
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold mb-8">Lupa Kata Sandi?</h1>
      <div className="w-full max-w-xs space-y-4">
        <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-md">
          <FaEnvelope className="text-orange-500 mr-3" />
          <input type="email" placeholder="Email ID" className="flex-grow text-black outline-none" />
        </div>
        <button
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-orange-600 mt-4"
          onClick={handleResetPassword}
        >
          Reset Password
        </button>
        <div className="text-center mt-4">
          <button
            className="text-white-500 underline"
            onClick={() => navigate('/login')}
          >
            Ingat Akunmu? Login disini
          </button>
        </div>
      </div>
      <div className="absolute bottom-4 text-center text-xs text-white">
        Dengan masuk atau membuat akun, Anda setuju dengan kami <br />
        <span className="underline">Syarat dan Ketentuan</span> dan <span className="underline">Pernyataan Privasi</span>
      </div>
    </div>
  );
};

export default ForgotPasswordScreen;
