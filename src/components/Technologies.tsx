"use client";

import { useEffect, useRef } from "react";

const icons = [
  {
    name: "React",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
  },
  {
    name: "Next.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
  },
  {
    name: "TailwindCSS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "TypeScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Node.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "Express.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
  },
  {
    name: "PostgreSQL",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
  },
  {
    name: "HTML",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
  },
  {
    name: "CSS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
  },
];

const Technologies = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const speed = 0.8;

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        container.scrollLeft += speed;
        
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="p-4 mt-4">
      <h1 className="text-3xl font-bold text-center mb-1">Tecnologías</h1>
      <div className="overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-10 whitespace-nowrap px-6 hide-scrollbar py-6 select-none overflow-x-auto will-change-transform"
        >
          {[...icons, ...icons].map((icon, index) => (
            <img
              key={index}
              src={icon.url}
              alt={icon.name}
              height={50}
              className="h-[50px] w-auto opacity-90 hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;

