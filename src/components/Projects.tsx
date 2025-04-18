import { projects } from '@/data/projects'
import React from 'react'

const Projects = () => {
  return (
    <div className="bg-section backdrop-blur-md rounded-xl p-8 mt-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Proyectos destacados</h1>
      <div className="flex flex-col gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-6 items-center bg-foreground/10 rounded-lg p-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/3 rounded-base object-fill "
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="italic text-sm text-textSubtitle">{project.subtitle}</p>
              <p className="text-xs text-textSubtitle">{project.date}</p>
              <p className="mt-2 text-justify">{project.description}</p>
              <p className="mt-2 text-sm text-textHighlighted">Tecnologías: {project.tech}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-foreground/90 hover:bg-foreground text-background rounded-md"
              >
                Ver proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects