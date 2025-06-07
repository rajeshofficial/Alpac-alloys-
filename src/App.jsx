import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Testimonials from './Pages/Testimonials';
import Footer from './components/Footer';
import Contact from './Pages/Contact';
// import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
