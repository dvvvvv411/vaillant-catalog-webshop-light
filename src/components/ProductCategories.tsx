
import React from "react";
import { Flame, Snowflake, Droplet, Wrench } from "lucide-react";

const categories = [
  {
    icon: Flame,
    title: "Heiztechnik",
    desc: "Gas- & Öl-Brennwertgeräte, Hybridheizungen – leistungsstark & effizient für jeden Bedarf.",
    color: "bg-[#e6fffa]",
  },
  {
    icon: Snowflake,
    title: "Wärmepumpen",
    desc: "Luft- und Sole/Wasser-Wärmepumpen für Neubau & Modernisierung – klimafreundlich & zukunftssicher.",
    color: "bg-[#e7f7fa]",
  },
  {
    icon: Droplet,
    title: "Warmwasser",
    desc: "Wandspeicher, Standspeicher und Durchlauferhitzer für bedarfsgerechte Warmwasserversorgung.",
    color: "bg-[#f3f7e0]",
  },
  {
    icon: Wrench,
    title: "Systemtechnik",
    desc: "Regelungen, Lüftung, Zubehör und digitale Services – für ein perfektes Komplettsystem.",
    color: "bg-[#f4f3fa]",
  },
];

const ProductCategories = () => (
  <section className="container py-10">
    <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-gray-800">
      Produktkategorien im Überblick
    </h2>
    <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {categories.map((cat) => (
        <div
          key={cat.title}
          className={`flex flex-col items-center p-6 rounded-xl shadow ${cat.color} hover:scale-105 transition-transform duration-200 cursor-pointer`}
        >
          <cat.icon size={36} className="text-primary mb-2" />
          <span className="font-bold text-lg mb-1">{cat.title}</span>
          <span className="text-gray-600 text-base text-center">{cat.desc}</span>
        </div>
      ))}
    </div>
  </section>
);

export default ProductCategories;
