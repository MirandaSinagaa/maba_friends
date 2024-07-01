import React from 'react';
import { useNavigate } from 'react-router-dom';

const CareerTestPage: React.FC = () => {
  const navigate = useNavigate();

  const startTest = () => {
    navigate('/career-test/questions'); // Arahkan ke halaman pertanyaan tes
  };

  return (
    <div className="flex min-h-screen bg-backgroundColor">
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primaryColor">Tes Penjurusan</h1>
            <p className="text-lg text-textColor mt-4">
              Temukan jurusan yang tepat untukmu dengan mengikuti tes penjurusan ini.
            </p>
          </div>
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <p className="text-textColor mb-4">
              Tes ini akan membantu kamu menentukan jurusan yang sesuai dengan minat dan bakat kamu. 
              Jawab pertanyaan-pertanyaan berikut dengan jujur untuk hasil yang akurat.
            </p>
            <button
              onClick={startTest}
              className="w-full bg-accentColor text-white py-3 rounded-full shadow-md hover:bg-accentColor-dark transition-all duration-200"
            >
              Mulai Tes
            </button>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-accentColor">Panduan Tes</h2>
            <ul className="list-disc list-inside mt-4 text-textColor">
              <li>Pastikan kamu dalam kondisi yang tenang dan fokus.</li>
              <li>Jawab setiap pertanyaan dengan jujur sesuai dengan minat dan kepribadian kamu.</li>
              <li>Jangan terlalu lama berpikir, jawaban pertama biasanya yang paling tepat.</li>
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-accentColor">Hasil Tes</h2>
            <p className="text-textColor mt-4">
              Setelah kamu menyelesaikan tes, kamu akan mendapatkan rekomendasi jurusan yang sesuai dengan profil kamu. 
              Kamu juga bisa melihat informasi lebih lanjut tentang jurusan tersebut dan universitas yang menyediakannya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerTestPage;
