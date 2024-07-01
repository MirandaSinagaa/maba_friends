import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CompareMajorsPage: React.FC = () => {
  const navigate = useNavigate();
  const [major1, setMajor1] = useState('');
  const [major2, setMajor2] = useState('');

  const handleCompare = () => {
    if (major1 && major2) {
      navigate(`/compare-result?major1=${major1}&major2=${major2}`);
    } else {
      alert('Silakan pilih dua jurusan untuk dibandingkan.');
    }
  };

  return (
    <div className="flex min-h-screen bg-backgroundColor">
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primaryColor">Banding Jurusan</h1>
            <p className="text-lg text-textColor mt-4">
              Pilih dua jurusan yang ingin kamu bandingkan.
            </p>
          </div>
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-textColor mb-2">Jurusan 1</label>
              <input
                type="text"
                value={major1}
                onChange={(e) => setMajor1(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor"
                placeholder="Masukkan jurusan pertama"
              />
            </div>
            <div className="mb-4">
              <label className="block text-textColor mb-2">Jurusan 2</label>
              <input
                type="text"
                value={major2}
                onChange={(e) => setMajor2(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor"
                placeholder="Masukkan jurusan kedua"
              />
            </div>
            <button
              onClick={handleCompare}
              className="w-full bg-accentColor text-white py-3 rounded-full shadow-md hover:bg-accentColor-dark transition-all duration-200"
            >
              Bandingkan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareMajorsPage;
