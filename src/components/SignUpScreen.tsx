import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaLock } from 'react-icons/fa';
import { auth, db } from '../firebase'; // Impor konfigurasi Firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const SignUpScreen: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold mb-8">Daftar Akun</h1>
      <form className="w-full max-w-xs space-y-4" onSubmit={handleRegister}>
        <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-md">
          <FaUser className="text-orange-500 mr-3" />
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="flex-grow text-black outline-none"
          />
        </div>
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
          <FaPhone className="text-orange-500 mr-3" />
          <input
            type="text"
            placeholder="No. Hp"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
        <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-md">
          <FaLock className="text-orange-500 mr-3" />
          <input
            type="password"
            placeholder="Konfirmasi Kata Sandi"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="flex-grow text-black outline-none"
          />
        </div>
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <div className="flex items-center space-x-2 text-xs mt-4">
          <input type="checkbox" id="terms" className="form-checkbox text-orange-500" />
          <label htmlFor="terms" className="text-white">
            Saya menyetujui Segala Ketentuan dan kebijakan keamanan yang berlaku
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-orange-600 mt-4"
        >
          Daftar Sekarang
        </button>
        <div className="text-center mt-4">
          Sudah Punya Akun?{' '}
          <button
            type="button"
            className="text-orange-500 underline"
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