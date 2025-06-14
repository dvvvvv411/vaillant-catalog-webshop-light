
import React from "react";
import { Button } from "@/components/ui/button";
import { FileDown, Menu } from "lucide-react";

const Header = () => (
  <header className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
    <nav className="container flex items-center justify-between h-16 gap-4">
      <div className="flex items-center gap-4">
        <img
          src="https://www.vaillant.at/media-master/global-media/layout/logos/old/vaillant-logo-272x72-1888261.png"
          alt="Vaillant Logo"
          className="h-8 w-auto"
          style={{ imageRendering: "auto" }}
        />
        <div className="hidden md:block h-6 w-px bg-gray-300"></div>
        <span className="hidden md:inline text-lg font-medium text-vaillant-dark">B2B Katalog 2025</span>
      </div>
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" className="hidden sm:flex">
          <a href="#katalog" className="text-vaillant-dark hover:text-vaillant-teal">
            Produktkatalog
          </a>
        </Button>
        <Button asChild size="sm">
          <a
            href="/vaillant-b2b-katalog-2025.pdf"
            download
            className="flex items-center gap-2"
          >
            <FileDown size={16} />
            <span className="hidden sm:inline">Download</span>
          </a>
        </Button>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu size={20} />
        </Button>
      </div>
    </nav>
  </header>
);

export default Header;
