"use client";

import { useEffect, useRef } from "react";

export function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold }
    );

    const reveals = el.querySelectorAll(".reveal");
    reveals.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
