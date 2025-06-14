
import React from "react";
import { CatalogProduct } from "./CatalogGrid";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  product: CatalogProduct;
};

const CatalogItem = ({ product }: Props) => (
  <Card className="flex flex-col h-full rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <CardContent className="pt-6 pb-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.title}
        className="h-36 w-auto object-contain mb-4"
        loading="lazy"
      />
    </CardContent>
    <CardHeader className="pt-0 pb-2">
      <CardTitle className="text-lg font-semibold text-gray-900 text-center">{product.title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow pb-4">
      <p className="text-gray-600 text-sm text-center">{product.description}</p>
    </CardContent>
    <CardFooter className="pt-0">
      <Button asChild className="w-full">
        <a
          href={product.pdf || "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Produktdatenblatt von ${product.title} öffnen`}
        >
          <FileDown size={18} className="mr-2" />
          <span>Datenblatt</span>
        </a>
      </Button>
    </CardFooter>
  </Card>
);

export default CatalogItem;
