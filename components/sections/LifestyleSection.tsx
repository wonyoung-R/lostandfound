"use client";

import { useEffect, useRef } from "react";

// CSS abstract urban placeholder
function UrbanPlaceholder({
  variant,
}: {
  variant: "concrete" | "street" | "building" | "shadow" | "rain" | "tunnel";
}) {
  const configs = {
    concrete: {
      bg: "from-[#2a2a2a] to-[#1a1a1a]",
      label: "CONCRETE WALL",
      elements: (
        <>
          {/* Concrete block pattern */}
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(90deg, transparent 49%, rgba(255,255,255,0.1) 50%, transparent 51%),
                linear-gradient(0deg, transparent 49%, rgba(255,255,255,0.08) 50%, transparent 51%)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-3/4 border border-white/5 flex items-center justify-center">
              <div className="w-1/2 h-1/2 border border-white/5" />
            </div>
          </div>
        </>
      ),
    },
    street: {
      bg: "from-[#1e1e1e] to-[#111111]",
      label: "STREET VIEW",
      elements: (
        <>
          {/* Perspective lines suggesting street */}
          <div className="absolute inset-0 flex items-end justify-center pb-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute bottom-0 w-px bg-gradient-to-t from-white/10 to-transparent"
                style={{
                  height: `${50 + i * 5}%`,
                  left: `${10 + i * 10}%`,
                  transform: `rotate(${(i - 3.5) * 4}deg)`,
                  transformOrigin: "bottom center",
                }}
              />
            ))}
          </div>
          {/* Horizon line */}
          <div className="absolute top-1/3 left-0 right-0 h-px bg-white/10" />
        </>
      ),
    },
    building: {
      bg: "from-[#252525] to-[#151515]",
      label: "CITY SKYLINE",
      elements: (
        <>
          {/* Building silhouettes */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1">
            {[60, 85, 70, 100, 45, 75, 55, 90, 65].map((h, i) => (
              <div
                key={i}
                className="bg-laf-black/80 border-t border-x border-white/5 flex-1"
                style={{ height: `${h}%` }}
              >
                {/* Windows */}
                <div className="p-1 grid grid-cols-2 gap-0.5">
                  {[...Array(6)].map((_, j) => (
                    <div
                      key={j}
                      className="h-1 bg-white/5"
                      style={{ opacity: Math.random() > 0.5 ? 0.15 : 0 }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ),
    },
    shadow: {
      bg: "from-[#141414] to-[#080808]",
      label: "URBAN SHADOW",
      elements: (
        <>
          {/* Abstract shadow/light play */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.04) 0%, transparent 60%)",
            }}
          />
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
          <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          {/* Horizontal scan lines */}
          {[25, 50, 75].map((top) => (
            <div
              key={top}
              className="absolute left-0 right-0 h-px bg-white/5"
              style={{ top: `${top}%` }}
            />
          ))}
        </>
      ),
    },
    rain: {
      bg: "from-[#1c1c1c] to-[#0e0e0e]",
      label: "WET PAVEMENT",
      elements: (
        <>
          {/* Rain streak lines */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-white/8 to-transparent"
              style={{
                height: `${30 + Math.random() * 40}%`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                transform: "rotate(8deg)",
              }}
            />
          ))}
          {/* Reflection puddle */}
          <div
            className="absolute bottom-0 left-1/4 right-1/4 h-1/5 rounded-full"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.04), transparent)",
              filter: "blur(4px)",
            }}
          />
        </>
      ),
    },
    tunnel: {
      bg: "from-[#1a1a1a] to-[#050505]",
      label: "UNDERGROUND",
      elements: (
        <>
          {/* Tunnel perspective */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[0.9, 0.75, 0.6, 0.45, 0.3].map((scale, i) => (
              <div
                key={i}
                className="absolute border border-white/[0.05] rounded-sm"
                style={{
                  width: `${scale * 100}%`,
                  height: `${scale * 100}%`,
                }}
              />
            ))}
          </div>
          {/* Center glow */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 60%)",
            }}
          />
          {/* Ceiling lights */}
          {[20, 40, 60, 80].map((x) => (
            <div
              key={x}
              className="absolute top-0 h-1/3 w-px bg-gradient-to-b from-white/10 to-transparent"
              style={{ left: `${x}%` }}
            />
          ))}
        </>
      ),
    },
  };

  const cfg = configs[variant];

  return (
    <div
      className={`relative w-full h-full bg-gradient-to-br ${cfg.bg} overflow-hidden`}
    >
      {cfg.elements}

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />

      {/* Label */}
      <div className="absolute bottom-4 left-4 z-10">
        <span className="font-mono text-[8px] tracking-superwide text-white/15">
          {cfg.label}
        </span>
      </div>
    </div>
  );
}

export default function LifestyleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="lookbook"
      ref={sectionRef}
      className="relative bg-laf-void py-24 md:py-40 overflow-hidden"
    >
      {/* Section header */}
      <div className="px-6 md:px-10 lg:px-16 mb-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between reveal">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[9px] tracking-superwide text-laf-iron">03</span>
              <div className="h-px w-12 bg-laf-steel/30" />
              <span className="font-mono text-[9px] tracking-superwide text-laf-zinc">LIFESTYLE</span>
            </div>
            <span className="font-mono text-[9px] tracking-wider text-laf-iron hidden md:block">
              LOOKBOOK — COMING SOON
            </span>
          </div>

          <div className="mt-12 reveal" style={{ transitionDelay: "0.1s" }}>
            <h2 className="font-display font-light text-4xl md:text-5xl text-laf-offwhite leading-tight tracking-tight max-w-xl">
              도심에 녹아드는<br />
              <span className="text-laf-zinc">무채색의 일상</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Lookbook grid - magazine layout */}
      <div className="px-6 md:px-10 lg:px-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-12 grid-rows-auto gap-2 md:gap-3">
            {/* Large left: concrete */}
            <div className="col-span-12 md:col-span-7 row-span-2 aspect-[4/3] md:aspect-auto reveal">
              <div className="h-full min-h-[300px] md:min-h-[500px]">
                <UrbanPlaceholder variant="concrete" />
              </div>
            </div>

            {/* Right top: street */}
            <div className="col-span-12 md:col-span-5 aspect-square reveal" style={{ transitionDelay: "0.1s" }}>
              <UrbanPlaceholder variant="street" />
            </div>

            {/* Right bottom: shadow */}
            <div className="col-span-12 md:col-span-5 aspect-square reveal" style={{ transitionDelay: "0.2s" }}>
              <UrbanPlaceholder variant="shadow" />
            </div>

            {/* Bottom row */}
            <div className="col-span-12 md:col-span-4 aspect-[4/3] reveal" style={{ transitionDelay: "0.1s" }}>
              <UrbanPlaceholder variant="building" />
            </div>
            <div className="col-span-12 md:col-span-4 aspect-[4/3] reveal" style={{ transitionDelay: "0.2s" }}>
              <UrbanPlaceholder variant="rain" />
            </div>
            <div className="col-span-12 md:col-span-4 aspect-[4/3] reveal" style={{ transitionDelay: "0.3s" }}>
              <UrbanPlaceholder variant="tunnel" />
            </div>
          </div>

          {/* Caption */}
          <div className="mt-8 flex items-center justify-between reveal">
            <p className="font-mono text-[9px] tracking-wider text-laf-iron">
              실제 룩북 사진은 론칭 시 업데이트됩니다.
            </p>
            <p className="font-mono text-[9px] tracking-wider text-laf-iron">
              SS 2025
            </p>
          </div>
        </div>
      </div>

      {/* Full-width quote */}
      <div className="mt-24 px-6 md:px-10 lg:px-16 border-t border-b border-laf-steel/10 py-16">
        <div className="max-w-screen-xl mx-auto reveal">
          <blockquote className="font-display font-light text-3xl md:text-5xl lg:text-6xl text-laf-offwhite/60 leading-tight tracking-tight text-center">
            "처음부터 거기 있었던 것처럼."
          </blockquote>
          <p className="font-mono text-[9px] tracking-superwide text-laf-iron text-center mt-6">
            — LOST and FOUND BRAND MANIFESTO
          </p>
        </div>
      </div>
    </section>
  );
}
