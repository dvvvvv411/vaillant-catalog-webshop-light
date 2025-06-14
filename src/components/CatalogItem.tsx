
import React from "react";
import { CatalogProduct } from "./CatalogGrid";
import { FileDown } from "lucide-react";

type Props = {
  product: CatalogProduct;
};

const CatalogItem = ({ product }: Props) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col">
    <img
      src={product.image}
      alt={product.title}
      className="h-36 w-auto mx-auto object-contain mb-4"
      loading="lazy"
    />
    <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.title}</h3>
    <div className="text-gray-600 mb-4 flex-1">{product.description}</div>
    <a
      href={product.pdf || "#"}
      className="inline-flex items-center gap-2 mt-auto bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-primary/90 focus:outline-none transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Produktdatenblatt von ${product.title} öffnen`}
    >
      <FileDown size={20} />
      <span>Datenblatt</span>
    </a>
  </div>
);

export default CatalogItem;
