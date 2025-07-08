import React from 'react';

const projects = ({ image, title, descripcion, link }) => {
  return (
    <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
      <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-purple-500 rounded-full blur-3xl opacity-50 top-5 left-10">
      </div>

      <div className="relative z-10">
        <figure className="relative">
          <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"/>
          <a href={link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors duration-300">
          </a>       
        </figure>
        <div className="px-6 py-4">
          <header>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300 mb-4">{descripcion}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Ver Proyecto</a>
          </header>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Mis proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Project Card */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Proyectos realizados</h3>
            <p className="text-gray-700 mb-4">Programas y creaciones realizadas</p>
            <a href="#" className="text-blue-500 hover:underline">Ver Proyectos</a>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </section>
  );
}