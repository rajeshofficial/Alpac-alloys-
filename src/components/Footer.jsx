import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
export default function Footer() {
  return <footer className="site-footer"><div className="page-width">
    <div className="footer-grid">
      <div><Link className="footer-brand" to="/">Alpac Alloys Ltd</Link><p>Aluminium sand & gravity die casting.</p><address>Dale Street, Burton on Trent<br />Staffordshire, DE14 3TE</address></div>
      <nav aria-label="Footer navigation"><Link to="/processes">Casting processes</Link><Link to="/technical-data">Technical capabilities</Link><Link to="/industries">Industries</Link><Link to="/quality">Quality</Link></nav>
      <nav aria-label="Company information"><Link to="/about-us">About Alpac</Link><Link to="/testimonials">Customer testimonials</Link><Link to="/export">Export</Link><Link to="/privacy">Enquiry information</Link></nav>
      <div className="footer-contact"><Link to="/contact-us">Discuss your project <ArrowUpRight size={17} aria-hidden="true" /></Link><a href="tel:+441283567737">+44 (0) 1283 567737</a><a href="mailto:sales@alpacgroup.com">sales@alpacgroup.com</a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Alpac Alloys Ltd</span><a href="https://indiantechsolutions.com/">Web design by Indian Tech Solution</a></div>
  </div></footer>;
}
