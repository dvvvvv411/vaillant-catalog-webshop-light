

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Mail, Phone } from "lucide-react";

const NewHeroSection = () => (
  <section className="w-full pb-3">
    <div className="container">
      <div 
        className="relative h-[600px] overflow-hidden rounded-lg flex items-center"
        style={{
          backgroundImage: "url('https://www.vaillant.de/vaillant-de/startseite-1/titelbilder-startseite/vai-de-foedermotiv2025-startseite-header-3700x1680-2999392-format-24-9@1440@desktop.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >

        <div className="relative z-10 flex-shrink-0 h-full flex items-center ml-auto mr-8">
          <Card className="w-[28rem] h-full bg-gray-50 shadow rounded-l-lg rounded-r-none flex flex-col">
            <CardContent className="p-8 flex-1 flex flex-col justify-start pt-24">
              <div className="space-y-4">
                <h1 className="text-2xl text-gray-800 text-left">
                  Zukunftsfähige Heizlösungen mit Vaillant
                </h1>
                <ol className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">Hohe Qualität</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">Modernste Technik</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">Fachhandwerksbetriebe in Ihrer Nähe</span>
                  </li>
                </ol>
                <Button 
                  className="w-full bg-primary text-white hover:bg-primary/90 rounded-3xl px-6 py-3 h-auto leading-tight"
                >
                  <span className="text-center text-lg">
                    Jetzt unverbindliches Angebot<br />anfordern
                  </span>
                </Button>
                
                {/* Bestellhinweis */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-700 font-medium mb-2">Bestellungen bitte über:</p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4 text-primary" />
                      <a href="mailto:info@vaillant-vertrieb.de" className="hover:text-primary">
                        info@vaillant-vertrieb.de
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4 text-primary" />
                      <a href="tel:02191 9413997" className="hover:text-primary">
                        02191 9413997
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div 
          className="absolute bottom-0 left-0 right-0 h-20 z-20"
          style={{
            backgroundImage: "url('https://i.imgur.com/QYAYNJv.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
      </div>
    </div>
  </section>
);

export default NewHeroSection;

