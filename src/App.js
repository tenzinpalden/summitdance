import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TibetanPage from './pages/TibetanPage';
import BhutanesePage from './pages/BhutanesePage';
import NepaliPage from './pages/NepaliPage';
import HeaderComponent from './components/header';
import NavbarComponent from './components/navbar';
import Footer from './components/footer';

function App() {
    return (
        <Router>
            <HeaderComponent />
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/tibetan" element={<TibetanPage />} />
                <Route path="/bhutanese" element={<BhutanesePage />} />
                <Route path="/nepali" element={<NepaliPage />} />
            </Routes>
            
            <Footer />
        </Router>
    );
}

export default App;