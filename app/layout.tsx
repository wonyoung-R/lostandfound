import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LOST and FOUND — Urban Essentials",
  description:
    "도심의 라이프스타일에 자연스럽게 녹아드는 무채색 의류 브랜드. 유실물 보관센터에서 착안한, 당신의 일상에 원래 있던 것처럼.",
  keywords: ["LOST and FOUND", "후드", "hoodie", "무채색", "도심", "스트릿", "streetwear"],
  openGraph: {
    title: "LOST and FOUND",
    description: "Always been there. Urban essentials.",
    type: "website",
    siteName: "LOST and FOUND",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${notoSansKR.variable}`}
    >
      <body className="bg-laf-black antialiased font-body">
        {children}
      </body>
    </html>
  );
}
