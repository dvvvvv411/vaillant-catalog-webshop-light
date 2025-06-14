
import React from "react";
import CatalogItem from "./CatalogItem";

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
  <section id="katalog" className="container py-12">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-left">
      B2B Katalog
    </h2>
    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {mockProducts.map((prod) => (
        <CatalogItem key={prod.id} product={prod} />
      ))}
    </div>
  </section>
);

export default CatalogGrid;
