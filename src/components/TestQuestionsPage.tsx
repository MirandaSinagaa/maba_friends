import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    question: "Apa hobi favorit kamu?",
    options: ["Membaca", "Menulis", "Olahraga", "Musik", "Seni"],
  },
  {
    question: "Mata pelajaran apa yang paling kamu sukai di sekolah?",
    options: ["Matematika", "Bahasa", "Ilmu Pengetahuan Alam", "Ilmu Sosial", "Kesenian"],
  },
  // Tambahkan lebih banyak pertanyaan sesuai kebutuhan
];

const CareerTestQuestionsPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleAnswerClick = (answer: string) => {
    setAnswers([...answers, answer]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/career-test/result', { state: { answers } });
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex min-h-screen bg-backgroundColor">
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primaryColor">Tes Penjurusan</h1>
            <p className="text-lg text-textColor mt-4">
              Pertanyaan {currentQuestionIndex + 1} dari {questions.length}
            </p>
          </div>
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <p className="text-xl text-textColor mb-4">{currentQuestion.question}</p>
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  className="w-full bg-accentColor text-white py-3 rounded-full shadow-md hover:bg-accentColor-dark transition-all duration-200"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerTestQuestionsPage;
