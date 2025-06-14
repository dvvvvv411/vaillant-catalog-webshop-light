
import React from "react";
import { Phone, Mail, HelpCircle, MessageCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ServiceSupport = () => (
  <section className="py-20 bg-gradient-to-br from-vaillant-light-gray to-gray-50">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-vaillant-dark">
          Service &amp; Support für Fachpartner
        </h2>
        <p className="text-xl text-vaillant-gray max-w-3xl mx-auto">
          Professionelle Unterstützung für Ihren Erfolg – von der Planung bis zur Wartung
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="group border-0 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
              <Phone size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-vaillant-dark">Technische Hotline</h3>
            <p className="text-vaillant-gray mb-6">
              Direkter Draht zu unseren Technik-Experten für schnelle Hilfe bei allen Fragen.
            </p>
            <Button asChild className="w-full mb-4">
              <a href="tel:0800123456" aria-label="Hotline anrufen">
                <Phone className="mr-2" size={18} />
                0800 123 456
              </a>
            </Button>
            <div className="flex items-center justify-center gap-2 text-sm text-vaillant-gray">
              <Clock size={16} />
              <span>Mo-Fr: 7:00-18:00 Uhr</span>
            </div>
          </CardContent>
        </Card>

        <Card className="group border-0 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 transition-colors duration-300">
              <MessageCircle size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-vaillant-dark">Online Support</h3>
            <p className="text-vaillant-gray mb-6">
              Chat-Support und umfassendes Online-Portal mit Dokumentationen und Tools.
            </p>
            <Button asChild variant="outline" className="w-full mb-4 border-green-200 text-green-700 hover:bg-green-50">
              <a href="#" aria-label="Online Support öffnen">
                <MessageCircle className="mr-2" size={18} />
                Live Chat starten
              </a>
            </Button>
            <div className="flex items-center justify-center gap-2 text-sm text-vaillant-gray">
              <Users size={16} />
              <span>24/7 verfügbar</span>
            </div>
          </CardContent>
        </Card>

        <Card className="group border-0 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-100 transition-colors duration-300">
              <HelpCircle size={32} className="text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-vaillant-dark">Schulungen</h3>
            <p className="text-vaillant-gray mb-6">
              Praxisnahe Schulungen und Weiterbildungen für Installateure und Servicetechniker.
            </p>
            <Button asChild variant="outline" className="w-full mb-4 border-orange-200 text-orange-700 hover:bg-orange-50">
              <a href="mailto:schulung@vaillant.de" aria-label="Schulungen anfragen">
                <Mail className="mr-2" size={18} />
                Schulung anfragen
              </a>
            </Button>
            <div className="flex items-center justify-center gap-2 text-sm text-vaillant-gray">
              <HelpCircle size={16} />
              <span>Zertifizierte Kurse</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default ServiceSupport;
