import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HeaderComponent from './components/header';
import Footer from './components/footer';
import NavbarComponent from './components/navbar';

function App() {
  return (
    <Router>
        <HeaderComponent />
        <NavbarComponent />

        <Routes>
            <Route path="/" element={<HomePage />} />
            
        </Routes>
        <Footer />

    </Router>
  );
}

export default App;
