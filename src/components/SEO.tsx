import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

const SEO = ({ title, description, canonical }: SEOProps) => {
  const location = useLocation();
  const baseTitle = "Diogo Coutinho | Automação & IA";
  const defaultDescription = "Especialista em automação e inteligência artificial em Lisboa. Transformamos processos complexos em sistemas automatizados inteligentes.";
  const baseUrl = "https://diogocoutinho.com";

  useEffect(() => {
    // Update title
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description || defaultDescription);
    }

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    
    const canonicalUrl = canonical || `${baseUrl}${location.pathname === "/" ? "" : location.pathname}`;
    canonicalLink.setAttribute("href", canonicalUrl);

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title || baseTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", description || defaultDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", canonicalUrl);

  }, [title, description, canonical, location]);

  return null;
};

export default SEO;
