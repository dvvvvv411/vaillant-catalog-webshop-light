
import React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => (
  <header className="w-full bg-white shadow-sm">
    {/* Top Bar */}
    <div className="w-full" style={{ backgroundColor: "#eee" }}>
      <div className="container flex items-center justify-between h-10">
        <div className="flex items-center gap-6">
          <a
            href="/"
            className="text-base text-gray-700 hover:text-primary transition-colors px-3 py-3 bg-white rounded-t"
          >
            Geschäftskunden
          </a>
          <a
            href="#privatkunden"
            className="text-base text-gray-700 hover:text-primary transition-colors px-3 py-1 hover:bg-white hover:rounded hover:shadow-sm"
          >
            Privatkunden
          </a>
          <a
            href="#fachpartnernet"
            className="text-base text-gray-700 hover:text-primary transition-colors px-3 py-1 hover:bg-white hover:rounded hover:shadow-sm"
          >
            FachpartnerNET
          </a>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-700 hover:text-primary transition-colors flex items-center gap-2">
            <Search size={16} />
            <span className="text-base">Suchen</span>
          </button>
        </div>
      </div>
    </div>
    
    {/* Main Header - no gap */}
    <nav className="container flex items-center justify-between h-20 gap-4 -mt-px">
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
        <Button 
          className="bg-primary text-white hover:bg-primary/90 rounded-xl px-6 py-2 text-lg font-medium"
        >
          B2B Katalog
        </Button>
      </div>
    </nav>
  </header>
);

export default Header;
