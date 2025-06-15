import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';



import Home from './Pages/Home';
import About from './Pages/About';
import Processes from './Pages/Processes';
import TechnicalData from './Pages/TechnicalData';
import Industries from './Pages/Industries';
import Quality from './Pages/Quality';
import Testimonials from './Pages/Testimonials';
import Contact from './Pages/Contact';
import Export from './Pages/Export';

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
