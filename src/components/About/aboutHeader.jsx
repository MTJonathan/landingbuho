import React from "react";

const AboutHeader = () => {
  return (
    <header>
      <h3 className="text-[#ffa61e] text-lg tracking-[13px] mb-5">
        SOBRE NOSOTROS
      </h3>
      <div className="grid md:grid-cols-[1fr_1fr] gap-5">
        <h2 className="text-4xl font-[500] text-[#ffa61e] font-[Righteous]">
          Por qué nuestra guía es la mejor opción para aprender JavaScript
        </h2>

        <p className="text-[#908b85] text-sm">
          En GuiaJs, nuestra misión es ayudar a las personas a dar sus primeros
          pasos en el mundo de la programación. Brindamos recursos educativos
          claros y estructurados en un sector donde la información suele ser
          confusa y desordenada. Creemos que aprender a programar debería ser
          accesible, práctico y emocionante.
        </p>
      </div>
    </header>
  );
};

export default AboutHeader;
