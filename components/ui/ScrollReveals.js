"use client";
import { useEffect } from "react";

export default function ScrollReveals() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.06 },
    );
    const elements = document.querySelectorAll(
      ".reveal-section, .section-label",
    );
    elements.forEach((el) => {
      el.classList.add("reveal-ready");
      observer.observe(el);
    });
    return () => {
      observer.disconnect();
      elements.forEach((el) => el.classList.remove("reveal-ready"));
    };
  }, []);
  return null;
}
