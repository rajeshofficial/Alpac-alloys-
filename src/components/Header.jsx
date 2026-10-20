import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo1.png';

const links = [
  ['/processes', 'Processes'], ['/technical-data', 'Capabilities'],
  ['/industries', 'Industries'], ['/quality', 'Quality'], ['/about-us', 'About'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggle = useRef(null);
  useEffect(() => { setOpen(false); }, [location]);
  return (
    <header className="site-header" onKeyDown={event => {
      if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
    }}>
      <div className="header-inner">
        <Link to="/" aria-label="Alpac Alloys — home" className="brand-link">
          <img src={logo} alt="Alpac Alloys Ltd" width="230" height="64" />
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map(([path, label]) => <NavLink key={path} to={path}>{label}</NavLink>)}
        </nav>
        <Link className="button button-red header-quote" to="/contact-us">Request a quote <ArrowUpRight size={17} aria-hidden="true" /></Link>
        <button ref={toggle} type="button" className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-navigation" hidden={!open} aria-label="Mobile navigation" className="mobile-nav">
        {links.map(([path, label]) => <NavLink key={path} to={path}>{label}</NavLink>)}
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact-us">Contact & request a quote</Link>
        <a href="tel:+441283567737"><Phone size={16} aria-hidden="true" /> +44 (0) 1283 567737</a>
      </nav>
    </header>
  );
}
