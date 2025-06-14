
import React from "react";
import CatalogItem from "./CatalogItem";

export type CatalogProduct = {
  id: string;
  title: string;
  description: string;
  image: string;
  pdf?: string;
  category: string;
  efficiency?: string;
  features?: string[];
};

const mockProducts: CatalogProduct[] = [
  {
    id: "1",
    title: "Vaillant ecoTEC plus VCI",
    description: "Kompaktes Gas-Brennwertgerät für Mehrfamilienhäuser mit höchster Effizienz.",
    image: "https://www.vaillant.de/img/products/286x286/ecotec-plus-1889856-format-4-3@286@desktop.png",
    pdf: "#",
    category: "Heiztechnik",
    efficiency: "A+++",
    features: ["Modulierend", "Kompakt", "Wartungsarm"],
  },
  {
    id: "2",
    title: "aroTHERM Split",
    description: "Flexible Wärmepumpenlösung für Sanierung & Neubau mit intelligenter Steuerung.",
    image: "https://www.vaillant.de/img/products/286x286/arotherm-split-1889838-format-4-3@286@desktop.png",
    pdf: "#",
    category: "Wärmepumpen",
    efficiency: "A+++",
    features: ["Split-Ausführung", "Inverter", "Smart Control"],
  },
  {
    id: "3",
    title: "uniSTOR Warmwasserspeicher",
    description: "Effiziente Warmwasserspeicherlösungen für jede Anwendung mit optimaler Dämmung.",
    image: "https://www.vaillant.de/img/products/286x286/uniSTOR-tower-1889939-format-4-3@286@desktop.png",
    pdf: "#",
    category: "Warmwasser",
    efficiency: "A+",
    features: ["Hochwertige Dämmung", "Edelstahl", "Langlebig"],
  },
  {
    id: "4",
    title: "multiMATIC 700",
    description: "Intelligente Systemregelung für optimalen Komfort und maximale Effizienz.",
    image: "https://www.vaillant.de/img/products/286x286/ecotec-plus-1889856-format-4-3@286@desktop.png",
    pdf: "#",
    category: "Systemtechnik",
    efficiency: "Smart",
    features: ["Touch-Display", "App-Steuerung", "Wettergeführt"],
  },
  {
    id: "5",
    title: "flexoTHERM exclusive",
    description: "Premium Wärmepumpe mit höchster Effizienz für anspruchsvolle Anwendungen.",
    image: "https://www.vaillant.de/img/products/286x286/arotherm-split-1889838-format-4-3@286@desktop.png",
    pdf: "#",
    category: "Wärmepumpen",
    efficiency: "A+++",
    features: ["Premium-Ausstattung", "Leise", "Hocheffizient"],
  },
  {
    id: "6",
    title: "ecoTEC pro",
    description: "Zuverlässiges Gas-Brennwertgerät für Ein- und Zweifamilienhäuser.",
    image: "https://www.vaillant.de/img/products/286x286/ecotec-plus-1889856-format-4-3@286@desktop.png",
    pdf: "#",
    category: "Heiztechnik",
    efficiency: "A++",
    features: ["Bewährt", "Zuverlässig", "Servicefreundlich"],
  },
];

const CatalogGrid = () => (
  <section id="katalog" className="py-20 bg-white">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-vaillant-dark">
          B2B Produktkatalog 2025
        </h2>
        <p className="text-xl text-vaillant-gray max-w-3xl mx-auto">
          Entdecken Sie unsere neuesten Produkte und Lösungen für professionelle Anwendungen
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {mockProducts.map((prod, index) => (
          <div
            key={prod.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CatalogItem product={prod} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CatalogGrid;
