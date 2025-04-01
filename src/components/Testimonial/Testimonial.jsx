import TestimonialContent from "./TestimonialContent";

const Testimonial = () => {
  return (
    <section className="px-2 py-8 md:px-20">
      <header className="text-center">
        <h3 className="text-[#ffa61e] text-lg tracking-[11px]">TESTIMONIOS</h3>
        <h2 className="text-4xl font-[500] text-[#ffa61e] font-[Righteous] my-4">
          Lo Que Dicen Nuestros Usuarios
        </h2>
        <p className="text-[#908b85] w-3/4 mx-auto">
          Más que una guía, una herramienta de transformación. Descubre lo que
          opinan quienes ya están mejorando sus habilidades con nuestra guía.
        </p>
      </header>

      <TestimonialContent />
    </section>
  );
};

export default Testimonial;
