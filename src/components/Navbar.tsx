import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-foreground/10 backdrop-blur-md z-50">
      <div className="overflow-x-auto">
        <ul className="flex justify-center items-center w-full gap-6 text-md px-4 py-2 whitespace-nowrap">
          <li><a href="#about" className="block">Sobre mí</a></li>
          <li><a href="#projects" className="block">Proyectos</a></li>
          <li><a href="#education" className="block">Educación</a></li>
          <li><a href="#tech" className="block">Tecnologías</a></li>
          <li><a href="#contact" className="block">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
