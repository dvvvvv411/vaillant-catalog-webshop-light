
import React from "react";
import { ShieldCheck, Award, Leaf } from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    title: "Verlässliche Qualität",
    text: "Premium-Markenprodukte mit robustem Design und langer Lebensdauer – entwickelt und getestet in Deutschland.",
  },
  {
    icon: Award,
    title: "Innovativ & Effizient",
    text: "Zukunftsfähige Heiztechnik für jede Anforderung – Top-Effizienzklassen & umweltbewusste Lösungen.",
  },
  {
    icon: Leaf,
    title: "Nachhaltigkeit",
    text: "Ressourcenschonende Systeme mit Fokus auf Umwelt und Energieeinsparung – für den nachhaltigen Gebäudebestand.",
  },
];

const WhyVaillant = () => (
  <section className="container py-10">
    <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-gray-800">
      Warum <span className="text-primary">Vaillant</span> wählen?
    </h2>
    <div className="flex flex-col md:flex-row gap-6 items-stretch justify-center">
      {points.map((item) => (
        <div
          key={item.title}
          className="flex-1 p-6 bg-white rounded-2xl shadow hover:shadow-xl transition-shadow flex flex-col items-center text-center animate-fade-in"
        >
          <item.icon className="text-primary mb-3" size={38} />
          <div className="font-bold text-lg mb-1">{item.title}</div>
          <div className="text-gray-600 text-base">{item.text}</div>
        </div>
      ))}
    </div>
  </section>
);

export default WhyVaillant;
