"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type ViewKey = "front" | "back" | "45";

const VIEW_LABELS: Record<ViewKey, string> = {
  front: "FRONT",
  back: "BACK",
  "45": "45°",
};

interface ColorVariant {
  prefix: string;
  color: string;
  colorKo: string;
  price: string;
  details: string[];
  swatch: string;
}

interface Product {
  id: string;
  name: string;
  nameKo: string;
  desc: string;
  colors: ColorVariant[];
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [activeView, setActiveView] = useState<ViewKey>("front");
  const [activeColorIdx, setActiveColorIdx] = useState(0);
  const [fade, setFade] = useState(true);

  const activeColor = product.colors[activeColorIdx];

  const handleViewChange = (view: ViewKey) => {
    if (view === activeView) return;
    setFade(false);
    setTimeout(() => {
      setActiveView(view);
      setFade(true);
    }, 150);
  };

  const handleColorChange = (idx: number) => {
    if (idx === activeColorIdx) return;
    setFade(false);
    setTimeout(() => {
      setActiveColorIdx(idx);
      setFade(true);
    }, 150);
  };

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const imageSrc = `${basePath}/images/products/${activeColor.prefix}_${activeView}.jpg`;

  return (
    <div
      className="reveal group border-t border-laf-steel/10 pt-10 pb-10"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-16">

        {/* Image block */}
        <div className="w-full md:w-[55%] shrink-0">
          <div className="relative aspect-[3/4] overflow-hidden bg-laf-charcoal cursor-pointer">
            <Image
              src={imageSrc}
              alt={`${product.name} ${activeColor.color} — ${VIEW_LABELS[activeView]}`}
              fill
              className="object-cover"
              style={{
                opacity: fade ? 1 : 0,
                transition: "opacity 0.15s ease",
              }}
              sizes="(max-width: 768px) 100vw, 55vw"
              priority={index === 0}
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-laf-black/0 group-hover:bg-laf-black/10 transition-all duration-500 z-20" />

            {/* Product number badge */}
            <div className="absolute top-6 left-6 z-30">
              <span className="font-mono text-[9px] tracking-superwide text-laf-zinc drop-shadow">
                — {product.id}
              </span>
            </div>

            {/* View switcher — bottom left */}
            <div className="absolute bottom-6 left-6 z-30 flex gap-1">
              {(["front", "back", "45"] as ViewKey[]).map((view) => (
                <button
                  key={view}
                  onClick={() => handleViewChange(view)}
                  className={`font-mono text-[8px] tracking-superwide px-2.5 py-1.5 transition-all duration-200 ${
                    activeView === view
                      ? "bg-laf-offwhite text-laf-black"
                      : "bg-laf-black/50 text-laf-iron border border-laf-iron/30 hover:text-laf-zinc hover:border-laf-zinc/50"
                  }`}
                >
                  {VIEW_LABELS[view]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Text block */}
        <div className="flex flex-col justify-between py-2 md:py-6 flex-1">

          {/* Color tabs */}
          <div className="mb-8">
            <p className="font-mono text-[8px] tracking-superwide text-laf-iron/50 mb-3">COLOR</p>
            <div className="flex gap-2 flex-wrap">
              {product.colors.map((c, idx) => (
                <button
                  key={c.prefix}
                  onClick={() => handleColorChange(idx)}
                  className={`flex items-center gap-2 font-mono text-[8px] tracking-superwide px-3 py-2 transition-all duration-200 border ${
                    activeColorIdx === idx
                      ? "border-laf-zinc/60 text-laf-offwhite"
                      : "border-laf-steel/20 text-laf-iron hover:border-laf-steel/50 hover:text-laf-zinc"
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{
                      backgroundColor: c.swatch,
                      boxShadow: c.prefix === "WH" ? "inset 0 0 0 1px rgba(255,255,255,0.25)" : undefined,
                    }}
                  />
                  {c.color}
                </button>
              ))}
            </div>
          </div>

          {/* Details tags for active color */}
          <div className="flex flex-wrap gap-2 mb-8">
            {activeColor.details.map((detail) => (
              <span
                key={detail}
                className="font-mono text-[8px] tracking-wider text-laf-zinc border border-laf-steel/30 px-3 py-1.5"
              >
                {detail}
              </span>
            ))}
          </div>

          {/* Middle: title & desc */}
          <div className="flex-1">
            <p className="font-mono text-[9px] tracking-superwide text-laf-iron mb-4">
              {product.id}
            </p>
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-laf-offwhite tracking-tight leading-none mb-3">
              {product.name}
            </h3>
            <p className="font-mono text-[11px] tracking-wider text-laf-zinc mb-8">
              {product.nameKo} — {activeColor.colorKo}
            </p>
            <p className="font-body text-[14px] text-laf-iron leading-loose max-w-xs">
              {product.desc}
            </p>
          </div>

          {/* Bottom: price + CTA */}
          <div className="mt-10 flex items-end justify-between">
            <a
              href="#waitlist"
              className="group/btn inline-flex items-center gap-4 font-mono text-[9px] tracking-superwide text-laf-zinc hover:text-laf-offwhite transition-colors duration-200 border border-laf-steel/30 hover:border-laf-zinc/50 px-6 py-3"
            >
              <span>NOTIFY ME</span>
              <div className="h-px w-4 bg-current transition-all duration-300 group-hover/btn:w-8" />
            </a>
            <p className="font-mono text-[9px] tracking-wider text-laf-iron">
              {activeColor.price}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function ProductSection() {
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
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const products: Product[] = [
    {
      id: "LAF04",
      name: "LAF04 LARGE FIT HOODIE",
      nameKo: "라지핏 후디",
      desc: "어린시절 미디어를 통해 봤던 농구 스타들의 사진속 후디. 그 여유로운 실루엣은 선수들을 더욱 멋져보이게 했습니다. LAF04는 그 기억을 가장 이상적인 형태로 실현해냈습니다.",
      colors: [
        { prefix: "GR", color: "CHARCOAL", colorKo: "차콜", price: "11.9", details: ["LARGE FIT", "HEAVY COTTON", "GARMENT DYED"], swatch: "#4a4a4a" },
        { prefix: "BK", color: "BLACK", colorKo: "블랙", price: "10.9", details: ["LARGE FIT", "HEAVY COTTON", "PIGMENT DYED"], swatch: "#1a1a1a" },
        { prefix: "WH", color: "WHITE", colorKo: "화이트", price: "10.9", details: ["LARGE FIT", "HEAVY COTTON", "ENZYME WASHED"], swatch: "#e8e8e8" },
      ],
    },
  ];

  return (
    <section
      id="collection"
      ref={sectionRef}
      className="relative bg-laf-black py-24 md:py-40 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="flex items-center justify-between mb-20 reveal">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-laf-steel/30" />
            <span className="font-mono text-[9px] tracking-superwide text-laf-zinc">COLLECTION</span>
          </div>
          <span className="font-mono text-[9px] tracking-wider text-laf-iron">LAF04</span>
        </div>

        {/* Products list — 1열 세로 */}
        <div className="flex flex-col">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Collection note */}
        <div className="mt-16 pt-12 border-t border-laf-steel/10 reveal">
          <p className="font-mono text-[10px] tracking-wider text-laf-iron text-center leading-loose">
            SS 2025 COLLECTION — LAUNCHING SOON<br />
            웨이트리스트에 등록하고 가장 먼저 소식을 받으세요.
          </p>
        </div>
      </div>
    </section>
  );
}
