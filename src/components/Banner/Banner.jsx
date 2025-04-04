import { useRef } from "react";
import Nav from "../Nav/Nav";
import NavIconos from "../Nav/NavIconos";
import Contactar from "../modals/Contactar";
import principal from "./img/principal.png";
const Banner = () => {
  const contactarRef = useRef(null);

  const OpenDialog = () => contactarRef.current.showModal();
  const CloseDialog = () => contactarRef.current.close();

  return (
    // Banner de la pagina
    <section className="bg-white">
      <div className="grid lg:grid-cols-[3fr_1fr]">
        <article className="p-5 md:py-8 sm:px-20">
          <Nav />
          <header className="flex my-16">
            <article>
              <h2 className="text-[#ffa61e] text-lg tracking-[15px] mb-5">
                INTRO
              </h2>
              <h1 className="text-4xl font-[500] text-[#ffa61e] font-[Righteous]">
                Guia De Fundamentos de JavaScript
              </h1>

              {/* Descripcion principal */}
              <p className="my-8 text-[#908b85] text-sm">
                JavaScript es el lenguaje de programación más utilizado en el
                desarrollo web. Si alguna vez has querido aprender a programar y
                no sabes por dónde empezar, esta guía es para ti. Con
                explicaciones claras, ejemplos prácticos y ejercicios
                interactivos, te llevaré de la mano para que domines los
                conceptos esenciales de JavaScript sin complicaciones.
              </p>
              <button
                className="bg-[#ef5532] px-14 py-5 rounded-lg text-white text-lg font-bold"
                onClick={OpenDialog}
              >
                Obtener ahora
              </button>

              {/*Contactar dialog*/}
              <Contactar ref={contactarRef} closeDialog={CloseDialog} />

              {/* Estadisticas del producto*/}
              <div className="flex gap-8 mt-8">
                <div>
                  <h3 className="text-[#ffa61e] text-[20px] font-bold">
                    500M+
                  </h3>
                  <p className="text-[#908b85]">Clientes Felices</p>
                </div>
                <div>
                  <h3 className="text-[#ffa61e] text-[20px] font-bold">20M+</h3>
                  <p className="text-[#908b85]">Reseñas Positivas</p>
                </div>
                <div>
                  <h3 className="text-[#ffa61e] text-[20px] font-bold">100%</h3>
                  <p className="text-[#908b85]">Eficiencia</p>
                </div>
              </div>
            </article>

            {/* Imagen principal */}
            <div className="hidden lg:block">
              <img
                src={principal}
                alt="Imagen Principal"
                className="relative w-[1200px] left-40 top-16 border-2 border-black"
              />
            </div>
          </header>
        </article>
        <div className="hidden lg:block bg-[#ffa61e] w-full py-8 px-16">
          <NavIconos />
        </div>
      </div>
    </section>
  );
};

export default Banner;
