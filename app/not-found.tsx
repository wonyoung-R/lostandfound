import Link from "next/link";

// 404 페이지 — 유실물 미발견 컨셉
export default function NotFound() {
  return (
    <div className="min-h-screen bg-laf-black flex flex-col items-center justify-center px-6">
      {/* Tag */}
      <div className="mb-12 text-center">
        <div className="inline-block border border-laf-steel/30 px-8 py-3 mb-8">
          <span className="font-mono text-[10px] tracking-superwide text-laf-zinc">
            LOST AND FOUND — REPORT
          </span>
        </div>

        <div className="font-mono text-[9px] tracking-superwide text-laf-iron mb-4">
          ITEM STATUS
        </div>

        <h1 className="font-display text-[20vw] md:text-[15vw] font-light text-laf-charcoal leading-none tracking-tighter">
          404
        </h1>
      </div>

      {/* Message */}
      <div className="text-center max-w-sm mb-16">
        <p className="font-display text-2xl font-light text-laf-offwhite mb-4">
          찾을 수 없습니다.
        </p>
        <p className="font-mono text-[10px] tracking-wider text-laf-zinc leading-loose">
          이 페이지는 유실물 보관소에서도<br />
          찾지 못했습니다.<br />
          <br />
          ITEM NOT FOUND IN STORAGE.
        </p>
      </div>

      {/* Receipt divider */}
      <div className="w-full max-w-xs border-t border-dashed border-laf-steel/20 mb-8" />

      {/* Back link */}
      <Link
        href="/"
        className="group inline-flex items-center gap-4 font-mono text-[10px] tracking-superwide text-laf-zinc hover:text-laf-offwhite transition-colors duration-200"
      >
        <span className="w-6 h-px bg-current transition-all duration-300 group-hover:w-10" />
        RETURN TO RECEPTION
      </Link>

      <div className="mt-16 font-mono text-[8px] tracking-superwide text-laf-iron/30">
        LOST AND FOUND — REFERENCE: PAGE-404-NULL
      </div>
    </div>
  );
}
