
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CatalogGrid from "@/components/CatalogGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col font-sans">
      <Header />
      <main className="flex-1 flex flex-col justify-start">
        <section className="container py-16 flex flex-col items-center gap-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
            Willkommen bei Ihrem <span className="text-primary">Vaillant</span> B2B Katalog
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            Entdecken Sie ausgewählte Lösungen für Fachpartner – Effiziente Heiztechnik, Wärmepumpen &amp; Warmwasser-Speicher.
            Alle Details kompakt im Katalog.
          </p>
        </section>
        <CatalogGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
