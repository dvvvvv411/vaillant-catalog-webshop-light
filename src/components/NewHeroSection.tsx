
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const NewHeroSection = () => {
  const scrollToB2BCatalog = () => {
    // First try to find the button element directly
    const buttons = document.querySelectorAll('button');
    let targetButton = null;
    
    for (let button of buttons) {
      if (button.textContent?.includes('B2B Katalog herunterladen')) {
        targetButton = button;
        break;
      }
    }
    
    // If button found, scroll to it
    if (targetButton) {
      targetButton.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
      return;
    }
    
    // Fallback: search for any element containing the text
    const elements = document.querySelectorAll('*');
    let targetElement = null;
    
    for (let element of elements) {
      if (element.textContent?.includes('B2B Katalog herunterladen')) {
        targetElement = element as HTMLElement;
        break;
      }
    }
    
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    } else {
      console.warn('B2B Katalog section not found');
    }
  };

  return (
    <section className="w-full pb-3">
      <div className="container">
        <div className="relative h-[600px] overflow-hidden rounded-lg flex items-center" style={{
        backgroundImage: "url('https://i.imgur.com/CjKKg5X.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>

          <div className="relative z-10 flex-shrink-0 h-full flex items-center ml-auto mr-8">
            <Card className="w-[28rem] h-full bg-gray-50 shadow rounded-l-lg rounded-r-none flex flex-col">
              <CardContent className="p-8 flex-1 flex flex-col justify-start pt-24">
                <div className="space-y-4">
                  <h1 className="text-2xl text-gray-800 text-left">Exklusive B2B-Angebote mit Vaillant</h1>
                  <ol className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">Attraktive Konditionen</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">Innovative Heiztechnik</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">Zertifizierte Fachpartner in Ihrer Nähe</span>
                    </li>
                  </ol>
                  <Button 
                    onClick={scrollToB2BCatalog}
                    className="w-full bg-primary text-white hover:bg-primary/90 rounded-3xl px-6 py-3 h-auto leading-tight"
                  >
                    <span className="text-center text-lg">
                      Jetzt B2B-Katalog anfordern
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-20 z-20" style={{
          backgroundImage: "url('https://i.imgur.com/QYAYNJv.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }} />
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;
