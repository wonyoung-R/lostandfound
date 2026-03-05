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
                  "유실물<br />
                  보관소"
                </h2>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-6 h-px bg-laf-steel/40" />
                  <span className="font-mono text-[9px] tracking-widest text-laf-steel italic">
                    Lost and Found
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Story text */}
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <p className="font-body text-laf-ash leading-[2] text-[15px] mb-8">
              유실물 보관소라는 의미의 LOST and FOUND는 <br />
              마치 원래 내것이었던 것처럼 자연스러운 것들을 추구합니다.
            </p>
            <p className="font-body text-laf-zinc leading-[2] text-[14px] mb-8">
              어릴적의 꿈, 동경했던 누군가, 그리고 이루지 못한 꿈처럼<br />
              지금의 나를 구성하는 것드을 옷으로서 실현하고자 합니다. 
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
