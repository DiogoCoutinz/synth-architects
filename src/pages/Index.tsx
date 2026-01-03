import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CRMFormDialog from "@/components/CRMFormDialog";
import TargetCursor from "@/components/TargetCursor";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Quando o Hero sai da viewport (não está intersectando), mostra o cursor
        setShowCursor(!entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger quando menos de 10% do Hero está visível
        rootMargin: "-100px 0px 0px 0px" // Adiciona margem para trigger um pouco antes
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div ref={heroRef}>
        <HeroSection />
      </div>
      {/* Target cursor apenas para secções depois do Hero */}
      {showCursor && (
        <TargetCursor 
          targetSelector=".cursor-target"
          spinDuration={2}
          hideDefaultCursor={false}
          parallaxOn={true}
        />
      )}
      <WhatIDoSection onContactClick={() => setIsFormOpen(true)} />
      <ProductsSection />
      <ContactSection onContactClick={() => setIsFormOpen(true)} />
      <Footer />
      <CRMFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </div>
  );
};

export default Index;
