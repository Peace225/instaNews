// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'; // Assurez-vous d'avoir installé font-awesome
import Header from './components/Header';
import Home from './components/Home';
import Daloa from './pages/Daloa';

import Footer from './components/Footer';
import Gagnoa from './pages/Gagnoa';
import SanPedro from './pages/SanPedro';
import Yamoussoukro from './pages/Yamoussoukro';
import InstaFm from './pages/InstaFm';
import Bouake from './pages/Bouake';
import TVPage from './components/TVPage';


const App = () => {
  return (
    <Router>
      {/* Affichage du Header sur toutes les pages */}
      <Header />
      
      {/* Routes de l'application */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gagnoa" element={<Gagnoa />} />
        <Route path="/daloa" element={<Daloa />} />
        <Route path="/sanpedro" element={<SanPedro />} />
        <Route path="/bouake" element={<Bouake/>} />
        <Route path="/yamoussoukro" element={<Yamoussoukro />} />
        <Route path="/instafm" element={<InstaFm />} />
        <Route path="/tv" element={<TVPage />} />
      </Routes>

      {/* Le Footer sera affiché sur toutes les pages */}
      <Footer />
    </Router>
  );
};

export default App;
