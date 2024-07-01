import React from 'react';
import { useLocation } from 'react-router-dom';

const CompareResultPage: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const major1 = params.get('major1');
  const major2 = params.get('major2');

  // Simulasi data perbandingan jurusan
  const comparisonData = {
    [major1 || '']: {
      description: 'Deskripsi jurusan 1...',
      careerProspects: 'Prospek karir jurusan 1...',
      universities: ['Universitas A', 'Universitas B'],
    },
    [major2 || '']: {
      description: 'Deskripsi jurusan 2...',
      careerProspects: 'Prospek karir jurusan 2...',
      universities: ['Universitas C', 'Universitas D'],
    },
  };

  return (
    <div className="flex min-h-screen bg-backgroundColor">
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primaryColor">Hasil Perbandingan Jurusan</h1>
          </div>
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-accentColor">{major1}</h2>
                <p className="mt-2 text-textColor">{comparisonData[major1 || ''].description}</p>
                <p className="mt-2 text-textColor font-semibold">Prospek Karir:</p>
                <p className="text-textColor">{comparisonData[major1 || ''].careerProspects}</p>
                <p className="mt-2 text-textColor font-semibold">Universitas:</p>
                <ul className="list-disc list-inside text-textColor">
                  {comparisonData[major1 || ''].universities.map((univ, index) => (
                    <li key={index}>{univ}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-accentColor">{major2}</h2>
                <p className="mt-2 text-textColor">{comparisonData[major2 || ''].description}</p>
                <p className="mt-2 text-textColor font-semibold">Prospek Karir:</p>
                <p className="text-textColor">{comparisonData[major2 || ''].careerProspects}</p>
                <p className="mt-2 text-textColor font-semibold">Universitas:</p>
                <ul className="list-disc list-inside text-textColor">
                  {comparisonData[major2 || ''].universities.map((univ, index) => (
                    <li key={index}>{univ}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareResultPage;
