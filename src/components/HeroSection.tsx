
import React from "react";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="container flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-12 md:py-20">
    <div className="flex-1 flex flex-col items-start animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
        Willkommen zum <span className="text-primary">Vaillant</span> <br />
        <span className="text-primary">B2B Katalog 2025</span>
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Entdecken Sie die neuen Produkte und Lösungen für Profis aus der SHK-Branche – effiziente Heiztechnik, moderne Wärmepumpen, innovative Warmwasser-Systeme. Alles auf einen Blick!
      </p>
      <Button asChild size="lg" className="px-7 py-3 rounded-xl mb-2">
        <a
          href="/vaillant-b2b-katalog-2025.pdf"
          download
          className="flex items-center gap-2"
        >
          <FileDown size={22} />
          <span>B2B Katalog 2025 herunterladen</span>
        </a>
      </Button>
      <span className="text-sm text-gray-500 italic mt-2 animate-fade-in">Jetzt neu: Digitale Version verfügbar</span>
    </div>
    <div className="flex-1 flex justify-center md:justify-end w-full">
      <img
        src="https://www.vaillant.de/img/products/286x286/ecotec-plus-1889856-format-4-3@286@desktop.png"
        alt="Katalog-Visual"
        className="h-60 w-auto object-contain drop-shadow-lg rounded-2xl animate-fade-in"
        loading="eager"
      />
    </div>
  </section>
);

export default HeroSection;
