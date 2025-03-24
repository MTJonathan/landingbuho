import { Star } from "./svg/svg";

const TestimonialItem = ({ img, name, comment, rol }) => {
  return (
    <article className="bg-[#FFF4EB] p-10 rounded-xl">
      {/*Comentario*/}
      <p className="mb-6 text-sm">{comment}</p>

      {/*Perfil*/}
      <div className="grid grid-cols-[0.3fr_2fr] gap-5 bg-">
        <img className="rounded-full" src={img} alt={name} />

        <div className="grid grid-cols-[2fr_1fr]">
          <div className="flex flex-col justify-center">
            <h3 className="text-sm text-[#ffa61e] font-[700]">{name}</h3>
            <p className="text-xs text-[#908b85]">{rol}</p>
          </div>

          <div className="flex justify-center items-center w-full">
            {/*Estrellas*/}
            {
              [...Array(5)].map((_, index) => (
                <span key={index}> <Star /> </span>
              ))
            }
          </div>
        </div>
      </div>
    </article>
  );
};

export default TestimonialItem;
