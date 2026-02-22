"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type ViewKey = "front" | "back" | "45";

const VIEW_LABELS: Record<ViewKey, string> = {
  front: "FRONT",
  back: "BACK",
  "45": "45°",
};

interface Product {
  id: string;
  name: string;
  nameKo: string;
  prefix: string;
  price: string;
  desc: string;
  details: string[];
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [activeView, setActiveView] = useState<ViewKey>("front");
  const [fade, setFade] = useState(true);

  const handleViewChange = (view: ViewKey) => {
    if (view === activeView) return;
    setFade(false);
    setTimeout(() => {
      setActiveView(view);
      setFade(true);
    }, 150);
  };

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const imageSrc = `${basePath}/images/products/${product.prefix}_${activeView}.jpg`;
  const isEven = index % 2 === 0;

  return (
    <div
      className="reveal group border-t border-laf-steel/10 pt-10 pb-10"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Desktop: 이미지-텍스트 2단, 짝수는 이미지 왼쪽 / 홀수는 이미지 오른쪽 */}
      <div className={`flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-16 ${isEven ? "" : "md:flex-row-reverse"}`}>

        {/* Image block */}
        <div className="w-full md:w-[55%] shrink-0">
          <div className="relative aspect-[3/4] overflow-hidden bg-laf-charcoal cursor-pointer">
            <Image
              src={imageSrc}
              alt={`${product.name} — ${VIEW_LABELS[activeView]}`}
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
          {/* Top: tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {product.details.map((detail) => (
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
              {product.nameKo}
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
              {product.price}
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
      id: "001",
      name: "URBAN GREY HOODIE",
      nameKo: "어반 그레이 후드",
      prefix: "GR",
      price: "준비 중",
      desc: "도심의 콘크리트 색감. 어디서든 자연스럽게.",
      details: ["RELAXED FIT", "HEAVY COTTON", "GARMENT DYED"],
    },
    {
      id: "002",
      name: "VOID BLACK HOODIE",
      nameKo: "보이드 블랙 후드",
      prefix: "BK",
      price: "준비 중",
      desc: "깊은 어둠. 공간에 녹아드는 검정.",
      details: ["RELAXED FIT", "HEAVY COTTON", "PIGMENT DYED"],
    },
    {
      id: "003",
      name: "CLEAN WHITE HOODIE",
      nameKo: "클린 화이트 후드",
      prefix: "WH",
      price: "준비 중",
      desc: "비워낸 듯한 화이트. 가장 솔직한 색.",
      details: ["RELAXED FIT", "HEAVY COTTON", "ENZYME WASHED"],
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
            <span className="font-mono text-[9px] tracking-superwide text-laf-iron">02</span>
            <div className="h-px w-12 bg-laf-steel/30" />
            <span className="font-mono text-[9px] tracking-superwide text-laf-zinc">COLLECTION</span>
          </div>
          <span className="font-mono text-[9px] tracking-wider text-laf-iron">SS 2025</span>
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
