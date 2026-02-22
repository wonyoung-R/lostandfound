"use client";

import { useState, useRef, useEffect } from "react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("올바른 이메일을 입력해주세요.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;
      if (!scriptUrl) {
        setErrorMsg("서버 설정 오류입니다.");
        setStatus("error");
        return;
      }
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, submittedAt: new Date().toISOString() }),
      });
      setStatus("success");
    } catch {
      setErrorMsg("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
      setStatus("error");
    }
  };

  return (
    <section
      id="waitlist"
      ref={sectionRef}
      className="relative bg-laf-offwhite py-32 md:py-48 px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-laf-fog blur-[120px] opacity-60" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-laf-smoke blur-[80px] opacity-80" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 49.5%, rgba(0,0,0,0.3) 50%, transparent 50.5%),
              linear-gradient(90deg, transparent 49.5%, rgba(0,0,0,0.3) 50%, transparent 50.5%)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16 reveal">
          <span className="font-mono text-[9px] tracking-superwide text-laf-iron">04</span>
          <div className="h-px w-12 bg-laf-iron/20" />
          <span className="font-mono text-[9px] tracking-superwide text-laf-zinc">WAITLIST</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          {/* Left content */}
          <div>
            <h2
              className="font-display font-light text-5xl md:text-6xl lg:text-7xl text-laf-black leading-tight tracking-tight reveal mb-6"
              style={{ transitionDelay: "0.1s" }}
            >
              먼저<br />
              만나보세요.
            </h2>
            <p
              className="font-body text-laf-iron text-[15px] leading-[2] reveal mb-4"
              style={{ transitionDelay: "0.2s" }}
            >
              SS 2025 컬렉션 론칭 전 웨이트리스트에 등록하세요.
              가장 먼저 소식을 받고, 얼리버드 혜택을 누릴 수 있습니다.
            </p>
            <p
              className="font-mono text-[10px] tracking-wider text-laf-zinc reveal"
              style={{ transitionDelay: "0.3s" }}
            >
              EARLY ACCESS — FIRST TO KNOW — EXCLUSIVE OFFER
            </p>

            {/* What to expect */}
            <div className="mt-12 space-y-4 reveal" style={{ transitionDelay: "0.4s" }}>
              {[
                "론칭 사전 알림 이메일",
                "얼리버드 구매 우선권",
                "브랜드 스토리 & 비하인드 소식",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-laf-iron/40 shrink-0" />
                  <span className="font-mono text-[10px] tracking-wider text-laf-iron">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            {status === "success" ? (
              <div className="py-16 border border-laf-iron/20">
                <div className="text-center px-8">
                  <div className="font-mono text-[9px] tracking-superwide text-laf-zinc mb-6">
                    ✓ REGISTERED
                  </div>
                  <p className="font-display text-3xl font-light text-laf-black mb-4">
                    등록 완료
                  </p>
                  <p className="font-body text-[13px] text-laf-iron leading-relaxed">
                    웨이트리스트에 등록되었습니다.<br />
                    론칭 소식을 가장 먼저 보내드릴게요.
                  </p>
                  <p className="font-mono text-[9px] tracking-wider text-laf-zinc mt-8">
                    LOST and FOUND — SS 2025
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-0 border border-laf-iron/15">
                {/* Email input */}
                <div className="border-b border-laf-iron/15">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    placeholder="이메일 주소를 입력하세요"
                    className="w-full bg-transparent px-8 py-6 font-body text-[14px] text-laf-black placeholder-laf-iron/40 outline-none"
                    disabled={status === "loading"}
                  />
                </div>

                {/* Name input (optional) */}
                <div className="border-b border-laf-iron/15">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="이름 (선택사항)"
                    className="w-full bg-transparent px-8 py-5 font-body text-[13px] text-laf-black placeholder-laf-iron/30 outline-none"
                    disabled={status === "loading"}
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <div className="px-8 py-3 bg-laf-iron/5">
                    <p className="font-mono text-[9px] tracking-wider text-laf-iron">
                      ✗ {errorMsg}
                    </p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-8 py-6 bg-laf-black text-laf-offwhite font-mono text-[10px] tracking-superwide hover:bg-laf-charcoal transition-colors duration-300 flex items-center justify-between group disabled:opacity-50"
                >
                  <span>
                    {status === "loading" ? "SUBMITTING..." : "JOIN WAITLIST"}
                  </span>
                  <span className="w-4 h-px bg-current transition-all duration-300 group-hover:w-8" />
                </button>

                {/* Fine print */}
                <div className="px-8 py-4 border-t border-laf-iron/10">
                  <p className="font-mono text-[8px] tracking-wider text-laf-iron/50">
                    이메일은 론칭 알림 목적으로만 사용됩니다. 언제든지 수신 거부할 수 있습니다.
                  </p>
                </div>
              </form>
            )}

            {/* Counter */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border border-laf-fog bg-gradient-to-br from-laf-mist to-laf-smoke"
                  />
                ))}
              </div>
              <p className="font-mono text-[10px] tracking-wider text-laf-iron">
                이미 <span className="text-laf-black font-medium">120+</span>명이 대기 중
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
