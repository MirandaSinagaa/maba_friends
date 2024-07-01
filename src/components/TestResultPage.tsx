import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CareerTestResultPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers } = location.state as { answers: string[] };

  const recommendedMajor = "Teknik Informatika"; // Contoh rekomendasi jurusan, logika bisa disesuaikan

  return (
    <div className="flex min-h-screen bg-backgroundColor">
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primaryColor">Hasil Tes Penjurusan</h1>
            <p className="text-lg text-textColor mt-4">
              Berdasarkan jawaban kamu, berikut adalah rekomendasi jurusan yang sesuai untuk kamu:
            </p>
          </div>
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-accentColor">{recommendedMajor}</h2>
            <p className="text-textColor mt-4">
              Jurusan ini cocok dengan minat dan bakat kamu. Kamu bisa melihat informasi lebih lanjut tentang jurusan ini dan universitas yang menyediakannya.
            </p>
            <button
              onClick={() => navigate('/search')}
              className="mt-6 w-full bg-accentColor text-white py-3 rounded-full shadow-md hover:bg-accentColor-dark transition-all duration-200"
            >
              Cari Kampus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerTestResultPage;
