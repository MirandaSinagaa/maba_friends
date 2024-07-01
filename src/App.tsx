import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import RegisterScreen from './components/RegisterScreen';
import SignUpScreen from './components/SignUpScreen';
import LoginScreen from './components/LoginScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import Dashboard from './components/Dashboard';
import SearchPage from './components/SearchPage';
import CareerTestPage from './components/TestPage';
import CompareMajorsPage from './components/ComparePage';
import CompareResultPage from './components/CompareResultPage';
import CareerTestQuestionsPage from './components/TestQuestionsPage'; // Tambahkan import ini
import CareerTestResultPage from './components/TestResultPage'; // Tambahkan import ini
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
        <Route path="/career-test" element={<CareerTestPage />} /> {/* Tambahkan route ini */}
        <Route path="/career-test/questions" element={<CareerTestQuestionsPage />} /> {/* Tambahkan route ini */}
        <Route path="/career-test/result" element={<CareerTestResultPage />} /> {/* Tambahkan route ini */}
        <Route path="/compare-majors" element={<CompareMajorsPage />} />
        <Route path="/compare-result" element={<CompareResultPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<WelcomeScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
