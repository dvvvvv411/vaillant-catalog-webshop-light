import React from "react";

const IntroductionSection = () => {
  return (
    <section className="py-3 bg-[#efefef]">
      <div className="container">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 text-left">
            "Sei innovativ, hör auf deine Kunden!" Firmengründer Johann Vaillant, 1874
          </h3>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Mit dem <strong>Qualitätsversprechen einer deutschen Traditionsmarke</strong> entwickeln 
            wir energieeffiziente und umweltfreundliche Systeme zum Heizen, Lüften und zur 
            Warmwasserbereitung. Wir fokussieren uns auf die Nutzung kostenloser Umweltenergie, 
            z.B. durch <strong>Wärmepumpen und Photovoltaik</strong>. Sie bringen mehr Unabhängigkeit 
            von fossilen Brennstoffen mit sich und sind damit eine zukunftssichere Entscheidung. 
            Darüber hinaus bieten wir Ihnen einen <strong>kundenorientierten Service</strong> und 
            individuelle Beratung durch unsere <strong>bundesweit qualifizierten Fachpartner</strong>. 
            Entscheiden Sie sich für <strong>Qualität</strong>, <strong>Nachhaltigkeit</strong> und 
            mehr Freiheit – entscheiden Sie sich für Vaillant!
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
