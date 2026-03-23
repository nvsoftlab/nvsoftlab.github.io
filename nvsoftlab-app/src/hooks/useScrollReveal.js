import { useEffect } from "react";

/**
 * Watches all elements with class .reveal / .reveal-left / .reveal-right / .reveal-scale
 * and adds .revealed when they enter the viewport.
 * Re-runs whenever the page content changes (pass a dep like a key).
 */
export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const selector = ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-pop";
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            // Stop watching once revealed
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
