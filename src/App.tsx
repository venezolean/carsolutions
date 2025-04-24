import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider, useConfig } from './contexts/ConfigContext';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewCars from './pages/NewCars';
import UsedCars from './pages/UsedCars';
import SavingsPlans from './pages/SavingsPlans';
import LoadingScreen from './components/LoadingScreen';
import Chatbot from './components/Chatbot';
import PromotionalModal from './components/PromotionalModal';

function AppContent() {
  const { loading } = useConfig();

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nuevos" element={<NewCars />} />
          <Route path="/usados" element={<UsedCars />} />
          <Route path="/planes" element={<SavingsPlans />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
      <PromotionalModal />
      <Toaster position="top-right" />
    </div>
  );
}

function App() {
  return (
    <ConfigProvider>
      <Router>
        <AppContent />
      </Router>
    </ConfigProvider>
  );
}

export default App;