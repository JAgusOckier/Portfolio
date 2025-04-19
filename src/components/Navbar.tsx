"use client"
import React from 'react'

const Navbar = () => {
  const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Ajusta según la altura de tu navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-foreground/10 backdrop-blur-md z-50">
      <div className="w-full overflow-x-auto scrollbar-hide">
        <ul className="flex min-w-max justify-center gap-6 text-sm sm:text-md tracking-wide px-4 py-2 whitespace-nowrap">
          <li><button onClick={() => scrollToSection('about')} className="block">Sobre mí</button></li>
          <li><button onClick={() => scrollToSection('projects')} className="block">Proyectos</button></li>
          <li><button onClick={() => scrollToSection('education')} className="block">Educación</button></li>
          <li><button onClick={() => scrollToSection('tech')} className="block">Tecnologías</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="block">Contacto</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;