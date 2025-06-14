
import React from "react";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="py-16 bg-[#efefef]">
    <div className="container">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
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
            <p className="text-sm text-gray-500 italic mt-2">Jetzt neu: Digitale Version verfügbar</p>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src="https://www.pinaxo.com/cover/f0b480fdff4eaadc88d759ae03dbcdd9/472px/b73ad5d912ef9db47487db60c3b0b257/cover-vaillant-arotherm-plus"
              alt="Vaillant B2B Katalog 2025"
              className="w-full max-w-sm h-auto object-contain drop-shadow-lg rounded-lg"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
