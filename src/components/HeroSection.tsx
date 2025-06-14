
import React from "react";
import { FileDown, Star, Shield, Clock, Award, Zap, Thermometer, Droplets } from "lucide-react";
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
          
          {/* Rechte Hälfte - Bild mit Animationen */}
          <div className="flex-1 flex justify-center items-center lg:w-1/2 relative">
            {/* Schwebende Icons - Oben Links */}
            <div className="absolute top-8 left-8 animate-pulse">
              <div className="bg-primary/10 p-3 rounded-full">
                <Thermometer className="h-6 w-6 text-primary" />
              </div>
            </div>
            
            {/* Schwebende Icons - Oben Rechts */}
            <div className="absolute top-4 right-12 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <div className="bg-green-100 p-2 rounded-full">
                <Zap className="h-5 w-5 text-green-600" />
              </div>
            </div>
            
            {/* Schwebende Icons - Links Mitte */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}>
              <div className="bg-blue-100 p-2 rounded-full">
                <Droplets className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            
            {/* Schwebende Icons - Rechts Mitte */}
            <div className="absolute right-8 top-1/3 animate-bounce" style={{ animationDelay: '1.5s' }}>
              <div className="bg-orange-100 p-3 rounded-full">
                <Shield className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            
            {/* Schwebende Icons - Unten Links */}
            <div className="absolute bottom-12 left-12 animate-pulse" style={{ animationDelay: '2s' }}>
              <div className="bg-purple-100 p-2 rounded-full">
                <Star className="h-5 w-5 text-purple-600" />
              </div>
            </div>
            
            {/* Schwebende Icons - Unten Rechts */}
            <div className="absolute bottom-8 right-4 animate-bounce" style={{ animationDelay: '2.5s' }}>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
            
            {/* Dekorative Kreise im Hintergrund */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-16 left-16 w-20 h-20 bg-primary/5 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute top-32 right-20 w-16 h-16 bg-green-200/30 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
              <div className="absolute bottom-24 left-8 w-24 h-24 bg-blue-200/20 rounded-full animate-pulse" style={{ animationDelay: '1.3s' }}></div>
              <div className="absolute bottom-16 right-16 w-18 h-18 bg-orange-200/25 rounded-full animate-pulse" style={{ animationDelay: '1.8s' }}></div>
            </div>
            
            {/* Hauptbild */}
            <div className="relative z-10">
              <img
                src="https://www.pinaxo.com/cover/f0b480fdff4eaadc88d759ae03dbcdd9/472px/b73ad5d912ef9db47487db60c3b0b257/cover-vaillant-arotherm-plus"
                alt="Vaillant B2B Katalog 2025"
                className="w-64 h-auto object-contain drop-shadow-lg rounded-lg hover:scale-105 transition-transform duration-300"
                loading="eager"
              />
              <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse">
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
