
import React from "react";
import CatalogItem from "./CatalogItem";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export type CatalogProduct = {
  id: string;
  title: string;
  description: string;
  image: string;
  pdf?: string;
};

const mockProducts: CatalogProduct[] = [
  {
    id: "1",
    title: "Vaillant ecoTEC plus VCI",
    description: "Kompaktes Gas-Brennwertgerät für Mehrfamilienhäuser.",
    image: "https://www.vaillant.de/img/products/286x286/ecotec-plus-1889856-format-4-3@286@desktop.png",
    pdf: "#",
  },
  {
    id: "2",
    title: "aroTHERM Split",
    description: "Flexible Wärmepumpenlösung für Sanierung & Neubau.",
    image: "https://www.vaillant.de/img/products/286x286/arotherm-split-1889838-format-4-3@286@desktop.png",
    pdf: "#",
  },
  {
    id: "3",
    title: "uniSTOR Warmwasserspeicher",
    description: "Effiziente Warmwasserspeicherlösungen für jede Anwendung.",
    image: "https://www.vaillant.de/img/products/286x286/uniSTOR-tower-1889939-format-4-3@286@desktop.png",
    pdf: "#",
  },
];

const CatalogGrid = () => (
  <section id="katalog" className="py-16 bg-[#efefef]">
    <div className="container">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-left">
              B2B Katalog
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Entdecken Sie unser umfassendes Sortiment an hochwertigen Heizungs- und 
              Klimatechnik-Lösungen. Von effizienten Wärmepumpen bis hin zu innovativen 
              Gas-Brennwertgeräten – alles für Ihre professionellen Projekte.
            </p>
            <Button asChild size="lg" className="px-8 py-3 rounded-xl mb-8">
              <a
                href="/vaillant-b2b-katalog-2025.pdf"
                download
                className="flex items-center gap-2"
              >
                <FileDown size={22} />
                <span>Vollständigen Katalog herunterladen</span>
              </a>
            </Button>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {mockProducts.slice(0, 2).map((prod) => (
                <CatalogItem key={prod.id} product={prod} />
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src="https://www.pinaxo.com/cover/f0b480fdff4eaadc88d759ae03dbcdd9/472px/b73ad5d912ef9db47487db60c3b0b257/cover-vaillant-arotherm-plus"
              alt="Vaillant B2B Katalog 2025"
              className="w-full max-w-md h-auto object-contain drop-shadow-lg rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
        {mockProducts.length > 2 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-left">
              Weitere Produkthighlights
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mockProducts.slice(2).map((prod) => (
                <CatalogItem key={prod.id} product={prod} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default CatalogGrid;
