import React from 'react';
import { FiMenu } from 'react-icons/fi';


export default function Navbar() {
  const NavbarLinks = [
    {id:1, name: 'Home', href: '#home' },
    {id:2, name: 'About', href: '#about' },
    {id:3, name: 'Contact', href: '#contact' },
  ];


  return (
    <header className="fixed top-0 left-0 w-full z-20 text-white" data-aos="fade-up" data-aos-duration="300">
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* LOGO */}
        <a className="text-4xl font-bold italic text-white" href="#">
          Junho
        </a>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden focus:outline-none">
          <FiMenu className="h-8 w-8 text-white" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {/* Aquí puedes mapear tus enlaces */}
          {/* Ejemplo: */}
          {/* {NavbarLinks.map((link) => (
              <a href={link.href} key={link.id} className="hover:underline">
                {link.label}
              </a>
            ))} */}
          <a href="#about" className="hover:text-purple-300">About</a>
          <a href="#projects" className="hover:text-purple-300">Projects</a>
          <a href="#contact" className="hover:text-purple-300">Contact</a>
        </nav>
      </div>
      {/* Mobile Navigation */}
    </header>
  );
}