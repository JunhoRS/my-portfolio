import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Circulo decorativo de fondo */}
      <Navbar />
      <div className="absolute -top-10 -left-12 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 z-0" />

      {/* Contenido */}
      <header className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Junho C.</h1>
        <h2 className="text-xl md:text-2xl font-bold text-purple-300 mb-6">
          FullStack Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto mb-6">
          Desarrollador de software con experiencia en tecnologías modernas, apasionado por crear soluciones innovadoras y eficientes para problemas complejos. Siempre aprendiendo y mejorando mis habilidades.
        </p>

        {/* Iconos o enlaces sociales */}
        <div className="flex items-center justify-center space-x-4">
          <a href="#">
            <img
              className="w-11 h-11 rounded-full border border-white hover:scale-105 transition-transform"
              src="https://via.placeholder.com/48"
              alt="Social"
            />
          </a>
          {/* Puedes duplicar esto para más iconos */}
        </div>
      </header>
    </section>
  );
}   