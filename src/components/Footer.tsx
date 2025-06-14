
import React from "react";

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 mt-16">
    <div className="container px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-gray-500 text-sm">
      <div>
        &copy; {new Date().getFullYear()} Vertriebspartner Vaillant — Alle Rechte vorbehalten.
      </div>
      <div>
        <a
          href="#impressum"
          className="hover:text-primary transition-colors underline underline-offset-2"
        >
          Impressum
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
