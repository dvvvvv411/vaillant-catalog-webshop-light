
import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="bg-vaillant-dark text-white">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <img
            src="https://www.vaillant.at/media-master/global-media/layout/logos/old/vaillant-logo-272x72-1888261.png"
            alt="Vaillant Logo"
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="text-gray-300 leading-relaxed">
            Seit über 150 Jahren entwickeln wir innovative Heiztechnik für nachhaltige Wärme und Warmwasser.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-vaillant-teal transition-colors duration-300">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-vaillant-teal transition-colors duration-300">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-vaillant-teal transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-vaillant-teal transition-colors duration-300">
              <Youtube size={24} />
            </a>
          </div>
        </div>

        {/* Products */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white">Produkte</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-300 hover:text-vaillant-teal transition-colors duration-300">Heiztechnik</a></li>
            <li><a href="#" className="text-gray-300 hover:text-vaillant-teal transition-colors duration-300">Wärmepumpen</a></li>
            <li><a href="#" className="text-gray-300 hover:text-vaillant-teal transition-colors duration-300">Warmwasser</a></li>
            <li><a href="#" className="text-gray-300 hover:text-vaillant-teal transition-colors duration-300">Systemtechnik</a></li>
            <li><a href="#" className="text-gray-300 hover:text-vaillant-teal transition-colors duration-300">Zubehör</a></li>
          </ul>
        </div>

        {/* Service */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white">Service</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-300 hover:text-vaillant-teal transition-colors duration-300">Technischer Support</a></li>
            <li><a href="#" className="text-gray-300 hover:text-vaillant-teal transition-colors duration-300">Schulungen</a></li>
            <li><a href="#" className="text-gray-300 hover:text-vaillant-teal transition-colors duration-300">Planungstools</a></li>
            <li><a href="#" className="text-gray-300 hover:text-vaillant-teal transition-colors duration-300">Garantie</a></li>
            <li><a href="#" className="text-gray-300 hover:text-vaillant-teal transition-colors duration-300">Downloads</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white">Kontakt</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone size={20} className="text-vaillant-teal mt-1 flex-shrink-0" />
              <div>
                <p className="text-white font-medium">Service Hotline</p>
                <p className="text-gray-300">0800 123 456</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={20} className="text-vaillant-teal mt-1 flex-shrink-0" />
              <div>
                <p className="text-white font-medium">E-Mail</p>
                <p className="text-gray-300">info@vaillant.de</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-vaillant-teal mt-1 flex-shrink-0" />
              <div>
                <p className="text-white font-medium">Adresse</p>
                <p className="text-gray-300">Berghauser Str. 40<br />42859 Remscheid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-700">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Vaillant Group — Alle Rechte vorbehalten.
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-gray-400 hover:text-vaillant-teal transition-colors duration-300">
            Impressum
          </a>
          <a href="#" className="text-gray-400 hover:text-vaillant-teal transition-colors duration-300">
            Datenschutz
          </a>
          <a href="#" className="text-gray-400 hover:text-vaillant-teal transition-colors duration-300">
            AGB
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
