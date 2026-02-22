// 유실물 보관증 태그 컴포넌트 — 브랜드 시그니처 UI
export default function LostTag({
  itemNo = "LF-2025-001",
  category = "HOODIE",
  status = "UNCLAIMED",
  className = "",
}: {
  itemNo?: string;
  category?: string;
  status?: string;
  className?: string;
}) {
  const today = new Date();
  const dateStr = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, "0")}.${String(today.getDate()).padStart(2, "0")}`;

  return (
    <div
      className={`relative inline-block font-mono ${className}`}
      style={{ fontFamily: "'Courier New', monospace" }}
    >
      {/* Tag SVG */}
      <svg
        viewBox="0 0 180 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Tag body */}
        <rect
          x="1"
          y="30"
          width="178"
          height="228"
          rx="3"
          fill="#0A0A0A"
          stroke="#3D3D3D"
          strokeWidth="1"
        />

        {/* Hole for string at top */}
        <circle cx="90" cy="18" r="10" fill="#0A0A0A" stroke="#3D3D3D" strokeWidth="1" />

        {/* String */}
        <path
          d="M 90 8 C 95 2 110 0 120 5"
          stroke="#4F4F4F"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Top divider */}
        <line x1="12" y1="55" x2="168" y2="55" stroke="#2E2E2E" strokeWidth="0.5" />

        {/* Bottom divider */}
        <line x1="12" y1="220" x2="168" y2="220" stroke="#2E2E2E" strokeWidth="0.5" />

        {/* Barcode lines at bottom */}
        {[0, 4, 7, 12, 15, 20, 24, 28, 32, 37, 40, 45, 49, 52, 56, 60].map(
          (x) => (
            <rect
              key={x}
              x={12 + x * 2}
              y="228"
              width={x % 4 === 0 ? 3 : 1.5}
              height="22"
              fill="#2E2E2E"
            />
          )
        )}

        {/* Text content */}
        {/* LOST AND FOUND brand */}
        <text x="12" y="48" fill="#6B6B6B" fontSize="7" letterSpacing="3">
          LOST AND FOUND
        </text>

        {/* Item No label */}
        <text x="12" y="80" fill="#4F4F4F" fontSize="6" letterSpacing="2">
          ITEM NO.
        </text>
        <text x="12" y="95" fill="#8A8A8A" fontSize="10" letterSpacing="2">
          {itemNo}
        </text>

        {/* Divider */}
        <line x1="12" y1="106" x2="168" y2="106" stroke="#1E1E1E" strokeWidth="0.5" strokeDasharray="3,3" />

        {/* Date */}
        <text x="12" y="125" fill="#4F4F4F" fontSize="6" letterSpacing="2">
          DATE RECEIVED
        </text>
        <text x="12" y="140" fill="#6B6B6B" fontSize="9" letterSpacing="1.5">
          {dateStr}
        </text>

        {/* Divider */}
        <line x1="12" y1="151" x2="168" y2="151" stroke="#1E1E1E" strokeWidth="0.5" strokeDasharray="3,3" />

        {/* Category */}
        <text x="12" y="170" fill="#4F4F4F" fontSize="6" letterSpacing="2">
          CATEGORY
        </text>
        <text x="12" y="185" fill="#6B6B6B" fontSize="9" letterSpacing="1.5">
          {category}
        </text>

        {/* Divider */}
        <line x1="12" y1="196" x2="168" y2="196" stroke="#1E1E1E" strokeWidth="0.5" strokeDasharray="3,3" />

        {/* Status */}
        <text x="12" y="213" fill="#4F4F4F" fontSize="6" letterSpacing="2">
          STATUS
        </text>
        {/* Status value - right aligned */}
        <text
          x="168"
          y="213"
          fill={status === "UNCLAIMED" ? "#4F4F4F" : "#8A8A8A"}
          fontSize="7"
          letterSpacing="1.5"
          textAnchor="end"
        >
          {status}
        </text>
      </svg>
    </div>
  );
}
