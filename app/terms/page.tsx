import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-laf-black px-6 md:px-10 lg:px-16 py-32">
      <div className="max-w-screen-md mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-12 bg-laf-steel/30" />
          <span className="font-mono text-[9px] tracking-superwide text-laf-zinc">
            TERMS OF SERVICE
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-light text-laf-offwhite tracking-tight mb-16">
          이용약관
        </h1>

        <div className="space-y-12 font-body text-[14px] text-laf-ash leading-loose">
          <section>
            <h2 className="font-mono text-[10px] tracking-superwide text-laf-zinc mb-4">
              1. 목적
            </h2>
            <p>
              본 약관은 LOST and FOUND(이하 &ldquo;브랜드&rdquo;)가 제공하는 웹사이트 및 관련 서비스의
              이용 조건을 정합니다.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-[10px] tracking-superwide text-laf-zinc mb-4">
              2. 서비스 이용
            </h2>
            <p>
              본 웹사이트는 브랜드 소개 및 제품 정보 제공, 웨이트리스트 등록 서비스를 제공합니다.
              실제 상품 구매는 별도의 판매 플랫폼을 통해 이루어집니다.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-[10px] tracking-superwide text-laf-zinc mb-4">
              3. 지식재산권
            </h2>
            <p>
              본 웹사이트에 게시된 모든 콘텐츠(이미지, 텍스트, 디자인, 로고 등)는 LOST and FOUND에
              귀속되며, 무단 복제 및 배포를 금지합니다.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-[10px] tracking-superwide text-laf-zinc mb-4">
              4. 면책 조항
            </h2>
            <p>
              브랜드는 웹사이트의 일시적인 중단이나 기술적 오류로 인한 손해에 대해
              책임을 지지 않습니다. 서비스 개선을 위해 사전 고지 후 내용을 변경할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-[10px] tracking-superwide text-laf-zinc mb-4">
              5. 분쟁 해결
            </h2>
            <p>
              본 약관과 관련된 분쟁은 대한민국 법률에 따르며,
              관할 법원은 서울중앙지방법원으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-[10px] tracking-superwide text-laf-zinc mb-4">
              6. 문의
            </h2>
            <p>
              서비스 이용 관련 문의: hello@lostandfound.kr
            </p>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-20 pt-8 border-t border-laf-steel/10">
          <Link
            href="/"
            className="group inline-flex items-center gap-4 font-mono text-[10px] tracking-superwide text-laf-zinc hover:text-laf-offwhite transition-colors duration-200"
          >
            <span className="w-6 h-px bg-current transition-all duration-300 group-hover:w-10" />
            RETURN TO MAIN
          </Link>
        </div>
      </div>
    </div>
  );
}
