import React from "react";
import { FileDown, Star, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => <section className="py-4 bg-[#efefef]">
    <div className="container">
      <div className="bg-white rounded-lg shadow p-6 md:p-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 min-h-[500px]">
          {/* Linke Hälfte - Text Content */}
          <div className="flex-1 flex flex-col justify-center items-center text-center lg:w-1/2">
            <div className="max-w-md">
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
                <a href="/vaillant-b2b-katalog-2025.pdf" download className="flex items-center gap-2">
                  <FileDown size={22} />
                  <span>B2B Katalog 2025 herunterladen</span>
                </a>
              </Button>
              <p className="text-sm text-gray-500 italic">
                Jetzt neu: Digitale Version verfügbar • 156 Seiten • PDF Format
              </p>
            </div>
          </div>
          
          {/* Rechte Hälfte - Bild */}
          <div className="flex-1 flex justify-center items-center lg:w-1/2 h-full">
            <div className="relative w-full max-w-sm">
              <img alt="Vaillant B2B Katalog 2025" className="w-full h-auto object-contain drop-shadow-lg rounded-lg" loading="eager" src="https://i.imgur.com/qVpsN9l.png" />
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
  </section>;
export default HeroSection;