
import React from "react";
import { FileDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-vaillant-light-gray to-white overflow-hidden">
    <div className="container flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-16 lg:py-24">
      <div className="flex-1 max-w-2xl animate-fade-in">
        <div className="inline-flex items-center gap-2 bg-vaillant-teal/10 text-vaillant-teal px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-vaillant-teal rounded-full"></span>
          Neu: B2B Katalog 2025
        </div>
        <h1 className="text-4xl lg:text-6xl font-bold text-vaillant-dark mb-6 leading-tight">
          Innovative <span className="text-vaillant-teal">Heiztechnik</span> für Profis
        </h1>
        <p className="text-xl text-vaillant-gray mb-8 leading-relaxed">
          Entdecken Sie unsere neuesten Lösungen für die SHK-Branche. Effiziente Wärmepumpen, moderne Gas-Brennwertgeräte und innovative Warmwasser-Systeme.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="text-base px-8 py-4 h-auto">
            <a
              href="/vaillant-b2b-katalog-2025.pdf"
              download
              className="flex items-center gap-3"
            >
              <FileDown size={20} />
              <span>B2B Katalog herunterladen</span>
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8 py-4 h-auto border-vaillant-teal text-vaillant-teal hover:bg-vaillant-teal hover:text-white">
            <a href="#katalog" className="flex items-center gap-3">
              <span>Produkte entdecken</span>
              <ArrowRight size={18} />
            </a>
          </Button>
        </div>
        <div className="flex items-center gap-6 mt-8 text-sm text-vaillant-gray">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Digitale Version verfügbar</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>Über 200 Produkte</span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center lg:justify-end animate-slide-up">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-vaillant-teal/20 to-blue-500/20 rounded-3xl blur-3xl transform -rotate-6"></div>
          <img
            src="https://www.vaillant.de/img/products/286x286/ecotec-plus-1889856-format-4-3@286@desktop.png"
            alt="Vaillant ecoTEC plus"
            className="relative h-80 w-auto object-contain drop-shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
