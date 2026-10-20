import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import company640 from '../assets/sample1-640.webp';
import company1280 from '../assets/sample1-1280.webp';
import company1920 from '../assets/sample1-1920.webp';
import pouring640 from '../assets/sample3-640.webp';
import pouring1280 from '../assets/sample3-1280.webp';
import pouring1920 from '../assets/sample3-1920.webp';

export default function Home() {
  return <div className="home-page">
    <section className="home-hero" aria-labelledby="home-title">
      <div className="hero-copy">
        <h1 id="home-title">Aluminium casting.<br /><span>Built around your component.</span></h1>
        <p>Sand and gravity die casting in Staffordshire. From your first prototype to production, talk to Alpac Alloys about the right process for your project.</p>
        <div className="hero-actions">
          <Link className="button button-red" to="/contact-us">Request a quote <ArrowRight size={18} aria-hidden="true" /></Link>
          <Link className="text-link" to="/processes">Explore our processes <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className="hero-detail">Burton on Trent, UK <span aria-hidden="true">/</span> Prototypes & production</div>
      </div>
      <figure className="hero-image">
        <img src={company1280} srcSet={`${company640} 640w, ${company1280} 1280w, ${company1920} 1920w`} sizes="100vw" alt="Alpac Alloys company premises on Dale Street in Burton on Trent" fetchPriority="high" width="1280" height="960" />
        <figcaption>Alpac Alloys Ltd · Dale Street, Burton on Trent</figcaption>
      </figure>
    </section>

    <section className="process-section page-width" aria-labelledby="process-title">
      <div className="section-intro"><h2 id="process-title">Find the right casting process.</h2><p>Your geometry, quantities and finish requirements guide the choice. We can help you work through the options.</p></div>
      <div className="process-layout">
        <img className="process-photo" src={pouring1280} srcSet={`${pouring640} 640w, ${pouring1280} 1280w, ${pouring1920} 1920w`} sizes="(max-width: 700px) 100vw, 45vw" alt="Molten metal being poured into a sand mould" loading="lazy" decoding="async" width="1280" height="853" />
        <div className="process-options">
          <article><h3>Sand casting</h3><p>A flexible route for prototypes, bespoke components and smaller production runs.</p><Link className="text-link" to="/processes#sand-casting">Explore sand casting <ArrowRight size={18} aria-hidden="true" /></Link></article>
          <article><h3>Gravity die casting</h3><p>Reusable tooling for repeat production, with consistent component geometry and surface finish.</p><Link className="text-link" to="/processes#gravity-die-casting">Explore gravity die casting <ArrowRight size={18} aria-hidden="true" /></Link></article>
          <Link className="capability-link" to="/technical-data">Compare materials, tolerances & design guidance <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>

    <section className="buyer-section">
      <div className="page-width buyer-layout">
        <div><h2>From drawing<br />to a clearer way forward.</h2><p>Share your component requirements with our team. We can discuss castability, material selection and the manufacturing process before you commit to tooling.</p><Link className="text-link" to="/quality">Explore our quality approach <ArrowRight size={18} aria-hidden="true" /></Link></div>
        <ol className="project-steps">
          <li><h3>Tell us what you need</h3><p>Send dimensions, drawings, quantities and your required delivery date.</p></li>
          <li><h3>Discuss the process</h3><p>Work through material, tooling and design considerations with our team.</p></li>
          <li><h3>Plan your production</h3><p>Agree your specification and quotation before the project moves forward.</p></li>
        </ol>
      </div>
    </section>

    <section className="testimonial-section page-width" aria-labelledby="testimonial-title">
      <div><h2 id="testimonial-title">A manufacturing partner<br />you can work with.</h2><Link className="text-link" to="/testimonials">Read customer testimonials <ArrowRight size={18} aria-hidden="true" /></Link></div>
      <figure><blockquote>“Alpac Alloys were able to advise on design, price and castability.”</blockquote><figcaption>Nova Place <span>— Leisure industry specialist</span></figcaption></figure>
    </section>

    <section className="quote-section">
      <div className="page-width quote-layout"><div><h2>Let’s talk about your next component.</h2><p>Have a drawing, an idea or a production requirement? Start a conversation with our team.</p></div><div className="quote-actions"><Link className="button button-white" to="/contact-us">Request a quote <ArrowRight size={18} aria-hidden="true" /></Link><a href="tel:+441283567737"><Phone size={17} aria-hidden="true" /> +44 (0) 1283 567737</a></div></div>
    </section>
  </div>;
}
