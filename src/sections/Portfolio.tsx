import Projects from "../components/Projects";
import Logum from "/Logum.png";
import PropabandaFinancas from "/propabanda-financas.png";
import Niloware from "/niloware.png";
import Rivalsdle from "/rivalsdle.png";
import JogoMemoria from "/jogo-da-memoria.png";
import ClimaPrevisao from "/clima-previsao.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const projectsProfissionais = [
  {
    title: "Niloware",
    num: "01",
    description:
      "Landing page desenvolvida para a Niloware com foco na conversão de clientes interessados em criar sites profissionais. O projeto apresenta os serviços, planos personalizáveis e exemplos do portfólio de forma clara e estratégica. Atuei desde a concepção da interface no Figma até a implementação do layout com Next.js e Tailwind, contribuindo para uma experiência visual moderna, responsiva e de alta performance. Meu papel envolveu tanto o design de UI/UX quanto o desenvolvimento front-end, garantindo uma navegação fluida e centrada no usuário.",
    image: Niloware,
    github: "https://github.com/mjuliamiosso/niloware",
    demo: "https://niloware.com.br/",
  },
  {
    title: "Propabanda Finanças",
    num: "02",
    description:
      "Projeto de um sistema web para gestão financeira, desenvolvido com foco em clareza, usabilidade e performance. A aplicação permite o cadastro e edição de clientes e produtos, além de oferecer um dashboard completo com gráficos de lucro e vendas, histórico de compras dos clientes e filtros para visualizar usuários ativos e inativos. Atuei na criação do design de UI/UX no Figma e no desenvolvimento front-end com Vite e Tailwind, garantindo uma interface moderna, responsiva e funcional. O projeto foi pensado para facilitar o acompanhamento das finanças e auxiliar na tomada de decisões com base em dados visuais e organizados.",
    image: PropabandaFinancas,
    github: "https://github.com/mjuliamiosso/propabanda-financial-tracker",
    demo: "",
  },
  {
    title: "Logum RH",
    num: "03",
    description:
      "Site desenvolvido para a Logum Recursos Humanos, com foco em recrutamento e seleção de candidatos. O projeto foi pensado para comunicar de forma clara os valores da empresa, facilitar o envio de currículos e destacar os serviços oferecidos. Participei ativamente de todo o processo, desde a criação da interface no Figma até o desenvolvimento front-end com Next.js e Sass. Contribuí para a definição da experiência do usuário (UX) e do design visual (UI), garantindo uma navegação intuitiva, responsiva e alinhada à proposta humanizada da marca.",
    image: Logum,
    github: "https://github.com/mjuliamiosso/logumrh",
    demo: "https://logumrh.com.br/",
  },
];

const projectsPessoais = [
  {
    title: "Rivalsdle",
    num: "01",
    description:
      "Projeto inspirado em jogos diários como Loldle, Smashdle e Valdle, ambientado no universo Marvel. O desafio consiste em adivinhar o personagem do dia por meio de quatro modos distintos como: Clássico, Falas, Habilidades e Emoji cada um oferecendo uma pista única e divertida. Fui responsável pelo design de UI/UX no Figma, desenvolvimento front-end com Next.js e integração com a API para garantir a dinâmica do jogo. O resultado foi uma interface responsiva, interativa e engajante, com foco na experiência do usuário e na diversão diária.",
    image: Rivalsdle,
    github: "https://github.com/mjuliamiosso/rivalsdle",
    demo: "",
  },
  {
    title: "Jogo da Memória",
    num: "02",
    description:
      "Este foi o meu primeiro projeto de desenvolvimento de um jogo, criado com HTML, CSS e JavaScript. Trata-se de um jogo da memória com temas personalizados inspirados em Legend of Zelda, Super Mario, Stardew Valley e Monster Hunter. O jogador deve encontrar os pares de cartas correspondentes, testando sua memória de forma divertida e interativa. Implementei funcionalidades como reinício de partida e troca de temas visuais, proporcionando uma experiência dinâmica e personalizada. Durante o desenvolvimento, pude aplicar e consolidar meus conhecimentos em estrutura de HTML, estilização com CSS e manipulação de DOM com JavaScript, além de explorar o design de interfaces mais envolventes.",
    image: JogoMemoria,
    github: "https://github.com/mjuliamiosso/memory-game",
    demo: "https://mjuliamiosso.github.io/memory-game/",
  },
  {
    title: "Clima e Previsão do Tempo",
    num: "03",
    description:
      "Desenvolvi este site utilizando uma API de clima para exibir informações meteorológicas em tempo real de diferentes localidades. O principal objetivo foi aprimorar minhas habilidades em integração de serviços e consumo de APIs. Com este projeto, pude aprofundar meu conhecimento sobre requisições HTTP, tratamento de dados externos e atualização dinâmica da interface, proporcionando uma experiência útil e interativa para o usuário.",
    image: ClimaPrevisao,
    github: "https://github.com/mjuliamiosso/weather-app",
    demo: "https://weather-app-mjuliamiossos-projects.vercel.app/",
  },
];

const Portfolio = () => {
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
      id="portfolio"
      className="container mx-auto sectionSpacing flex flex-col gap-10"
    >
      <h2 className="sectionHeading px-5 ">Portfólio</h2>

      {/* Profissionais */}
      <div className="flex flex-col gap-5 px-5">
        <h3 className="text-xl font-medium text-[var(--color-primary)]">
          Projetos Profissionais
        </h3>
        <Projects projects={projectsProfissionais} />
      </div>

      {/* Pessoais */}
      <div className="flex flex-col gap-5 px-5">
        <h3 className="text-xl font-medium text-[var(--color-primary)]">
          Projetos Pessoais
        </h3>
        <Projects projects={projectsPessoais} />
      </div>
    </motion.section>
  );
};

export default Portfolio;
