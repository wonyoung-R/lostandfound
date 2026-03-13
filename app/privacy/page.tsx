import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "LOST and FOUND 개인정보처리방침. 웨이트리스트 등록 시 수집하는 개인정보 및 이용 목적에 대해 안내합니다.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-laf-black px-6 md:px-10 lg:px-16 py-32">
      <div className="max-w-screen-md mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-12 bg-laf-steel/30" />
          <span className="font-mono text-[9px] tracking-superwide text-laf-zinc">
            PRIVACY POLICY
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-light text-laf-offwhite tracking-tight mb-16">
          개인정보처리방침
        </h1>

        <div className="space-y-12 font-body text-[14px] text-laf-ash leading-loose">
          <section>
            <h2 className="font-mono text-[10px] tracking-superwide text-laf-zinc mb-4">
              1. 수집하는 개인정보
            </h2>
            <p>
              LOST and FOUND는 웨이트리스트 등록을 위해 이메일 주소와 이름(선택)을 수집합니다.
              그 외 추가적인 개인정보는 수집하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-[10px] tracking-superwide text-laf-zinc mb-4">
              2. 수집 목적
            </h2>
            <p>
              수집된 정보는 신제품 출시 알림, 브랜드 소식 전달 목적으로만 사용됩니다.
              마케팅 목적의 제3자 제공은 하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-[10px] tracking-superwide text-laf-zinc mb-4">
              3. 보유 및 이용 기간
            </h2>
            <p>
              수집된 개인정보는 수집 목적이 달성되거나 이용자가 삭제를 요청할 때까지 보유합니다.
              수신 거부 시 즉시 파기합니다.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-[10px] tracking-superwide text-laf-zinc mb-4">
              4. 이용자의 권리
            </h2>
            <p>
              이용자는 언제든지 등록된 정보의 열람, 수정, 삭제를 요청할 수 있습니다.
              요청은 hello@lostandfound.kr로 연락해 주세요.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-[10px] tracking-superwide text-laf-zinc mb-4">
              5. 안전성 확보 조치
            </h2>
            <p>
              개인정보의 안전한 처리를 위해 SSL 암호화 통신을 적용하고 있으며,
              접근 권한을 최소한으로 관리합니다.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-[10px] tracking-superwide text-laf-zinc mb-4">
              6. 문의
            </h2>
            <p>
              개인정보 관련 문의: hello@lostandfound.kr
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
