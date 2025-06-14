
import React from "react";
import { Search } from "lucide-react";

const Header = () => (
  <header className="w-full bg-white shadow-sm">
    {/* Top Bar */}
    <div className="w-full" style={{ backgroundColor: "#eee" }}>
      <div className="container flex items-center justify-between h-10">
        <div className="flex items-center gap-6">
          <a
            href="#geschaeftskunden"
            className="text-sm text-gray-700 hover:text-primary transition-colors"
          >
            Geschäftskunden
          </a>
          <a
            href="#privatkunden"
            className="text-sm text-gray-700 hover:text-primary transition-colors"
          >
            Privatkunden
          </a>
          <a
            href="#fachpartnernet"
            className="text-sm text-gray-700 hover:text-primary transition-colors"
          >
            FachpartnerNET
          </a>
        </div>
        <div className="flex items-center">
          <button className="p-2 text-gray-700 hover:text-primary transition-colors">
            <Search size={16} />
          </button>
        </div>
      </div>
    </div>
    
    {/* Main Header */}
    <nav className="container flex items-center justify-between h-20 gap-4">
      <div className="flex items-center gap-3">
        <img
          src="https://www.vaillant.at/media-master/global-media/layout/logos/old/vaillant-logo-272x72-1888261.png"
          alt="Vaillant Logo"
          className="h-12 w-auto"
          style={{ imageRendering: "auto" }}
        />
        <span className="hidden sm:inline text-2xl font-semibold text-gray-700 tracking-wide">B2B Vertriebspartner-Katalog</span>
      </div>
      <div className="flex items-center gap-6">
        <a
          href="#katalog"
          className="font-medium text-primary hover:underline underline-offset-4 text-lg"
        >
          B2B Katalog
        </a>
      </div>
    </nav>
  </header>
);

export default Header;
