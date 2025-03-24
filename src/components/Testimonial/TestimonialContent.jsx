import testimonios from "./testimonios";
import TestimonialItem from "./TestimonialItem";

const TestimonialContent = () => {
  return (
    <div className="grid grid-cols-2 gap-8 my-8">
      {testimonios.map((testimonio) => (
        <TestimonialItem
          key={testimonio.id}
          img={testimonio.img}
          name={testimonio.nombre}
          comment={testimonio.comentario}
          rol={testimonio.rol}
        />
      ))}
    </div>
  );
};

export default TestimonialContent;
