import { useEffect, memo } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

const SEO = memo(({ title, description, canonical }: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Helper to update meta tag
    const updateMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute("content", content);
    };
    
    // Update meta tags
    updateMeta('meta[name="description"]', description);
    updateMeta('meta[property="og:title"]', title);
    updateMeta('meta[property="og:description"]', description);
    updateMeta('meta[name="twitter:title"]', title);
    updateMeta('meta[name="twitter:description"]', description);
    
    // Update canonical URL
    if (canonical) {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) canonicalLink.setAttribute("href", canonical);
      
      updateMeta('meta[property="og:url"]', canonical);
    }
  }, [title, description, canonical]);

  return null;
});

SEO.displayName = "SEO";

export default SEO;
