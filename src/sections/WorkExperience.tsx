import JobExperience from "../components/JobExperience";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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
      "Desenvolvimento de sites personalizados, otimização de SEAtuei inicialmente como Técnica de Suporte de TI, sendo responsável pela manutenção e operação de sistemas, incluindo tarefas como limpeza de equipamentos, formatação de computadores, instalação de impressoras e solução de problemas de hardware e software. Utilizava o sistema Ocomon para gerenciar chamados e oferecer suporte eficiente aos setores de Infraestrutura, Administração e Educação. Essa função fortaleceu minhas habilidades de resolução de problemas, otimizando o desempenho dos sistemas e contribuindo para a continuidade dos serviços e a satisfação dos usuários.\n\n Após me destacar no suporte técnico, fui transferida para a área de Desenvolvimento, onde atuei como estagiária por 3 meses. Nesse período, trabalhei com HTML, CSS e PHP na manutenção de sites e aplicações web da Prefeitura, corrigindo erros, otimizando funcionalidades e garantindo a estabilidade dos sistemas. Essa experiência ampliou minha base técnica, exigiu rápida adaptação e reforçou minha capacidade de atuar em ambientes dinâmicos com foco em eficiência e qualidade.O e melhorias em desempenho para clientes diversos.",
  },
  {
    company: "Aventyrs RPG",
    title: "Ilustradora",
    date: "Out 2019 — Fev 2021",
    description:
      "Atuei como ilustradora digital em um projeto de RPG de fantasia, onde fui responsável pela criação de mais de 20 personagens e cenários únicos. Trabalhei em estreita colaboração com a equipe criativa, participando ativamente das reuniões de concepção para definir estilos visuais, paletas de cores e atmosferas que ajudassem a dar vida ao universo do jogo. Utilizei ferramentas como Adobe Photoshop e Clip Studio Paint para criar composições visualmente impactantes, mantendo a consistência com a narrativa e o tom do projeto. Essa experiência me permitiu desenvolver uma forte sensibilidade estética e uma abordagem cuidadosa ao storytelling visual.",
  },
];

const WorkExperience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
      }}
     id="workExperience" className="bg-[var(--color-primary-ghost)]">
      <div className="container mx-auto sectionSpacing flex flex-col gap-10">
        <h2 className="sectionHeading px-5">Experiências</h2>
        <div className="px-5 ">
          <JobExperience experiences={experiences} />
        </div>
      </div>
    </motion.section>
  );
};

export default WorkExperience;
