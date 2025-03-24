import React from "react";

const FeatureContent = () => {
  return (
    <div>
      <aside className="text-sm text-[#908b85] my-6 border p-5 rounded-xl">
        <header className="flex justify-between mb-3">
          <h3 className="text-[#ffa61e] font-[700] text-xl">
            Contenido Esencial
          </h3>
          <button className="bg-[#ffa61e] px-5 py-1 rounded-lg text-white">
            Ver Todo
          </button>
        </header>
        <ul className="grid grid-cols-2 list-disc list-inside gap-3">
          <li>Explicación paso a paso</li>
          <li>Ejercicios Interactivos</li>
          <li>Código bien estructurado</li>
          <li>Acceso a Ejemplos Prácticos</li>
        </ul>
      </aside>

      <aside className="text-[#908b85] text-sm">
        <header className="mb-3">
          <h3 className="text-[#ffa61e] font-[700] text-xl">
            Aprendizaje Aplicado
          </h3>
        </header>
        <ul className="grid grid-cols-2 list-disc list-inside gap-3">
          <li>Proyectos Prácticos</li>
          <li>Ejemplos Reales</li>
          <li>Sin tecnicismo necesario</li>
          <li>Acceso de por Vida</li>
        </ul>
      </aside>
    </div>
  );
};

export default FeatureContent;
