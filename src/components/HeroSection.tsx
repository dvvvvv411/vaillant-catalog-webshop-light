
import React from "react";
import { FileDown, Star, Shield, Clock, Award, Zap, Users, ThermometerSun } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="py-16 bg-[#efefef]">
    <div className="container">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
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
          </div>
          
          {/* Rechte Hälfte - Erweiterte Inhalte */}
          <div className="flex-1 flex flex-col justify-center items-center lg:w-1/2 space-y-6">
            {/* Hauptbild mit verbessertem Layout */}
            <div className="relative mb-4">
              <img
                src="https://www.pinaxo.com/cover/f0b480fdff4eaadc88d759ae03dbcdd9/472px/b73ad5d912ef9db47487db60c3b0b257/cover-vaillant-arotherm-plus"
                alt="Vaillant B2B Katalog 2025"
                className="w-64 h-auto object-contain drop-shadow-lg rounded-lg"
                loading="eager"
              />
              <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
                NEU 2025
              </div>
            </div>

            {/* Katalog-Statistiken */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
              <div className="text-center bg-gray-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-xs text-gray-600">Produkte</div>
              </div>
              <div className="text-center bg-gray-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-primary">156</div>
                <div className="text-xs text-gray-600">Seiten</div>
              </div>
              <div className="text-center bg-gray-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-xs text-gray-600">Kategorien</div>
              </div>
            </div>

            {/* Produkt-Highlights */}
            <div className="w-full max-w-sm space-y-2">
              <h3 className="text-sm font-semibold text-gray-700 text-center mb-3">
                Neue Produktkategorien 2025
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-2">
                  <ThermometerSun className="h-4 w-4 text-primary" />
                  <span className="text-xs text-gray-700">Wärmepumpen</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-xs text-gray-700">Hybrid-Systeme</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-xs text-gray-700">Smart Control</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-xs text-gray-700">Service Plus</span>
                </div>
              </div>
            </div>

            {/* Download-Vorteile */}
            <div className="w-full max-w-sm bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-3 text-center">
                Exklusiv für Fachpartner
              </h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Aktuelle Preislisten 2025</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Technische Datenblätter</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Planungstools & Konfiguratoren</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Schulungsunterlagen</span>
                </li>
              </ul>
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
