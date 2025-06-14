
import React from "react";
import { Phone, Mail, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceSupport = () => (
  <section className="container py-10">
    <h2 className="text-2xl md:text-3xl font-semibold mb-7 text-center text-gray-800">
      Service &amp; Support für Fachpartner
    </h2>
    <div className="flex flex-col md:flex-row gap-7 items-center md:justify-center">
      <div className="bg-white rounded-2xl p-6 shadow w-full md:w-1/2 flex flex-col items-center animate-fade-in">
        <HelpCircle size={34} className="text-primary mb-2" />
        <div className="font-bold mb-2">Technischer Support</div>
        <span className="text-gray-600 text-center mb-2">
          Unsere Experten unterstützen Sie telefonisch bei Planung, Installation &amp; Wartung.
        </span>
        <Button asChild className="mt-2">
          <a href="tel:0800123456" aria-label="Hotline anrufen">
            <Phone className="mr-2" size={18} /> 0800 123456
          </a>
        </Button>
        <span className="text-xs text-gray-400 mt-2">Mo-Fr: 8–18 Uhr</span>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow w-full md:w-1/2 flex flex-col items-center animate-fade-in">
        <Mail size={34} className="text-primary mb-2" />
        <div className="font-bold mb-2">Kontaktformular</div>
        <span className="text-gray-600 mb-2 text-center">
          Sie haben Fragen oder Anliegen? Schreiben Sie uns – wir antworten schnell und kompetent.
        </span>
        <Button asChild className="mt-2">
          <a href="mailto:support@vaillant.de" aria-label="Kontakt per Email">
            <Mail className="mr-2" size={18} /> support@vaillant.de
          </a>
        </Button>
        <span className="text-xs text-gray-400 mt-2">Antwort i. d. R. innerhalb von 24h</span>
      </div>
    </div>
  </section>
);

export default ServiceSupport;
