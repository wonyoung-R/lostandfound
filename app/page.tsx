import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BrandStorySection from "@/components/sections/BrandStorySection";
import ProductSection from "@/components/sections/ProductSection";
import LifestyleSection from "@/components/sections/LifestyleSection";
import WaitlistSection from "@/components/sections/WaitlistSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <BrandStorySection />
      <ProductSection />
      <LifestyleSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
