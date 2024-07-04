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
    <div className="flex min-h-screen bg-gradient-to-r from-[#0B1E33] to-[#013C58] text-[#F5A201]">
      <Sidebar user={user} />
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 p-6 bg-[#0B1E33] rounded-lg shadow-lg text-[#FFFFFF]">
            <div className="w-16 h-16 bg-[#FFFFFF] rounded-full flex items-center justify-center">
              <img src={user?.photoURL} alt="User Avatar" className="rounded-full" />
            </div>
            <div>
              <h2 className="text-xl font-roboto font-bold">{user?.fullName || 'Username'}</h2>
              <p className="text-xs font-roboto font-bold">Mau tahu apa tentang kampus?</p>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <button
              onClick={() => navigate('/search')}
              className="font-bold font-roboto w-full bg-[#00537A] text-[#FFFFFF] py-3 rounded-full shadow-md hover:bg-[#0F172A] transition-all duration-200 text-left px-4 flex items-center transform hover:scale-105"
            >
              <img src={universityIcon} alt="University Icon" className="w-6 h-6 mr-2" />
              Cari Kampus
            </button>
            <button
              onClick={() => navigate('/career-test')}
              className="font-bold font-roboto w-full bg-[#00537A] text-[#FFFFFF] py-3 rounded-full shadow-md hover:bg-[#0F172A] transition-all duration-200 text-left px-4 flex items-center transform hover:scale-105"
            >
              <img src={testIcon} alt="Test Icon" className="w-6 h-6 mr-2" />
              Tes Penjurusan
            </button>
            <button
              onClick={() => navigate('/compare-majors')}
              className="font-bold font-roboto w-full bg-[#00537A] text-[#FFFFFF] py-3 rounded-full shadow-md hover:bg-[#0F172A] transition-all duration-200 text-left px-4 flex items-center transform hover:scale-105"
            >
              <img src={compareIcon} alt="Compare Icon" className="w-6 h-6 mr-2" />
              Banding Jurusan
            </button>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-roboto text-[#FFFFFF] font-bold">BERITA TERKINI KAMPUS</h3>
            <p className="font-roboto text-xs text-[#FFBA42]">Cari Informasi kampus dan jurusan Impianmu!</p>
          </div>
          <div className="font-roboto mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-[#013C58] text-[#FFFFFF] p-4 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
              <h4 className="font-bold">Berita Kampus 1</h4>
              <p>Deskripsi berita kampus 1...</p>
            </div>
            <div className="bg-[#013C58] text-[#FFFFFF] p-4 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
              <h4 className="font-bold">Berita Kampus 2</h4>
              <p>Deskripsi berita kampus 2...</p>
            </div>
            <div className="bg-[#013C58] text-[#FFFFFF] p-4 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
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
