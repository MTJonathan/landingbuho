import { forwardRef } from "react";
import ButtonContactar from "./ButtonContactar";

const Contactar = forwardRef(({ closeDialog }, ref) => {
  return (
    <dialog
      ref={ref}
      className="p-8 bg-white rounded-3xl place-self-center text-center"
      closedby="any"
    >
      <header>
        <h2 className="text-2xl font-[700] text-[#ffa61e] font-[Righteous]">
          Contactar Ahora
        </h2>
      </header>

      {/* Formulario de contacto */}
      <form className="grid gap-4 my-4" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="">
          <input
            className="outline-none border-2 w-full rounded-3xl p-3"
            type="text"
            placeholder="Nombre"
          />
        </label>

        <label htmlFor="">
          <input
            className="outline-none border-2 w-full rounded-3xl p-3"
            type="tel"
            placeholder="Telefono"
          />
        </label>
        <ButtonContactar closeDialog={closeDialog} />
      </form>
      <button className="font-[900]" onClick={closeDialog}>
        Cerrar
      </button>
    </dialog>
  );
});

export default Contactar;
