import React from "react";
import principal from "../Banner/img/principal.png";

const Features = () => {
  return (
    <section className="py-8 px-20 bg-white">
      <div className="grid grid-cols-2">
        <div>
          <img src={principal} alt="Imagen Producto" />
        </div>
        <article className="mx-10">
          <header>
            <h3 className="text-[#ffa61e] text-lg tracking-[10px] mb-5">
              Caracteristicas
            </h3>
            <h2 className="text-4xl font-[500] text-[#ffa61e] font-[Righteous]">
              Nuestra Guía Destacada y Sus Mejores Beneficios
            </h2>
            <p className="text-[#908b85] text-sm">
              La Guía de Fundamentos de JavaScript es un recurso completo
              diseñado para que cualquier persona pueda aprender JavaScript de
              manera clara, estructurada y práctica. Contiene explicaciones
              detalladas, ejercicios interactivos y proyectos reales que te
              ayudarán a comprender y aplicar lo aprendido desde el primer día.
            </p>
          </header>
        </article>
      </div>
    </section>
  );
};

export default Features;
