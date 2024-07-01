import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase'; // Impor konfigurasi Firebase

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user);
      navigate('/dashboard'); // Redirect ke halaman dashboard setelah login sukses
    } catch (error) {
      setError((error as Error).message);
      console.error('Error logging in:', error);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Google user logged in:', result.user);
      navigate('/dashboard'); // Redirect ke halaman dashboard setelah login sukses
    } catch (error) {
      setError((error as Error).message);
      console.error('Error logging in with Google:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold mb-8">Login</h1>
      <form className="w-full max-w-xs space-y-4" onSubmit={handleLogin}>
        <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-md">
          <FaEnvelope className="text-orange-500 mr-3" />
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow text-black outline-none"
          />
        </div>
        <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-md">
          <FaLock className="text-orange-500 mr-3" />
          <input
            type="password"
            placeholder="Kata Sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-grow text-black outline-none"
          />
        </div>
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-orange-600 mt-4"
        >
          Masuk
        </button>
        <div className="text-center mt-4">
          <button
            className="text-white-500 underline"
            onClick={() => navigate('/signup')}
          >
            Belum Punya Akun? Daftar
          </button>
        </div>
        <div className="text-center mt-4">
          <button
            className="text-white-500 underline"
            onClick={() => navigate('/forgot-password')}
          >
            Lupa Kata Sandi?
          </button>
        </div>
      </form>
      <div className="flex flex-col items-center mt-6">
        <button
          className="flex items-center bg-white text-black py-2 px-4 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-200"
          onClick={handleGoogleLogin}
        >
          <FaGoogle className="mr-2" /> Login dengan Google
        </button>
      </div>
      <div className="absolute bottom-4 text-center text-xs text-white">
        Dengan masuk atau membuat akun, Anda setuju dengan kami <br />
        <span className="underline">Syarat dan Ketentuan</span> dan <span className="underline">Pernyataan Privasi</span>
      </div>
    </div>
  );
};

export default LoginScreen;
