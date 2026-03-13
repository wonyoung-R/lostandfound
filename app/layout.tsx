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

const SITE_URL = "https://laf2023.com";

function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LOST and FOUND",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo/logo.png`,
    description: "도심의 라이프스타일에 자연스럽게 녹아드는 무채색 의류 브랜드",
    email: "hello@lostandfound.kr",
    sameAs: ["https://www.instagram.com/lostandfound_official"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LOST and FOUND",
    url: SITE_URL,
    description: "마치 원래 내 것이었던 듯이. Urban essentials for the modern city dweller.",
    inLanguage: "ko",
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "LAF04 LOST and FOUND Hoodie",
    description: "도심의 라이프스타일에 자연스럽게 녹아드는 후디. 유실물 보관소에서 착안한 미니멀 디자인.",
    brand: { "@type": "Brand", name: "LOST and FOUND" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "KRW",
      lowPrice: "89000",
      highPrice: "89000",
      availability: "https://schema.org/InStock",
    },
    image: `${SITE_URL}/images/products/BK_front.jpg`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LOST and FOUND — Urban Essentials",
    template: "%s | LOST and FOUND",
  },
  description:
    "도심의 라이프스타일에 자연스럽게 녹아드는 무채색 의류 브랜드. 유실물 보관센터에서 착안한, 당신의 일상에 원래 있던 것처럼. Monochrome streetwear brand inspired by urban lost and found.",
  keywords: [
    "LOST and FOUND",
    "후드",
    "hoodie",
    "무채색",
    "도심",
    "스트릿",
    "streetwear",
    "Korean fashion",
    "urban essentials",
    "로스트앤파운드",
    "유실물보관소",
    "미니멀 패션",
  ],
  authors: [{ name: "LOST and FOUND" }],
  creator: "LOST and FOUND",
  publisher: "LOST and FOUND",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LOST and FOUND — Urban Essentials",
    description: "마치 원래 내 것이었던 듯이. Always been there. Urban essentials for the modern city dweller.",
    type: "website",
    siteName: "LOST and FOUND",
    url: SITE_URL,
    locale: "ko_KR",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LOST and FOUND — Urban Essentials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LOST and FOUND — Urban Essentials",
    description: "마치 원래 내 것이었던 듯이. 도심의 라이프스타일에 자연스럽게 녹아드는 무채색 의류 브랜드.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${spaceGrotesk.variable} ${notoSansKR.variable}`}
    >
      <body className="bg-laf-black antialiased font-body">
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
