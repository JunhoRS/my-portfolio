import React from 'react';

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