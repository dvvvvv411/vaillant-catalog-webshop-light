import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const AboutVaillant = () => {
  const cards = [
    {
      title: "Karriere bei der Vaillant Group",
      description: "Mit rund 17.000 Mitarbeitenden weltweit gehört die Vaillant Group zu den führenden Herstellern im Bereich Heizen, Kühlen und Warmwasser. Sie suchen einen Arbeitgeber, der den Klimaschutz mitgestaltet? Aktuell suchen wir besonders im Bereich Service und Kundendienst.",
      ctaText: "Jetzt bewerben!",
      image: "https://www.vaillant.de/vaillant-de/startseite-1/kundendienst-karriere-1869220-format-16-9@431@desktop.jpg",
      href: "http://jobs.vaillant-group.com/go/all-jobs-germany/4817401/",
      external: true
    },
    {
      title: "150 Jahre Vaillant",
      description: "Seit 150 Jahren treiben wir die Wärmewende voran und setzen uns für eine bessere Zukunft ein. Begeben Sie sich auf eine Zeitreise durch die Vaillant Geschichte und erfahren Sie, wie wir unseren Weg zur Gestaltung der Zukunft des Heizens fortsetzen werden.",
      ctaText: "Jetzt entdecken!",
      image: "https://www.vaillant.de/ueber-vaillant/150-jahre-vaillant/231214-vaillant-150-teaser-module-de-claim-2791336-format-16-9@431@desktop.jpg",
      href: "http://www.Vaillant150.com/de_DE",
      external: true
    },
    {
      title: "Vaillant steht für Verantwortung",
      description: "Gemeinsam mit dem WWF macht Vaillant auf die herausragende Bedeutung von Wärmepumpen als umweltfreundliche und energiesparende Heiztechnologie im Rahmen der Wärmewende aufmerksam. Damit einher geht die nachhaltige Transformation des Unternehmens.",
      ctaText: "Jetzt mehr erfahren!",
      image: "https://www.vaillant.de/vaillant-de/4-klima-und-foerderung/wwf-kooperation/wwf-teaser-de-1-2830791-format-16-9@431@desktop.jpg",
      href: "/heizung/klima-foerderung/vaillant-und-wwf/",
      external: false
    }
  ];

  return (
    <section className="py-4 bg-[#efefef]">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-800 text-left">
            Über Vaillant
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-sm transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                  <a 
                    href={card.href}
                    target={card.external ? "_blank" : "_self"}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2"
                  >
                    {card.title}
                    {card.external && <ExternalLink size={16} />}
                  </a>
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {card.description}
                </p>
                <p className="text-primary font-medium">
                  {card.ctaText}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutVaillant;
