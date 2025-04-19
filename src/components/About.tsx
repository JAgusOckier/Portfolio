import React from "react";

const About = () => {
  return (
    <div className="bg-section backdrop-blur-md rounded-xl p-8 mt-14 scroll-mt-20">
      <div className="flex flex-col-reverse md:flex-row items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-left">Sobre mí</h1>
          <p className="text-base text-justify mb-4">
            Soy desarrollador fullstack Argentino con pasión por el desarrollo web. Disfruto trabajar tanto en frontend como
            backend, siempre aprendiendo nuevas tecnologías y buscando mejorar como programador.
          </p>  
        </div>
        <img
          src="/images/Fotito.png"
          alt="Mi foto"
          className="w-50 h-50 rounded-full object-cover bg-background"
        />
      </div>
    </div>
  );
};

export default About;
