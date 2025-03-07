import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Packs from './components/Packs';
import Reservations from './components/Reservations';
import Contact from './components/Contact';
import NormasUso from './components/NormasUso';
import PoliticaPrivacidad from './components/PoliticaPrivacidad';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ToastContainer position="top-right" autoClose={3000} />

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/packs" element={<Packs />} />
          <Route path="/reservas" element={<Reservations />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/normas-uso" element={<NormasUso />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        </Routes>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={() => toast.success('¡Toast funcionando! 🎉')}
        >
          Probar Toast
        </button>
      </div>
    </Router>
  );
}

export default App;
