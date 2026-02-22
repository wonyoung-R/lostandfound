"use client";

import { useEffect, useRef } from "react";
import LostTag from "@/components/ui/LostTag";

export default function BrandStorySection() {
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
      { threshold: 0.15 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative bg-laf-void py-32 md:py-48 px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-laf-steel/20 to-transparent hidden lg:block" />

      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-20 reveal">
          <span className="font-mono text-[9px] tracking-superwide text-laf-iron">
            01
          </span>
          <div className="h-px w-12 bg-laf-steel/30" />
          <span className="font-mono text-[9px] tracking-superwide text-laf-zinc">
            BRAND STORY
          </span>
        </div>

        {/* Main story grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: LostTag + Large typography statement */}
          <div className="reveal">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              {/* LostTag signature element */}
              <div className="w-28 shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-500">
                <LostTag
                  itemNo="LF-2025-001"
                  category="HOODIE"
                  status="UNCLAIMED"
                />
              </div>
              <div>
                <h2 className="font-display font-light text-5xl md:text-6xl lg:text-7xl text-laf-offwhite leading-tight tracking-tight">
                  유실물<br />
                  보관소
                </h2>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-6 h-px bg-laf-steel/40" />
                  <span className="font-mono text-[9px] tracking-widest text-laf-steel italic">
                    Lost Property Office
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Story text */}
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <p className="font-body text-laf-ash leading-[2] text-[15px] mb-8">
              LOST and FOUND는 유실물 보관소에서 착안했습니다.
              거기에 있는 물건들처럼, 우리의 옷은 당신의 삶 속에
              오래전부터 있었던 것처럼 자연스럽게 녹아듭니다.
            </p>
            <p className="font-body text-laf-zinc leading-[2] text-[14px] mb-8">
              특별하지 않아도 괜찮습니다.
              루즈하게, 무채색으로, 도심의 일상에 묻어나는 것.
              그것이 우리가 추구하는 옷입니다.
            </p>
            <p className="font-mono text-[10px] tracking-wider text-laf-iron leading-loose">
              Always been there.<br />
              항상 거기 있었던 것처럼.
            </p>
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pt-16 border-t border-laf-steel/10">
          {[
            {
              num: "001",
              title: "NATURAL",
              ko: "자연스러움",
              desc: "옷이 아닌 일상의 일부. 입는 사람과 공간 사이에서 자연스럽게 존재합니다.",
            },
            {
              num: "002",
              title: "ACHROMATIC",
              ko: "무채색",
              desc: "회색과 검정. 도심의 콘크리트처럼 모든 것에 어울리는 색감.",
            },
            {
              num: "003",
              title: "LOOSE",
              ko: "루즈함",
              desc: "몸을 감싸되 구속하지 않는. 여유 있는 실루엣으로 도시를 걷습니다.",
            },
          ].map((item, i) => (
            <div
              key={item.num}
              className="reveal"
              style={{ transitionDelay: `${0.1 * i}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[9px] tracking-wider text-laf-iron">
                  {item.num}
                </span>
                <div className="h-px flex-1 bg-laf-steel/20" />
              </div>
              <h3 className="font-display text-lg font-medium text-laf-offwhite tracking-widest mb-1">
                {item.title}
              </h3>
              <p className="font-mono text-[9px] tracking-wider text-laf-zinc mb-4">
                {item.ko}
              </p>
              <p className="font-body text-[13px] text-laf-iron leading-[1.9]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
