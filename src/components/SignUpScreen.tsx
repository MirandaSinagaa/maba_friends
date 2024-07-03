import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase'; // Import Firebase configuration
import { doc, setDoc } from 'firebase/firestore';

const SignUpScreen: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Simpan data tambahan ke Firestore
      await setDoc(doc(db, 'users', user.uid), {
        fullName: fullName,
        email: email,
        phone: phone,
      });
      console.log('User registered and additional data saved:', user);
      navigate('/login'); // Redirect ke halaman login setelah sukses
    } catch (error) {
      setError((error as Error).message);
      console.error('Error signing up:', error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="font-roboto min-h-screen flex flex-col items-center justify-center bg-[#0B1E33] text-white p-4">
      <h1 className="text-4xl font-righteous mb-10">Daftar Akun</h1>
      <form className="w-full max-w-xs space-y-4" onSubmit={handleRegister}>
        <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-md">
          <FaUser className="text-[#F5A201] mr-3" />
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="flex-grow text-black outline-none"
          />
        </div>
        <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-md">
          <FaEnvelope className="text-[#F5A201] mr-3" />
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow text-black outline-none"
          />
        </div>
        <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-md">
          <FaPhone className="text-[#F5A201] mr-3" />
          <input
            type="text"
            placeholder="No. Hp"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-grow text-black outline-none"
          />
        </div>
        <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-md">
          <FaLock className="text-[#F5A201] mr-3" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Kata Sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-grow text-black outline-none"
          />
          <button type="button" onClick={toggleShowPassword} className="focus:outline-none">
            {showPassword ? <FaEyeSlash className="text-[#F5A201]" /> : <FaEye className="text-[#F5A201]" />}
          </button>
        </div>
        <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-md">
          <FaLock className="text-[#F5A201] mr-3" />
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Konfirmasi Kata Sandi"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="flex-grow text-black outline-none"
          />
          <button type="button" onClick={toggleShowConfirmPassword} className="focus:outline-none">
            {showConfirmPassword ? <FaEyeSlash className="text-[#F5A201]" /> : <FaEye className="text-[#F5A201]" />}
          </button>
        </div>
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <div className="flex items-center space-x-2 text-xs mt-4">
          <input type="checkbox" id="terms" className="form-checkbox text-[#F5A201]" />
          <label htmlFor="terms" className="text-white">
            Saya menyetujui Segala Ketentuan dan kebijakan keamanan yang berlaku
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-[#F5A201] text-[#0B1E33] py-2 px-4 rounded-full shadow-lg mt-4 transform transition duration-300 hover:scale-105"
        >
          Daftar Sekarang
        </button>
        <div className="text-center mt-4">
          Sudah Punya Akun?{' '}
          <button
            type="button"
            className="text-[#F5A201] underline"
            onClick={() => navigate('/login')}
          >
            Masuk
          </button>
        </div>
      </form>
      <div className="absolute bottom-4 text-center text-xs text-white">
        Dengan masuk atau membuat akun, Anda setuju dengan kami <br />
        <span className="underline">Syarat dan Ketentuan</span> dan <span className="underline">Pernyataan Privasi</span>
      </div>
    </div>
  );
};

export default SignUpScreen;
