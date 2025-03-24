import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-[0.5fr_1fr] bg-[#D0815C] py-8 px-20 gap-10 text-white">
      <header>
        <h2 className="text-2xl font-[900]">GuiaJS</h2>
        <p className="my-5 text-sm">
          Aprende JavaScript sin complicaciones No te preocupes, te ayudaremos a
          entenderlo todo paso a paso.
        </p>
        <form className="flex justify-center">
          <label className="bg-white rounded-xl p-1">
            <input className="bg-transparent outline-none text-black" type="email" placeholder="Tu Correo" required />
            <button className="bg-[#ef5532] py-2 px-4 text-xl rounded-xl text-white" type="submit">➜</button>
          </label>
        </form>
      </header>

      <div className="grid grid-cols-4 gap-8">
        <ul className="grid gap-4 text-sm">
          <h3 className="font-[900]">📌 Recursos</h3>
          <li>📖 Sobre la Guía</li>
          <li>✨ Beneficios</li>
          <li>💰 Precio</li>
        </ul>
        <ul className="grid gap-4 text-sm">
          <h3 className="font-[900]">🚀 Aprendizaje</h3>
          <li>📚 Conceptos Clave</li>
          <li>🎯 Proyectos</li>
          <li>🛠️ Herramientas</li>
        </ul>
        <ul className="grid gap-4 text-sm">
          <h3 className="font-[900]">👤 Cuenta</h3>
          <li>🔑 Acceso</li>
          <li>📥 Descargas</li>
          <li>📄 Perfil</li>
        </ul>
        <ul className="grid gap-4 text-sm">
          <h3 className="font-[900]">🌍 Síguenos</h3>
          <li>🐦 Twitter</li>
          <li>📘 Facebook</li>
          <li>📸 Instagram</li>
        </ul>
      </div>

      <p className="col-span-2 text-center mt-10 mb-7">© 2025 - Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
