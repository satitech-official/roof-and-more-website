"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".section-heading",
  ".editorial-copy",
  ".image-collage",
  ".service-card",
  ".project-tile",
  ".official-gallery-item",
  ".reason-item",
  ".industry-grid span",
  ".timeline-step",
  ".tool-controls",
  ".estimate-card",
  ".comparison-row",
  ".visualizer-frame",
  ".swatch-panel",
  ".download-item",
  ".blog-card",
  ".office-card",
  ".map-panel",
  ".map-card",
  ".map-frame",
  ".contact-map-actions a",
  ".route-intro",
  ".route-section",
  ".related-grid a",
  ".gallery-image",
  ".detail-meta",
  ".article-body > *",
];

export default function MotionEnhancer() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.classList.add("motion-ready");

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      document.documentElement.style.setProperty("--scroll-progress", `${progress}`);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    const handlePointer = (event) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handlePointer, { passive: true });

    const elements = Array.from(document.querySelectorAll(revealSelectors.join(",")));
    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${Math.min(index % 9, 8) * 55}ms`);
      element.classList.add("reveal-item");
    });

    const markVisibleElements = () => {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          element.classList.add("is-visible");
        }
      });
    };

    requestAnimationFrame(markVisibleElements);
    window.addEventListener("scroll", markVisibleElements, { passive: true });
    const revealInterval = window.setInterval(markVisibleElements, 250);

    if (reduceMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return () => {
        window.removeEventListener("scroll", updateProgress);
        window.removeEventListener("scroll", markVisibleElements);
        window.removeEventListener("pointermove", handlePointer);
        window.clearInterval(revealInterval);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("scroll", markVisibleElements);
      window.removeEventListener("pointermove", handlePointer);
      window.clearInterval(revealInterval);
      observer.disconnect();
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
