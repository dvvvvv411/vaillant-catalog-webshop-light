
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CatalogGrid from "@/components/CatalogGrid";
import HeroSection from "@/components/HeroSection";
import NewHeroSection from "@/components/NewHeroSection";
import WhyVaillant from "@/components/WhyVaillant";
import ProductCategories from "@/components/ProductCategories";
import ServiceSupport from "@/components/ServiceSupport";
import NewsletterSignup from "@/components/NewsletterSignup";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col font-sans">
      <Header />
      <NewHeroSection />
      <main className="flex-1 flex flex-col justify-start">
        <HeroSection />
        <WhyVaillant />
        <ProductCategories />
        <CatalogGrid />
        <ServiceSupport />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
