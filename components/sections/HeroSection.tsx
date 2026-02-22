"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const onScroll = () => {
      const scrolled = window.scrollY;
      el.style.transform = `translateY(${scrolled * 0.3}px)`;
      el.style.opacity = `${1 - scrolled * 0.001}`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-laf-black overflow-hidden flex flex-col">
      {/* Background: concrete/city texture */}
      <div className="absolute inset-0 z-0">
        {/* Layered gradient simulating concrete */}
        <div className="absolute inset-0 bg-gradient-to-br from-laf-charcoal via-laf-black to-laf-void opacity-90" />

        {/* Abstract urban grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.08) 25%, rgba(255,255,255,0.08) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.08) 75%, rgba(255,255,255,0.08) 76%, transparent 77%),
              linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.08) 25%, rgba(255,255,255,0.08) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.08) 75%, rgba(255,255,255,0.08) 76%, transparent 77%)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Concrete texture blobs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-laf-charcoal rounded-full blur-[140px] opacity-20" />
        <div className="absolute bottom-1/3 left-1/5 w-80 h-80 bg-laf-asphalt rounded-full blur-[120px] opacity-15" />
      </div>

      {/* Hero content */}
      <div ref={heroRef} className="relative z-10 flex flex-col justify-center flex-1 px-6 md:px-10 lg:px-16 pt-32 pb-16">
        <div className="max-w-screen-xl mx-auto w-full">
          {/* Tag line */}
          <div className="flex items-center gap-3 mb-12 animate-fade-in">
            <div className="w-8 h-px bg-laf-steel" />
            <span className="font-mono text-[9px] tracking-superwide text-laf-zinc uppercase">
              Seoul — 2025 — Urban Essentials
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-display font-light leading-none mb-0">
            <div className="overflow-hidden">
              <span
                className="block text-[18vw] md:text-[14vw] lg:text-[12vw] text-laf-offwhite tracking-tighter animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                LOST
              </span>
            </div>
            <div className="overflow-hidden flex items-baseline gap-6">
              <span
                className="block text-[7vw] md:text-[5vw] text-laf-steel font-light italic mb-2 animate-fade-up"
                style={{ animationDelay: "0.25s" }}
              >
                and
              </span>
              <span
                className="block text-[18vw] md:text-[14vw] lg:text-[12vw] text-laf-offwhite tracking-tighter animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                FOUND
              </span>
            </div>
          </h1>

          {/* Description */}
          <div
            className="mt-12 md:mt-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="font-mono text-[11px] tracking-wider text-laf-zinc leading-loose max-w-xs">
              도심의 라이프스타일에<br />
              원래 있던 것처럼.<br />
              <br />
              루즈하게, 자연스럽게.
            </p>

            <div className="flex flex-col items-start md:items-end gap-4">
              <a
                href="#collection"
                className="group inline-flex items-center gap-4 font-mono text-[10px] tracking-superwide text-laf-offwhite border border-laf-steel/40 px-8 py-4 hover:bg-laf-offwhite hover:text-laf-black transition-all duration-300"
              >
                VIEW COLLECTION
                <span className="w-4 h-px bg-current transition-all duration-300 group-hover:w-8" />
              </a>
              <span className="font-mono text-[9px] tracking-wider text-laf-iron">
                SS 2025 — LAUNCHING SOON
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="relative z-10 border-t border-laf-steel/10 py-4 overflow-hidden">
        <div className="marquee-track">
          {Array(6).fill(null).map((_, i) => (
            <span key={i} className="inline-block font-mono text-[9px] tracking-superwide text-laf-iron px-8">
              LOST AND FOUND — URBAN ESSENTIALS — SEOUL — SS 25 — 유실물 보관소 — LOST AND FOUND —&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 right-10 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-laf-steel/40 relative overflow-hidden">
          <div
            className="absolute top-0 w-full bg-laf-ash"
            style={{
              height: "40%",
              animation: "slideDown 1.5s ease-in-out infinite",
            }}
          />
        </div>
        <span className="font-mono text-[8px] tracking-superwide text-laf-iron rotate-90 origin-center mt-2">
          SCROLL
        </span>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(300%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
