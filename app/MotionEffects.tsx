"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".manifesto .section-index",
  ".manifesto h2",
  ".manifesto-foot > *",
  ".elephant-scene",
  ".elephant-gallery-copy",
  ".leaders-title > *",
  ".leader-card",
  ".kit-copy > *",
  ".jersey-3d",
  ".squad-head > *",
  ".player",
  "footer > *",
];

export function MotionEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors.join(",")),
    );

    nodes.forEach((node, index) => {
      node.classList.add("motion-reveal");
      node.style.setProperty("--reveal-order", String(index % 4));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6%" },
    );

    nodes.forEach((node) => observer.observe(node));

    const hero = document.querySelector<HTMLElement>(".hero-art");
    const finePointer = window.matchMedia("(pointer: fine)");
    const moveHero = (event: PointerEvent) => {
      if (!hero || !finePointer.matches) return;
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty("--pointer-x", String((event.clientX - rect.left) / rect.width - 0.5));
      hero.style.setProperty("--pointer-y", String((event.clientY - rect.top) / rect.height - 0.5));
    };
    const resetHero = () => {
      hero?.style.setProperty("--pointer-x", "0");
      hero?.style.setProperty("--pointer-y", "0");
    };

    hero?.addEventListener("pointermove", moveHero);
    hero?.addEventListener("pointerleave", resetHero);

    return () => {
      observer.disconnect();
      hero?.removeEventListener("pointermove", moveHero);
      hero?.removeEventListener("pointerleave", resetHero);
    };
  }, []);

  return null;
}
