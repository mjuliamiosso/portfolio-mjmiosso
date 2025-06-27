import { useState, type ReactNode } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Logum from "../assets/Logum.png";

interface Project {
  title: string;
  num: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Rivalsdle",
    num: "01",
    description: "Descrição do projeto 01. Um projeto muito legal.",
    image: Logum,
    github: "https://github.com/seu-repo-1",
    demo: "https://demo.com/projeto-1",
  },
  {
    title: "Jogo da Memória",
    num: "02",
    description: "Descrição do projeto 02. Também bem bacana.",
    image: "/projeto02.png",
    github: "https://github.com/seu-repo-2",
    demo: "https://demo.com/projeto-2",
  },

  {
    title: "Clima e Previsão do Tempo",
    num: "03",
    description: "Descrição do projeto 02. Também bem bacana.",
    image: "/projeto02.png",
    github: "https://github.com/seu-repo-2",
    demo: "https://demo.com/projeto-2",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-2 lg:flex-row">
      {projects.map((project, index) => (
        <div key={index} className="lg:flex lg">
          {/* Botão */}
          <button
            onClick={() => toggleProject(index)}
            className={`w-full flex justify-between items-center px-3 py-2 cursor-pointer rounded-lg text-xl font-medium transition lg:flex-col lg:w-[70px] lg:gap-5 ${
              activeIndex === index
                ? "bg-[var(--color-primary-light)] text-[var(--color-primary)]"
                : "bg-[var(--color-primary-ghost)] hover:text-[var(--color-primary)] text-[var(--color-text-primary)]"
            }`}
          >
            <span className="verticalText">{project.title}</span>
            <span className="text-3xl">{project.num}</span>
          </button>

          {/* Conteúdo do Projeto */}
          {activeIndex === index && (
            <div className="flex flex-col items-center mt-2 bg-[var(--color-primary-ghost)] p-6 lg:flex-row lg:items-start lg:mt-0 lg:ml-2">
              {/* Imagem */}
              <img
                src={project.image}
                alt={project.title}
                className="max-w-[230px] w-full lg:max-w-[250px] object-cover"
              />
              {/* Texto */}
              <div className="space-y-3 w-full">
                <div className="flex items-center justify-between">
                  {/* Título */}
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                    {project.title}
                  </h3>
                  {/* Icones */}
                  <div className="flex items-center gap-3 text-[var(--color-text-primary)]">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--color-primary)] transition text-xl"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--color-primary)] transition  text-lg"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
                {/* Descrição do Projeto */}
                <p className="text-[var(--color-text-primary)] text-base">
                  {project.description}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
