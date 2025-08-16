import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LoadingProvider } from './contexts/LoadingContext';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import SocialPage from './pages/SocialPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <Router>
          <div className="min-h-screen bg-light dark:bg-dark transition-colors duration-300">
            <LoadingScreen />
            <Navigation />
            <ScrollToTop />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/social" element={<SocialPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
          </div>
        </Router>
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default App;