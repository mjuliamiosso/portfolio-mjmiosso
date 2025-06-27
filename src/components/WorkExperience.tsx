import { useState } from "react";

const experiences: Experience[] = [
  {
    company: "Niloware",
    title: "Desenvolvedora Front-End • UI/UX Designer",
    date: "Jul 2024 — Atualmente",
    description:
      "Atuo como Desenvolvedora Front End Júnior na criação de sites personalizados para clientes da região do Vale do Paraíba, atendendo empresas como Pousada Ilhabela, Litoral Pisos, Clínica Ápice, Marmoraria Stone e Gesso Andrade. Desenvolvi websites em React e Wordpress, realizando a configuração de plugins de SEO, otimização de conteúdo, ajustes de performance e melhorias na usabilidade, ações que contribuíram diretamente para o aumento da visibilidade e alcance orgânico dos sites.\n\nTodos os projetos seguiam uma rotina estruturada: criação de protótipos no Figma, apresentação para validação com o cliente e, só então, início do desenvolvimento.\n\nAlém dos sites institucionais, participei de projetos com maior nível de personalização utilizando React, como a plataforma da Logum RH, uma aplicação web voltada para gestão de recursos humanos. Nesse projeto, contribuí desde a análise de viabilidade até a implementação do front-end, aplicando conceitos de UI/UX para garantir uma experiência intuitiva, responsiva e funcional. Trabalhei com foco em hierarquia visual, acessibilidade, consistência entre componentes e fluxo de navegação fluido, garantindo que a interface atendesse tanto às necessidades do cliente quanto às expectativas dos usuários finais.",
  },
  {
    company: "Prefeitura de Jacareí",
    title: "Desenvolvedor Web",
    date: "Mar 2022 — Jul 2022",
    description:
      "Desenvolvimento de sites personalizados, otimização de SEO e melhorias em desempenho para clientes diversos.",
  },
];

const WorkExperience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiences[activeIndex];

  return (
    <section className="flex flex-col lg:flex-row gap-6">
      {/* Botões de empresas */}
      <div className="flex flex-col">
        {experiences.map((exp, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-3 py-2 rounded-md text-base font-medium transition cursor-pointer text-left ${
              index === activeIndex
                ? "bg-[var(--color-primary-light)] text-[var(--color-primary)]"
                : "border-[var(--color-primary)] text-[var(--color-text-primary)] hover:text-[var(--color-primary)]"
            }`}
          >
            {exp.company}
          </button>
        ))}
      </div>

      {/* Conteúdo da experiência */}
      <div className="flex-1 space-y-5">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <p className="text-xl font-bold text-[var(--color-text-primary)]">
            {active.title}
          </p>
          <p className="text-sm text-[var(--color-text-light)]">
            {active.date}
          </p>
        </div>
        {active.description.split("\n").map((line, i) => (
          <p key={i} className="text-base text-[var(--color-text-primary)]">
            {line}
          </p>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
