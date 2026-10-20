import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { submitEnquiry } from '../lib/enquiry';

const emptyForm = { name: '', email: '', company: '', phone: '', castingType: '', quantity: '', subject: '', message: '', botcheck: '' };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const sending = useRef(false);
  const feedback = useRef(null);
  const update = event => setForm({ ...form, [event.target.name]: event.target.value });
  async function handleSubmit(event) {
    event.preventDefault();
    if (sending.current || form.botcheck) return;
    sending.current = true;
    setStatus('sending');
    setError('');
    try {
      await submitEnquiry(form, import.meta.env.VITE_ACCESS_KEY);
      setForm(emptyForm);
      setStatus('success');
    } catch (failure) {
      setError(failure.message);
      setStatus('error');
    } finally {
      sending.current = false;
      requestAnimationFrame(() => feedback.current?.focus());
    }
  }
  return <div className="contact-page page-width">
    <div className="contact-heading"><h1>Let’s talk about your component.</h1><p>Tell us what you need to make. We’ll help you explore the process, materials and next steps.</p></div>
    <div className="contact-layout">
      <section aria-labelledby="enquiry-heading" className="enquiry-panel">
        <h2 id="enquiry-heading">Request a quote</h2>
        <p className="form-intro">Fields marked * are required. Include dimensions, quantities and your target delivery date if you have them.</p>
        <form onSubmit={handleSubmit} aria-busy={status === 'sending'}>
          <fieldset disabled={status === 'sending'} className="enquiry-fields">
            <legend className="sr-only">Your contact and project details</legend>
            <div className="form-row">
              <label htmlFor="name">Full name *<input id="name" name="name" autoComplete="name" required maxLength={120} value={form.name} onChange={update} /></label>
              <label htmlFor="email">Email address *<input id="email" name="email" type="email" autoComplete="email" required maxLength={254} value={form.email} onChange={update} /></label>
            </div>
            <div className="form-row">
              <label htmlFor="company">Company<input id="company" name="company" autoComplete="organization" maxLength={160} value={form.company} onChange={update} /></label>
              <label htmlFor="phone">Phone number<input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={40} value={form.phone} onChange={update} /></label>
            </div>
            <div className="form-row">
              <label htmlFor="castingType">Casting process<select id="castingType" name="castingType" value={form.castingType} onChange={update}><option value="">Not sure yet</option><option value="sand-casting">Sand casting</option><option value="gravity-die">Gravity die casting</option></select></label>
              <label htmlFor="quantity">Estimated quantity<select id="quantity" name="quantity" value={form.quantity} onChange={update}><option value="">Select if known</option><option value="1-10">1–10 parts</option><option value="11-100">11–100 parts</option><option value="101-1000">101–1,000 parts</option><option value="1001+">More than 1,000 parts</option></select></label>
            </div>
            <label htmlFor="subject">Project summary *<input id="subject" name="subject" required maxLength={180} placeholder="For example, a pump housing prototype" value={form.subject} onChange={update} /></label>
            <label htmlFor="message">Project details *<textarea id="message" name="message" required rows={6} maxLength={10000} aria-describedby="drawing-help" placeholder="Dimensions, material, quantities, delivery date and any special requirements…" value={form.message} onChange={update} /></label>
            <div hidden aria-hidden="true"><label htmlFor="botcheck">Leave this field empty<input id="botcheck" name="botcheck" tabIndex={-1} autoComplete="off" value={form.botcheck} onChange={update} /></label></div>
            <p id="drawing-help" className="form-help">Have drawings? Email STEP, IGES, DWG, DXF or PDF files to <a href="mailto:sales@alpacgroup.com?subject=Casting%20enquiry%20%E2%80%94%20drawings">sales@alpacgroup.com</a>, using the same project summary.</p>
            <p className="form-help">Your enquiry is sent to our sales team through Web3Forms. <Link to="/privacy">How enquiry information is handled</Link>.</p>
            <button type="submit" className="button button-red" disabled={status === 'sending'}>{status === 'sending' ? 'Sending your enquiry…' : 'Send enquiry'}<ArrowRight size={18} aria-hidden="true" /></button>
          </fieldset>
          <div className="form-feedback" aria-live="polite" aria-atomic="true">
            {status === 'sending' && <p role="status">Sending your enquiry. Please keep this page open.</p>}
            {status === 'success' && <div ref={feedback} tabIndex={-1} className="feedback-success"><CheckCircle2 size={22} aria-hidden="true" /><div><strong>Your enquiry has been sent.</strong><p>Thank you. Our team will review your requirements. If you have drawings to add, email them using your project summary.</p></div></div>}
            {status === 'error' && <div ref={feedback} tabIndex={-1} role="alert" className="feedback-error"><strong>We couldn’t send your enquiry.</strong><p>{error}</p><p>Your details are still in the form.</p></div>}
          </div>
        </form>
      </section>
      <aside className="contact-aside" aria-label="Contact information">
        <h2>Prefer a conversation?</h2>
        <a className="contact-method" href="tel:+441283567737"><Phone size={20} aria-hidden="true" /><span>Call our team<strong>+44 (0) 1283 567737</strong></span></a>
        <a className="contact-method" href="mailto:sales@alpacgroup.com"><Mail size={20} aria-hidden="true" /><span>Email your requirements<strong>sales@alpacgroup.com</strong></span></a>
        <div className="aside-section"><h3>What to include</h3><ul><li>A drawing or component dimensions</li><li>Your preferred material, if known</li><li>Estimated quantities</li><li>Required delivery date</li></ul><p>Unsure about the process? Tell us what the component needs to do.</p></div>
        <div className="aside-section"><h3>Visit Alpac Alloys</h3><address>Dale Street<br />Burton on Trent, Staffordshire<br />DE14 3TE, United Kingdom</address><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Alpac+Alloys+Dale+Street+Burton+on+Trent+DE14+3TE"><MapPin size={17} aria-hidden="true" /> View map & directions</a></div>
        <div className="aside-section"><h3>Business hours</h3><p>Monday–Thursday: 5:00 am–4:00 pm<br />Friday–Sunday: closed</p></div>
      </aside>
    </div>
  </div>;
}
