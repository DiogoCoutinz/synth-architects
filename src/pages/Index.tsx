import HeroSection from "@/components/HeroSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import HowIWorkSection from "@/components/HowIWorkSection";
import ProductsSection from "@/components/ProductsSection";
import ProductHighlight from "@/components/ProductHighlight";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhatIDoSection />
      <HowIWorkSection />
      <ProductsSection />
      <ProductHighlight />
      <Footer />
    </div>
  );
};

export default Index;
