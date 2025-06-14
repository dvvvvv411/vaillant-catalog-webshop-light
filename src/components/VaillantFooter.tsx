
import React from "react";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const VaillantFooter = () => {
  const navigationSections = [
    {
      title: "Heizung finden",
      links: [
        { label: "Heizung kaufen", href: "/heizung/heizung-finden/heizung-kaufen/" },
        { label: "Partner finden", href: "/heizung/heizung-finden/partner-finden/" },
        { label: "Förderung & Finanzierung", href: "/heizung/klima-foerderung/foerderung-finanzierung/" },
        { label: "Aktuelles zum Heizungstausch", href: "/heizung/heizung-verstehen/aktuelles-zum-heizungstausch/" },
        { label: "Heizung modernisieren", href: "/heizung/heizung-verstehen/heizung-modernisieren/" },
        { label: "Haus sanieren", href: "/heizung/heizung-verstehen/haus-sanieren/" },
        { label: "Heizung im Neubau", href: "/heizung/heizung-verstehen/heizung-im-neubau/" },
      ],
    },
    {
      title: "Produkte",
      links: [
        { label: "Alle Produkte", href: "/heizung/produkte/produktgruppen/" },
        { label: "Wärmepumpen", href: "/heizung/produkte/produktgruppen/waermepumpe/" },
        { label: "Gasheizung", href: "/heizung/produkte/produktgruppen/gasheizung/" },
        { label: "Brennwert", href: "/heizung/produkte/produktgruppen/brennwert/" },
        { label: "Testergebnisse", href: "/heizung/produkte/testergebnisse/" },
        { label: "Mobile Apps", href: "/heizung/produkte/mobile-apps/" },
      ],
    },
    {
      title: "Ratgeber",
      links: [
        { label: "Heiztechnik verstehen", href: "/heizung/heizung-verstehen/technologie-verstehen/" },
        { label: "Ratgeber Wärmepumpe", href: "/heizung/heizung-verstehen/technologie-verstehen/waermepumpe/" },
        { label: "Ratgeber Brennwert", href: "/heizung/heizung-verstehen/technologie-verstehen/brennwert/" },
        { label: "Ratgeber Gasheizung", href: "/heizung/heizung-verstehen/technologie-verstehen/gastherme/" },
        { label: "Tipps rund um Ihre Heizung", href: "/heizung/heizung-verstehen/tipps-rund-um-ihre-heizung/" },
        { label: "Heiztechniklexikon", href: "/heizung/heizung-verstehen/heiztechniklexikon/" },
        { label: "Übersicht Ratgeber", href: "/heizung/heizung-verstehen/sitemap-ratgeber/" },
      ],
    },
    {
      title: "Service",
      links: [
        { label: "myVAILLANT Portal", href: "https://myvaillantweb.de/", external: true },
        { label: "Kundendienst", href: "/heizung/service/kundendienst/" },
        { label: "Wartungsvertrag", href: "/heizung/service/kundendienst/wartung/" },
        { label: "Garantie", href: "/heizung/service/garantie/" },
        { label: "HelpCenter / Kontakt", href: "/heizung/service/helpcenter/" },
        { label: "Hilfe für das Fachhandwerk", href: "https://www.myvaillantpro.de/hilfe", external: true },
        { label: "Vertragskündigung", href: "/heizung/service/vertragskundigung/" },
      ],
    },
  ];

  const metaLinks = [
    { label: "Impressum", href: "https://www.vaillant.de/ueber-uns/impressum/", external: true },
    { label: "Datenschutz", href: "https://www.vaillant.de/ueber-uns/datenschutz/", external: true },
    { label: "Nutzungsbedingungen", href: "https://www.vaillant.de/ueber-uns/nutzungsbedingungen/", external: true },
    { label: "AGB", href: "/ueber-uns/agb/" },
    { label: "Über uns", href: "/ueber-uns/" },
    { label: "Karriere", href: "https://jobs.vaillant-group.com/?locale=de_DE", external: true },
    { label: "21grad Blog", href: "https://www.vaillant.de/21-grad/", external: true },
    { label: "Sitemap", href: "/heizung/service/sitemap/" },
  ];

  const socialLinks = [
    { 
      name: "Facebook", 
      href: "https://www.facebook.com/vaillant", 
      icon: Facebook,
      className: "hover:text-blue-600"
    },
    { 
      name: "Instagram", 
      href: "http://www.instagram.com/vaillant.deutschland/", 
      icon: Instagram,
      className: "hover:text-pink-600"
    },
    { 
      name: "YouTube", 
      href: "https://www.youtube.com/user/Vaillant1874", 
      icon: Youtube,
      className: "hover:text-red-600"
    },
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/company/vaillantdeutschland/", 
      icon: Linkedin,
      className: "hover:text-blue-700"
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Campaign Section */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <img 
              src="https://www.vaillant.de/vaillant-de/vaillant-logo-de-2387452.png" 
              alt="Zukunftsorientierte Heizung von Vaillant" 
              className="h-12"
            />
            <span className="text-lg font-medium text-gray-700">
              Komfort für mein Zuhause
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {navigationSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  <a href="#" className="hover:text-primary transition-colors">
                    {section.title}
                  </a>
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-gray-600 hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                        {link.external && (
                          <span className="ml-1 text-xs">↗</span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meta Section */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="text-gray-600 text-sm">
                © {new Date().getFullYear()} Vaillant
              </p>
              <ul className="flex flex-wrap gap-4 text-sm">
                {metaLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-600 transition-colors ${social.className}`}
                    title={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default VaillantFooter;
