import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Temporarily disable smooth scrolling for immediate reset
    const htmlElement = document.documentElement;
    const originalScrollBehavior = htmlElement.style.scrollBehavior;
    
    // Disable smooth scrolling temporarily
    htmlElement.style.scrollBehavior = 'auto';
    
    // Scroll to top immediately
    window.scrollTo(0, 0);
    
    // Also scroll the document element to be extra sure
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Restore smooth scrolling after a brief delay
    setTimeout(() => {
      htmlElement.style.scrollBehavior = originalScrollBehavior || 'smooth';
    }, 100);
  }, [pathname]);

  return null;
}

