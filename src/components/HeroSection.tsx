import React from "react";
import { FileDown, Star, Shield, Clock, Award, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
const HeroSection = () => <section className="py-4 bg-[#efefef]">
    <div className="container">
      <div className="bg-white rounded-lg shadow p-6 md:p-8">
        {/* Header with Vaillant Logo and Geschäftskunden */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-3">
            <img src="https://www.vaillant.de/vaillant-de/vaillant-logo-de-2387452.png" alt="Vaillant Logo" className="h-12 w-auto object-contain" />
            <span className="hidden md:inline text-xl font-semibold text-gray-800">Geschäftskunden</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 min-h-[500px] relative">
          {/* Linke Hälfte - Text Content */}
          <div className="flex-1 flex flex-col justify-center items-center text-center lg:w-1/2">
            <div className="max-w-md text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 leading-tight">
                Willkommen zum <span className="text-primary">Vaillant</span> <br />
                <span className="text-primary">B2B Katalog 2025</span>
              </h1>
              <p className="text-lg text-gray-700 mb-4 text-left md:text-center">
                Ihr umfassender Überblick über professionelle Heiztechnik-Lösungen: Von energieeffizienten Wärmepumpen bis zu innovativen Warmwasser-Systemen – alle Produkte mit technischen Spezifikationen, Preisen und Verfügbarkeiten für Fachbetriebe.
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

              <Button asChild size="lg" className="px-7 py-6 h-auto rounded-xl mb-3 text-lg font-semibold bg-primary text-white hover:bg-primary/80 transition-colors">
                <a href="/Vaillant_Katalog_Q2.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <FileDown size={24} />
                  <span>B2B Katalog ansehen</span>
                  <ArrowRight size={20} />
                </a>
              </Button>
              <p className="text-sm text-gray-500 italic">Jetzt neu: Digitale Version verfügbar • 15 Seiten • PDF Format</p>
            </div>
          </div>
          
          {/* Vertikaler Divider - nur auf größeren Bildschirmen sichtbar */}
          <div className="hidden lg:flex">
            <Separator orientation="vertical" className="h-80 bg-accent" />
          </div>
          
          {/* Rechte Hälfte - Bild */}
          <div className="flex-1 flex justify-center items-center lg:w-1/2 h-full">
            <div className="relative w-full max-w-sm">
              <img alt="Vaillant B2B Katalog 2025" className="w-full h-auto object-contain drop-shadow-lg rounded-lg" loading="eager" src="https://i.imgur.com/qVpsN9l.png" />
            </div>
          </div>
        </div>

        {/* Professional Order Notice */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="rounded-lg p-6" style={{
          backgroundColor: 'rgba(0, 145, 126, 0.1)'
        }}>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Professionelle Bestellung & Beratung
            </h3>
            <p className="text-gray-700 mb-4">Für maßgeschneiderte Angebote und persönliche Beratung steht Ihnen unser Fachberater Martin Vogt gerne direkt zur Verfügung.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="h-4 w-4 text-primary" />
                <span className="font-medium">02191 9413997</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="h-4 w-4 text-primary" />
                <span className="font-medium">m.vogt@vaillant-vertrieb.de</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Montag bis Freitag: 8:00 - 17:00 Uhr
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>;
export default HeroSection;
