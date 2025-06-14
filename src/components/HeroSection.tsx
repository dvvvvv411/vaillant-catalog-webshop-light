
import React from "react";
import { FileDown, Star, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="py-16 bg-[#efefef]">
    <div className="container">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Linke Hälfte - Text Content */}
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 leading-tight">
              Willkommen zum <span className="text-primary">Vaillant</span> <br />
              <span className="text-primary">B2B Katalog 2025</span>
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Entdecken Sie die neuen Produkte und Lösungen für Profis aus der SHK-Branche – effiziente Heiztechnik, moderne Wärmepumpen, innovative Warmwasser-Systeme. Alles auf einen Blick!
            </p>
            
            {/* Feature-Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Star className="h-4 w-4 text-primary" />
                <span>Neueste Produktinnovationen</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="h-4 w-4 text-primary" />
                <span>Garantierte Qualität</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4 text-primary" />
                <span>Schnelle Lieferzeiten</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Award className="h-4 w-4 text-primary" />
                <span>Profi-Lösungen</span>
              </div>
            </div>

            <Button asChild size="lg" className="px-7 py-3 rounded-xl mb-3">
              <a
                href="/vaillant-b2b-katalog-2025.pdf"
                download
                className="flex items-center gap-2"
              >
                <FileDown size={22} />
                <span>B2B Katalog 2025 herunterladen</span>
              </a>
            </Button>
            <p className="text-sm text-gray-500 italic">
              Jetzt neu: Digitale Version verfügbar • 156 Seiten • PDF Format
            </p>
          </div>
          
          {/* Rechte Hälfte - Bild und Animationen */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative mt-6 lg:mt-0">
            <div className="relative">
              {/* Hintergrund-Kreis für Animation */}
              <div className="absolute inset-0 w-80 h-80 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full animate-pulse -z-10"></div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/20 rounded-full animate-bounce delay-100"></div>
              <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-primary/30 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-primary/25 rounded-full animate-pulse delay-200"></div>
              
              {/* Katalog Bild */}
              <img
                src="https://www.pinaxo.com/cover/f0b480fdff4eaadc88d759ae03dbcdd9/472px/b73ad5d912ef9db47487db60c3b0b257/cover-vaillant-arotherm-plus"
                alt="Vaillant B2B Katalog 2025"
                className="w-72 h-auto object-contain drop-shadow-2xl rounded-lg z-10 relative hover:scale-105 transition-transform duration-300"
                loading="eager"
              />
              
              {/* NEU Badge */}
              <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full font-medium z-20 animate-pulse">
                NEU 2025
              </div>
            </div>
          </div>
        </div>
        
        {/* Zusätzliche Info-Leiste */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex flex-wrap items-center justify-between text-sm text-gray-600">
            <span>✓ Über 200 Produkte im Katalog</span>
            <span>✓ Technische Datenblätter inklusive</span>
            <span>✓ Preislisten für Fachpartner</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
