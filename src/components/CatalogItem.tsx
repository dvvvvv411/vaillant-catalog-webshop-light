
import React from "react";
import { CatalogProduct } from "./CatalogGrid";
import { FileDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  <Card className="group flex flex-col h-full rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
    <CardContent className="pt-8 pb-0 flex flex-col items-center relative">
      <div className="absolute top-4 right-4">
        <Badge variant="secondary" className="text-xs font-medium">
          {product.category}
        </Badge>
      </div>
      {product.efficiency && (
        <div className="absolute top-4 left-4">
          <Badge className="bg-green-100 text-green-800 border-green-200">
            <Star size={12} className="mr-1" />
            {product.efficiency}
          </Badge>
        </div>
      )}
      <div className="relative mb-6 group-hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-vaillant-teal/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img
          src={product.image}
          alt={product.title}
          className="relative h-40 w-auto object-contain drop-shadow-lg"
          loading="lazy"
        />
      </div>
    </CardContent>
    <CardHeader className="pt-0 pb-4 text-center">
      <CardTitle className="text-xl font-bold text-vaillant-dark group-hover:text-vaillant-teal transition-colors duration-300">
        {product.title}
      </CardTitle>
    </CardHeader>
    <CardContent className="flex-grow pb-4 text-center">
      <p className="text-vaillant-gray leading-relaxed mb-4">{product.description}</p>
      {product.features && (
        <div className="flex flex-wrap justify-center gap-2">
          {product.features.slice(0, 3).map((feature) => (
            <Badge key={feature} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
      )}
    </CardContent>
    <CardFooter className="pt-0 pb-6">
      <Button asChild className="w-full group-hover:bg-vaillant-teal group-hover:shadow-lg transition-all duration-300">
        <a
          href={product.pdf || "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Produktdatenblatt von ${product.title} öffnen`}
        >
          <FileDown size={18} className="mr-2" />
          <span>Datenblatt herunterladen</span>
        </a>
      </Button>
    </CardFooter>
  </Card>
);

export default CatalogItem;
