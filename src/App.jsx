import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import About from './pages/About';
import Collections from './pages/Collections';
import HighJewelry from './pages/HighJewelry';
import Bridal from './pages/Bridal';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-midnight text-champagne font-sans">
        <CustomCursor />
        
        <Navbar />
        
        <main className="flex-grow pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/high-jewelry" element={<HighJewelry />} />
            <Route path="/bridal" element={<Bridal />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
