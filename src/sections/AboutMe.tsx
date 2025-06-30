import Tags from "../components/Tags";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "WordPress",
  "Figma",
  "Git",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
];

const AboutMe = () => {
  return (
    <section id="aboutMe" className="container mx-auto sectionSpacing flex flex-col gap-10">
      <h2 className="sectionHeading">Sobre mim</h2>
      {/* Texto + Linguagens */}
      <div className="flex flex-col gap-5">
        {/* Texto */}
        <p className="text-[var(--color-text-primary)]">
          Desenvolvedora Front-End na Niloware, atuo na criação de interfaces
          modernas, performáticas e responsivas. Trabalho com tecnologias como
          React, Next.js, TypeScript, Tailwind, Node.js e WordPress, além de
          utilizar Figma para desenvolvimento de UI. Tenho experiência no
          desenvolvimento de sites personalizados para empresas como clínicas,
          pousadas e na construção de aplicações web escaláveis, sempre
          priorizando usabilidade, performance, acessibilidade e SEO.
          <br />
          <br />
          Estou cursando faculdade de Análise e Desenvolvimento de Sistemas e
          sou formada em Desenvolvimento Full Stack pela DNC, onde aprofundei
          meus conhecimentos em UI/UX, cloud, front e back-end.
          <br />
          <br />
          Além do desenvolvimento front-end, possuo domínio em versionamento com
          Git, bancos de dados (MySQL, PostgreSQL e MongoDB) e metodologias
          ágeis e de design, como Design Thinking.
          <br />
          <br />
          Busco constantemente evoluir como profissional, atuando em projetos
          que unam código, design e foco no usuário.
        </p>

        {/* Tecnologias / Tags */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Tags key={tech}>{tech}</Tags>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
