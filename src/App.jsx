import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Processes from './pages/Processes';
import TechnicalData from './pages/TechnicalData';
import Industries from './pages/Industries';
import Quality from './pages/Quality';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Export from './pages/Export';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0f0ef]">
      <Header />
      <Navigation />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/processes" element={<Processes />} />
          <Route path="/technical-data" element={<TechnicalData />} />
          <Route path="/industries/*" element={<Industries />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/export" element={<Export />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
