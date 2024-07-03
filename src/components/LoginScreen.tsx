import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase'; // Import Firebase configuration

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user);
      navigate('/dashboard'); // Redirect to dashboard after successful login
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
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } catch (error) {
      setError((error as Error).message);
      console.error('Error logging in with Google:', error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#0B1E33] to-[#013C58] text-white p-4">
      <h1 className="text-4xl font-bold mb-10">Login</h1>
      <form className="w-full max-w-xs space-y-4" onSubmit={handleLogin}>
        <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-md">
          <FaEnvelope className="text-[#F5A201] mr-3" />
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="font-roboto flex-grow text-black outline-none"
          />
        </div>
        <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-md">
          <FaLock className="text-[#F5A201] mr-3" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Kata Sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="font-roboto flex-grow text-black outline-none"
          />
          <button type="button" onClick={toggleShowPassword} className="focus:outline-none">
            {showPassword ? <FaEyeSlash className="text-[#F5A201]" /> : <FaEye className="text-[#F5A201]" />}
          </button>
        </div>
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <button
          type="submit"
          className="font-roboto w-full bg-[#F5A201] text-[#0B1E33] py-2 px-4 rounded-full shadow-lg mb-4 transition-all duration-300 transform hover:scale-105"
        >
          Masuk
        </button>
        <div className="text-center mt-4">
          <button
            className="font-roboto text-white underline"
            onClick={() => navigate('/signup')}
          >
            Belum Punya Akun? Daftar
          </button>
        </div>
        <div className="text-center mt-4">
          <button
            className="font-roboto text-white underline"
            onClick={() => navigate('/forgot-password')}
          >
            Lupa Kata Sandi?
          </button>
        </div>
      </form>
      <div className="flex flex-col items-center mt-6">
        <button
          className="font-roboto flex items-center bg-white text-black py-2 px-4 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-200 transform hover:scale-105"
          onClick={handleGoogleLogin}
        >
          <FaGoogle className="mr-2" /> Login dengan Google
        </button>
      </div>
      <div className="font-roboto absolute bottom-4 text-center text-xs text-white">
        Dengan masuk atau membuat akun, Anda setuju dengan kami <br />
        <span className="underline">Syarat dan Ketentuan</span> dan <span className="underline">Pernyataan Privasi</span>
      </div>
    </div>
  );
};

export default LoginScreen;
