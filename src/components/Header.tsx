
import React from "react";
import { Search, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => <header className="w-full bg-white shadow-sm">
    {/* Top Bar */}
    <div className="w-full" style={{
    backgroundColor: "#eee"
  }}>
      <div className="container flex items-center justify-between h-14">
        <div className="flex items-center gap-6">
          <a href="/" className="text-lg text-gray-700 hover:text-primary transition-colors px-4 py-4 bg-white rounded-t">
            Geschäftskunden
          </a>
          <a href="#privatkunden" className="text-lg text-gray-700 hover:text-primary transition-colors px-4 py-2 hover:bg-white hover:rounded hover:shadow-sm">
            Privatkunden
          </a>
          <a href="#fachpartnernet" className="text-lg text-gray-700 hover:text-primary transition-colors px-4 py-2 hover:bg-white hover:rounded hover:shadow-sm">
            FachpartnerNET
          </a>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-700 hover:text-primary transition-colors flex items-center gap-2">
            <Search size={18} />
            <span className="text-lg">Suchen</span>
          </button>
        </div>
      </div>
    </div>
    
    {/* Main Header */}
    <nav className="container flex items-center justify-between md:justify-between justify-center h-24 gap-4 -mt-px">
      {/* Mobile: Centered logo with text below */}
      <div className="flex md:hidden flex-col items-center gap-1 w-full justify-center">
        <img src="https://www.vaillant.at/media-master/global-media/layout/logos/old/vaillant-logo-272x72-1888261.png" alt="Vaillant Logo" className="h-12 w-auto" style={{
        imageRendering: "auto"
      }} />
        <span className="text-lg font-semibold text-gray-700 tracking-wide">Geschäftskunden</span>
      </div>
      
      {/* Desktop: Logo and text side by side */}
      <div className="hidden md:flex items-center gap-3">
        <img src="https://www.vaillant.at/media-master/global-media/layout/logos/old/vaillant-logo-272x72-1888261.png" alt="Vaillant Logo" className="h-12 w-auto" style={{
        imageRendering: "auto"
      }} />
        <span className="text-2xl font-semibold text-gray-700 tracking-wide">Geschäftskunden</span>
      </div>
      
      <div className="hidden md:flex items-center gap-6">
        <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-12 py-4 text-xl font-normal">
          <Phone size={20} />
          02191 9413997
        </Button>
      </div>
    </nav>
  </header>;

export default Header;
