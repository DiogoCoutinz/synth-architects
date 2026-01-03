import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import ProductsSection from "@/components/ProductsSection";
import CRMFormSection from "@/components/CRMFormSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhatIDoSection />
      <ProductsSection />
      <CRMFormSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
