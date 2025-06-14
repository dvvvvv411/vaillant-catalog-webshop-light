import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

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

        <div className="relative z-10 flex-shrink-0 h-full flex items-center mr-8">
          <Card className="w-[28rem] h-full bg-white shadow-lg rounded-l-lg rounded-r-none flex flex-col">
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
                  className="w-full bg-primary text-white hover:bg-primary/90 rounded-full px-6 py-3 h-auto leading-tight"
                >
                  <span className="text-center">
                    Jetzt unverbindliches Angebot<br />anfordern
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default NewHeroSection;
