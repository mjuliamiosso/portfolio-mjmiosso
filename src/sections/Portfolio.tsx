import Projects from "../components/Projects";
import Logum from "../assets/Logum.png";

const projectsProfissionais = [
  {
    title: "Niloware",
    num: "01",
    description: "Descrição do projeto 01. Um projeto muito legal.",
    image: Logum,
    github: "https://github.com/seu-repo-1",
    demo: "https://demo.com/projeto-1",
  },
  {
    title: "Top 10 Eventos Esportivos",
    num: "02",
    description: "Descrição do projeto 02. Também bem bacana.",
    image: "/projeto02.png",
    github: "https://github.com/seu-repo-2",
    demo: "https://demo.com/projeto-2",
  },
  {
    title: "Logum RH",
    num: "03",
    description: "Descrição do projeto 02. Também bem bacana.",
    image: "/projeto02.png",
    github: "https://github.com/seu-repo-2",
    demo: "https://demo.com/projeto-2",
  },
  {
    title: "Propabanda Finanças",
    num: "04",
    description: "Descrição do projeto 02. Também bem bacana.",
    image: "/projeto02.png",
    github: "https://github.com/seu-repo-2",
    demo: "https://demo.com/projeto-2",
  },
];

const projectsPessoais = [
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

const Portfolio = () => {
  return (
    <section className="container mx-auto sectionSpacing flex flex-col gap-10">
      <h2 className="sectionHeading">Portfólio</h2>

      {/* Profissionais */}
      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-medium text-[var(--color-primary)]">
          Projetos Profissionais
        </h3>
        <Projects projects={projectsProfissionais} />
      </div>

      {/* Pessoais */}
      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-medium text-[var(--color-primary)]">
          Projetos Pessoais
        </h3>
        <Projects projects={projectsPessoais} />
      </div>
    </section>
  );
};

export default Portfolio;
