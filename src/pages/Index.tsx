
import React from "react";
import Header from "@/components/Header";
import VaillantFooter from "@/components/VaillantFooter";
import HeroSection from "@/components/HeroSection";
import NewHeroSection from "@/components/NewHeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import AboutVaillant from "@/components/AboutVaillant";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#efefef] flex flex-col font-sans">
      <Header />
      <NewHeroSection />
      <IntroductionSection />
      <main className="flex-1 flex flex-col justify-start">
        <HeroSection />
        <AboutVaillant />
      </main>
      <VaillantFooter />
    </div>
  );
};

export default Index;
