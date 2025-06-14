
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NewHeroSection = () => (
  <section className="w-full">
    <div className="container">
      <div 
        className="relative h-[600px] overflow-hidden rounded-lg flex items-center"
        style={{
          backgroundImage: "url('https://professional.vaillant.co.uk/images/b2b-1/150-years-hare-header-left-2812276-format-16-9@431@retina.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div 
          className="absolute inset-0 rounded-lg"
          style={{
            background: "linear-gradient(to right, #00917e 0%, rgba(0, 145, 126, 0.8) 15%, rgba(0, 145, 126, 0.4) 30%, rgba(0, 145, 126, 0.2) 45%, transparent 70%)"
          }}
        />
        
        {/* Left side content */}
        <div className="relative z-10 flex-1 px-8">
          <div className="text-white max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Vaillant
            </h1>
            <p className="text-lg md:text-xl opacity-90 drop-shadow-md">
              Innovative Heiztechnik für Ihr Zuhause
            </p>
          </div>
        </div>

        {/* Right side card - now wider and full height with right margin */}
        <div className="relative z-10 flex-shrink-0 h-full flex items-center mr-8">
          <Card className="w-96 h-full bg-white shadow-lg rounded-l-lg rounded-r-none flex flex-col">
            <CardContent className="p-8 flex-1 flex flex-col justify-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Ihre Vorteile mit Vaillant
              </h2>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Höchste Qualität und Zuverlässigkeit</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Energieeffiziente Lösungen</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Kompetente Beratung und Service</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Innovative Technologie</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                Mehr erfahren
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default NewHeroSection;
