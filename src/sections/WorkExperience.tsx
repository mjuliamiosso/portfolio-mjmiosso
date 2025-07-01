import JobExperience from "../components/JobExperience";

const experiences = [
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
  {
    company: "Aventyrs RPG",
    title: "Ilustradora",
    date: "Out 2019 — Fev 2021",
    description:
      "Desenvolvimento de sites personalizados, otimização de SEO e melhorias em desempenho para clientes diversos.",
  },
];

const WorkExperience = () => {
  return (
    <section id="workExperience" className="bg-[var(--color-primary-ghost)]">
      <div className="container mx-auto sectionSpacing flex flex-col gap-10">
        <h2 className="sectionHeading">Experiências</h2>
        <JobExperience experiences={experiences} />
      </div>
    </section>
  );
};

export default WorkExperience;
