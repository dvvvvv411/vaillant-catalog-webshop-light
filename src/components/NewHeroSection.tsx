
import React from "react";

const NewHeroSection = () => (
  <section className="w-full py-16">
    <div className="container">
      <div 
        className="relative h-96 overflow-hidden rounded-lg"
        style={{
          backgroundImage: "url('https://i.imgur.com/Oi5cX9c.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div 
          className="absolute inset-0 rounded-lg"
          style={{
            background: "linear-gradient(to right, #00917e 0%, #00917e 20%, rgba(0, 145, 126, 0.7) 40%, rgba(0, 145, 126, 0.3) 60%, transparent 80%)"
          }}
        />
        <div className="relative z-10 h-full flex items-center px-8">
          <div className="text-white max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Vaillant
            </h1>
            <p className="text-lg md:text-xl opacity-90 drop-shadow-md">
              Innovative Heiztechnik für Ihr Zuhause
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NewHeroSection;
