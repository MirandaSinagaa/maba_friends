import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Sidebar from './Sidebar';
import { doc, getDoc } from 'firebase/firestore';
import { FaSearch } from 'react-icons/fa';
import ui from '../assets/ui.png';
import ua from '../assets/ua.png';
import ub from '../assets/ub.png';
import ugm from '../assets/ugm.png';
import udayana from '../assets/udayana.png';
import undiksha from '../assets/undiksha.png';

const SearchPage: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const docRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUser({
            ...userData,
            photoURL: currentUser.photoURL || userData.photoURL,
          });
        } else {
          setUser({
            fullName: currentUser.displayName || 'Username',
            photoURL: currentUser.photoURL || null,
          });
        }
      } else {
        navigate('/login');
      }
    });

    return unsubscribe;
  }, [navigate]);

  const universities = [
    { name: 'UNIVERSITAS GADJAH MADA', img: ugm, url: 'https://www.ugm.ac.id/' },
    { name: 'UNIVERSITAS PENDIDIKAN GANESHA', img: undiksha, url: 'https://www.undiksha.ac.id/' },
    { name: 'UNIVERSITAS INDONESIA', img: ui, url: 'https://www.ui.ac.id/' },
    { name: 'UNIVERSITAS UDAYANA', img: udayana, url: 'https://www.unud.ac.id/' },
    { name: 'UNIVERSITAS AIRLANGGA', img: ua, url: 'https://www.unair.ac.id/' },
    { name: 'UNIVERSITAS BRAWIJAYA', img: ub, url: 'https://www.ub.ac.id/' },
  ];

  const filteredUniversities = universities.filter((univ) =>
    univ.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-[#0B1E33] to-[#013C58] text-[#F5A201]">
      <Sidebar user={user} />
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#00537A] text-[#FFFFFF] p-4 rounded-lg shadow-lg">
            <h1 className="text-xl font-bold font-akshar">Cari Kampus</h1>
          </div>
          <div className="p-4">
            <div className="relative mb-4">
              <FaSearch className="absolute top-3 left-3 text-[#000000]" />
              <input
                type="text"
                placeholder="Cari kampus impian kamu"
                className="font-roboto w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none bg-white text-[#0B1E33] placeholder-[#000000] border-[#FFFFFF]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredUniversities.map((univ) => (
                <a
                  key={univ.name}
                  href={univ.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="bg-[#0B1E33] rounded-lg overflow-hidden shadow-md">
                    <img src={univ.img} alt={univ.name} className="w-full h-60 object-cover" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
