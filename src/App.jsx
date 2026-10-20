import Header from './components/Header';
import RouteEffects from './components/RouteEffects';
import Privacy from './Pages/Privacy';
import NotFound from './Pages/NotFound';
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
      <RouteEffects />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />

      <main id="main-content" tabIndex={-1} className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/processes" element={<Processes />} />
          <Route path="/technical-data" element={<TechnicalData />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/export" element={<Export />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
