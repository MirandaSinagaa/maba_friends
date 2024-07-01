import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase'; // Impor konfigurasi Firebase
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const docRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUser(docSnap.data());
        }
      } else {
        navigate('/login');
      }
    });

    return unsubscribe;
  }, [navigate]);

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/login');
    });
  };

  return (
    <div className="min-h-screen bg-blue-600 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 p-4 bg-blue-700 rounded-lg shadow-md">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <img src="https://via.placeholder.com/150" alt="User Avatar" className="rounded-full" />
          </div>
          <div>
            <h2 className="text-xl font-bold">{user?.fullName || 'Username'}</h2>
            <p className="text-sm">Mau Tahu Apa Tentang Kampus?</p>
          </div>
        </div>
        <div className="mt-8 space-y-4">
          <button className="w-full bg-purple-700 py-3 rounded-full shadow-md hover:bg-purple-800 text-left px-4">
            <i className="fa fa-university mr-2"></i> Cari Kampus
          </button>
          <button className="w-full bg-purple-700 py-3 rounded-full shadow-md hover:bg-purple-800 text-left px-4">
            <i className="fa fa-book mr-2"></i> Tes Penjurusan
          </button>
          <button className="w-full bg-purple-700 py-3 rounded-full shadow-md hover:bg-purple-800 text-left px-4">
            <i className="fa fa-balance-scale mr-2"></i> Banding Jurusan
          </button>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-bold text-yellow-500">BERITA TERKINI KAMPUS</h3>
          <p className="text-sm">Cari Informasi kampus dan jurusan Impianmu!</p>
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
        <button
          className="mt-8 w-full bg-red-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-red-600"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;