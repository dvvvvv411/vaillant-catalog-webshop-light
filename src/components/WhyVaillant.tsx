
import React from "react";
import { ShieldCheck, Award, Leaf, TrendingUp } from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    title: "Verlässliche Qualität",
    text: "Premium-Markenprodukte mit robustem Design und langer Lebensdauer – entwickelt und getestet in Deutschland.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Innovativ & Effizient",
    text: "Zukunftsfähige Heiztechnik für jede Anforderung – Top-Effizienzklassen & umweltbewusste Lösungen.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Leaf,
    title: "Nachhaltigkeit",
    text: "Ressourcenschonende Systeme mit Fokus auf Umwelt und Energieeinsparung – für den nachhaltigen Gebäudebestand.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Award,
    title: "Partnerschaft",
    text: "Umfassender Service und Support für Fachpartner – von der Beratung bis zur Installation.",
    color: "bg-orange-50 text-orange-600",
  },
];

const WhyVaillant = () => (
  <section className="py-20 bg-white">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-vaillant-dark">
          Warum <span className="text-vaillant-teal">Vaillant</span> wählen?
        </h2>
        <p className="text-xl text-vaillant-gray max-w-3xl mx-auto">
          Seit über 150 Jahren steht Vaillant für Innovation, Qualität und Zuverlässigkeit in der Heiztechnik
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {points.map((item, index) => (
          <div
            key={item.title}
            className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-vaillant-teal/20 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <item.icon size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-vaillant-dark">{item.title}</h3>
            <p className="text-vaillant-gray leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyVaillant;
