import { Link } from 'react-router-dom';
export default function Privacy() {
  return <article className="page-width information-page">
    <h1>Your enquiry information</h1>
    <p>The quotation form asks for your name, email address and project details. You can also provide a company name, phone number, casting process and quantity.</p>
    <h2>Sending an enquiry</h2>
    <p>The form sends these details through Web3Forms to the Alpac Alloys sales team so they can respond to your request. Please avoid including personal or confidential information that is not needed for your enquiry.</p>
    <p>You can read the <a href="https://web3forms.com/privacy">Web3Forms privacy policy</a> for information about the form service.</p>
    <h2>Drawings and attachments</h2>
    <p>This website does not accept file uploads. Email drawings to <a href="mailto:sales@alpacgroup.com">sales@alpacgroup.com</a>. Before sending confidential designs, contact the team to agree how they should be shared.</p>
    <h2>Questions about your information</h2>
    <p>Contact Alpac Alloys at <a href="mailto:sales@alpacgroup.com">sales@alpacgroup.com</a> or Dale Street, Burton on Trent, Staffordshire, DE14 3TE to discuss information you have submitted.</p>
    <Link className="text-link" to="/contact-us">Return to your enquiry →</Link>
  </article>;
}
