import React from 'react';

export default function About() {
  return (
    <section id="about"className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12  items-center">
        <figure data-aos="fade-right" data-aos-delay="500" className="flex flex-wrap justify-center gap-4 relative">
          <div className="w-full lg:w-1/2">
          
          </div>
          <figcaption className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
            Sobre mí, FullStack
          </figcaption>
        </figure>
      </div>
    </section>
  );
}