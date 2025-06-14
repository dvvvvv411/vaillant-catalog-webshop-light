
import React from "react";

const NewHeroSection = () => (
  <section className="w-full">
    <div className="container">
      <div 
        className="relative h-[600px] overflow-hidden rounded-lg"
        style={{
          backgroundImage: "url('https://professional.vaillant.co.uk/images/b2b-1/150-years-hare-header-left-2812276-format-16-9@431@retina.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div 
          className="absolute inset-0 rounded-lg"
          style={{
            background: "linear-gradient(to right, #00917e 0%, rgba(0, 145, 126, 0.8) 15%, rgba(0, 145, 126, 0.4) 30%, rgba(0, 145, 126, 0.2) 45%, transparent 70%)"
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
