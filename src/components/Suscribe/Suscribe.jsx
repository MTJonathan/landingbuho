const Suscribe = () => {
  return (
    <section className="grid grid-cols-2 bg-[#F4D5BA] py-8 px-20 gap-10">
      <header>
        <h2 class="text-3xl text-[#ffa61e] font-[900] my-4">
          📩 Obten más Información
        </h2>
        <p className="text-[#908b85] text-sm">
          No pierdas la oportunidad de aprender JavaScript de manera sencilla y
          estructurada. Regístrate con tu correo y recibe acceso inmediato a más
          información de nuestra guía de fundamentos de JavaScript, con
          explicaciones detalladas, ejercicios interactivos y ejemplos
          prácticos.
        </p>
      </header>
      <form className="grid place-items-center">
        <label className="flex bg-[#FFF4EB] py-1 pl-3 pr-2 rounded-3xl w-full">
          <input
            className="bg-transparent w-full outline-none"
            type="email"
            placeholder="Email"
          />
          <button className="bg-[#ef5532] py-3 px-14 rounded-3xl text-white">
            Enviar
          </button>
        </label>
      </form>
    </section>
  );
};

export default Suscribe;
