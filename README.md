# Alpac Alloys website

React 19, React Router and Vite static website for Alpac Alloys.

## Run locally

Use Node.js 22 or later and npm:

```sh
npm ci
npm run dev
```

Configure `VITE_ACCESS_KEY` in the hosting environment or a local `.env.local` to enable the existing Web3Forms enquiry integration. `.env.example` shows the variable name. Vite embeds `VITE_` values in the client bundle; use only a Web3Forms public form access key here, never a private API credential. Configure the form recipient and domain restrictions in the Web3Forms account. Restart the development server or rebuild after configuration changes.

```sh
npm run build
npm run lint
npm test
npm run preview
```

`npm run build` emits `dist/`, including a distinct HTML head for every supported route, plus `sitemap.xml` and `robots.txt`. This is route-specific metadata, not full content prerendering. Page content still requires JavaScript. Metadata is also updated on client-side navigation.

## Deploy

Publish the contents of `dist/` to the existing static host. Preserve real files before falling back to `index.html` for client routing. The supplied `_redirects` supports hosts that recognise that format; configure equivalent routing on other hosts. Keep the current production origin `https://aluminiumcastingseurope.co.uk` in `src/pageMetadata.js` and `index.html`, or update both if moving domains.

Do not deploy source files, `.env` files, or `node_modules`. Configure the public Web3Forms access key at build time. No production deployment is performed by this repository's build command.

## Changes in this update

- Product-led homepage using existing component and pouring photographs, responsive WebP images, and a primary quotation action.
- Consolidated desktop navigation, mobile menu with accessible state and Escape dismissal, skip link, visible focus, and reduced motion support.
- Quote form near the top of the contact page, autocomplete, visible pending/success/error states, duplicate-submit protection, request timeout and recoverable errors. Failed submissions retain their fields.
- Existing Web3Forms transport retained. No upload endpoint added. Drawing instructions link to the existing sales email address.
- Enquiry information page explaining the actual form flow, fallback page for unknown routes, page titles, descriptions, canonical and Open Graph metadata, sitemap and robots file.
- Consistent aluminium spelling and removal of conflicting AS9100/IATF certification badges from the Industries page pending confirmation.

## Owner checks before release

- Confirm current certification scope and supply downloadable certificates before restoring AS9100 or IATF badges. The existing ISO 9001 wording, quality statistics, technical tables, equipment claims and business hours remain subject to owner verification.
- Confirm permission to use existing customer testimonials and supplied images. No new case-study results or performance statistics were invented.
- Test a real enquiry on the deployed domain, including inbox delivery and the success response. Local automated tests mock the service and do not send messages.
- Review the enquiry information wording against the company's full privacy and retention practices. It describes this website's data flow and is not a substitute for an approved company privacy policy.
- Review dependency advisories separately before release. This update does not perform potentially breaking dependency upgrades.

## Tests

`npm test` exercises the form transport with mocked successful, rejected, HTTP-error, malformed and failed responses, plus missing configuration. No customer details or messages are transmitted.
