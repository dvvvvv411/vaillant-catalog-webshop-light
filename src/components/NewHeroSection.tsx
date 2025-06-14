
import React from "react";

const NewHeroSection = () => (
  <section className="relative w-full h-96 overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://i.imgur.com/Oi5cX9c.jpeg')"
      }}
    />
    <div 
      className="absolute inset-0"
      style={{
        background: "linear-gradient(to right, #00917e 0%, #00917e 20%, rgba(0, 145, 126, 0.7) 40%, rgba(0, 145, 126, 0.3) 60%, transparent 80%)"
      }}
    />
    <div className="relative z-10 container h-full flex items-center">
      <div className="text-white max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Vaillant
        </h1>
        <p className="text-lg md:text-xl opacity-90 drop-shadow-md">
          Innovative Heiztechnik für Ihr Zuhause
        </p>
      </div>
    </div>
  </section>
);

export default NewHeroSection;
