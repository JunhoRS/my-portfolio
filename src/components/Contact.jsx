import React from "react";
import imgHero from "../assets/hero.jpg";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center text-white px-4 sm:px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure data-aos="fade-right" data-aos-delay="500" className="flex flex-wrap justify-center gap-4 relative">
          <div className="w-full lg:w-1/2">
            <img src={imgHero} alt="Contact Us" className="w-full h-auto rounded-lg shadow-lg"/>
          </div>
          <figcaption className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
            Contáctame
          </figcaption>
        </figure>
      </div>
    </section>
  );
}