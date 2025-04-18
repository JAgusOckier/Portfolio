import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-foreground/10 backdrop-blur-md p-2 z-50">
  <ul className="flex justify-center gap-6 text-md tracking-widest overflow-x-auto whitespace-nowrap scrollbar-hide px-2">
    <li><a href="#about">Sobre mí</a></li>
    <li><a href="#projects">Proyectos</a></li>
    <li><a href="#education">Educación</a></li>
    <li><a href="#tech">Tecnologías</a></li>
    <li><a href="#contact">Contacto</a></li>
  </ul>
</nav>

      )
}

export default Navbar