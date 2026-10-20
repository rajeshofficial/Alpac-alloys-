import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageMetadata, siteUrl } from '../pageMetadata';

export default function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
    const metadata = pageMetadata[path];
    const [title, description] = metadata || ['Page not found | Alpac Alloys', 'Explore casting processes or contact the Alpac Alloys team.'];
    document.title = title;
    const meta = (attribute, name, content) => {
      let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, name); document.head.append(element); }
      element.content = content;
    };
    meta('name', 'description', description);
    meta('name', 'robots', metadata ? 'index,follow' : 'noindex,follow');
    meta('property', 'og:title', title);
    meta('property', 'og:description', description);
    meta('property', 'og:url', siteUrl + path);
    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = siteUrl + path;
    // Anchor navigation must also work after a client-side route transition.
    if (hash) {
      let anchor = hash.slice(1);
      try { anchor = decodeURIComponent(anchor); } catch { /* Keep malformed anchors literal. */ }
      requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView());
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.getElementById('main-content')?.focus({ preventScroll: true });
    }
  }, [pathname, hash]);
  return null;
}
