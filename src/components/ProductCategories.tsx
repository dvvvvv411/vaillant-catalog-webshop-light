
import React from "react";
import { Flame, Snowflake, Droplet, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: Flame,
    title: "Heiztechnik",
    desc: "Gas- & Öl-Brennwertgeräte, Hybridheizungen – leistungsstark & effizient für jeden Bedarf.",
    products: "45+ Produkte",
    gradient: "from-red-500 to-orange-500",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    icon: Snowflake,
    title: "Wärmepumpen",
    desc: "Luft- und Sole/Wasser-Wärmepumpen für Neubau & Modernisierung – klimafreundlich & zukunftssicher.",
    products: "32+ Produkte",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Droplet,
    title: "Warmwasser",
    desc: "Wandspeicher, Standspeicher und Durchlauferhitzer für bedarfsgerechte Warmwasserversorgung.",
    products: "28+ Produkte",
    gradient: "from-cyan-500 to-teal-500",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: Wrench,
    title: "Systemtechnik",
    desc: "Regelungen, Lüftung, Zubehör und digitale Services – für ein perfektes Komplettsystem.",
    products: "150+ Produkte",
    gradient: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

const ProductCategories = () => (
  <section className="py-20 bg-gray-50">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-vaillant-dark">
          Produktkategorien im Überblick
        </h2>
        <p className="text-xl text-vaillant-gray max-w-3xl mx-auto">
          Comprehensive solutions for every heating and hot water requirement
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, index) => (
          <div
            key={cat.title}
            className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            <div className="relative p-8">
              <div className={`w-16 h-16 rounded-2xl ${cat.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <cat.icon size={32} className={cat.iconColor} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-vaillant-dark">{cat.title}</h3>
              <p className="text-vaillant-gray mb-6 leading-relaxed">{cat.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-vaillant-teal">{cat.products}</span>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2">
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductCategories;
