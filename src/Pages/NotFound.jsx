import { Link } from 'react-router-dom';
export default function NotFound() {
  return <section className="page-width information-page"><h1>We couldn’t find that page.</h1><p>Explore our casting processes, or contact the team about your project.</p><div className="hero-actions"><Link className="button button-red" to="/processes">View casting processes</Link><Link className="text-link" to="/contact-us">Contact our team →</Link></div></section>;
}
