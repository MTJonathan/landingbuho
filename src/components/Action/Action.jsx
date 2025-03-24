import js from "./img/javascript.png";

const Action = () => {
  return (
    <section className="bg-[#D0815C] py-8 px-20">
      <div className="grid grid-cols-2">
        <header className="flex flex-col justify-center">
          <h2 className="text-6xl font-[500] text-[#F0C76C] font-[Righteous] mb-6">
            📢¡Domina JavaScript Hoy Mismo!
          </h2>
          <h3 className="text-2xl text-center font-[500] text-white font-[Righteous] mb-6">
            No esperes más. Da el primer paso hacia tu futuro en la
            programación.
          </h3>
          <button className="bg-[#ef5532] px-14 py-5 rounded-lg text-white text-xl font-bold">
            Ordena Ahora s./50
          </button>
        </header>
        <div className="grid place-items-center">
          <img src={js} alt="Logo de JS" />
        </div>
      </div>
    </section>
  );
};

export default Action;
