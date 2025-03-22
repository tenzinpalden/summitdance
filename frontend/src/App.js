import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HeaderComponent from './components/header';
import Footer from './components/footer';
import NavbarComponent from './components/navbar';

import DiscoverMorePage from './pages/DiscoverMorePage';
import TibetanPage from './pages/TibetanPage';
import BhutanesePage from './pages/BhutanesePage';



function App() {
  return (
    <Router>
        <HeaderComponent />
        <NavbarComponent />

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tibetan" element={<TibetanPage />} />
            <Route path="/bhutanese" element={<BhutanesePage />} />
            <Route path="/discover" element={<DiscoverMorePage />} />
        </Routes>
        <Footer />

    </Router>
  );
}

export default App;
