import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Sidebar from './Sidebar';
import logo from '../assets/logo.png';
import universityIcon from '../assets/university.png';
import testIcon from '../assets/test.png';
import compareIcon from '../assets/compare.png';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        console.log("Current User:", currentUser);
        console.log("User Photo URL:", currentUser.photoURL);

        // Jika login menggunakan Google, gunakan data dari currentUser
        setUser({
          fullName: currentUser.displayName || 'Username',
          photoURL: currentUser.photoURL || logo,
        });
      } else {
        navigate('/login');
      }
    });

    return unsubscribe;
  }, [navigate]);

  return (
    <div className="flex min-h-screen bg-backgroundColor">
      <Sidebar user={user} />
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 p-6 bg-primaryColor rounded-lg shadow-lg text-white">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <img src={user?.photoURL} alt="User Avatar" className="rounded-full" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{user?.fullName || 'Username'}</h2>
              <p className="text-sm">Mau Tahu Apa Tentang Kampus?</p>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <button
              onClick={() => navigate('/search')}
              className="w-full bg-accentColor text-white py-3 rounded-full shadow-md hover:bg-accentColor-dark transition-all duration-200 text-left px-4 flex items-center"
            >
              <img src={universityIcon} alt="University Icon" className="w-6 h-6 mr-2" />
              Cari Kampus
            </button>
            <button className="w-full bg-accentColor text-white py-3 rounded-full shadow-md hover:bg-accentColor-dark transition-all duration-200 text-left px-4 flex items-center">
              <img src={testIcon} alt="Test Icon" className="w-6 h-6 mr-2" />
              Tes Penjurusan
            </button>
            <button className="w-full bg-accentColor text-white py-3 rounded-full shadow-md hover:bg-accentColor-dark transition-all duration-200 text-left px-4 flex items-center">
              <img src={compareIcon} alt="Compare Icon" className="w-6 h-6 mr-2" />
              Banding Jurusan
            </button>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-bold text-accentColor">BERITA TERKINI KAMPUS</h3>
            <p className="text-sm text-textColor">Cari Informasi kampus dan jurusan Impianmu!</p>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white text-black p-4 rounded-lg shadow-md">
              <h4 className="font-bold">Berita Kampus 1</h4>
              <p>Deskripsi berita kampus 1...</p>
            </div>
            <div className="bg-white text-black p-4 rounded-lg shadow-md">
              <h4 className="font-bold">Berita Kampus 2</h4>
              <p>Deskripsi berita kampus 2...</p>
            </div>
            <div className="bg-white text-black p-4 rounded-lg shadow-md">
              <h4 className="font-bold">Berita Kampus 3</h4>
              <p>Deskripsi berita kampus 3...</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
