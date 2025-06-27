import Header from "./components/Header";
import Footer from "./components/Footer";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <>
      <Header />
      <WorkExperience
        company={"Niloware"}
        title={"Dev Front End"}
        date={"Jul 2024 - Atualmente"}
        description={`Atuo como Desenvolvedora Front End Júnior na  criação de sites personalizados para clientes da região do Vale do  Paraíba, atendendo empresas como Pousada Ilhabela, Litoral Pisos,  Clínica Ápice, Marmoraria Stone e Gesso Andrade. Desenvolvi websites em  React e Wordpress, realizando a configuração de plugins de SEO, otimização de  conteúdo, ajustes de performance e melhorias na usabilidade, ações que  contribuíram diretamente para o aumento da visibilidade e alcance  orgânico dos sites. <br> Todos os projetos seguiam uma rotina  estruturada: criação de protótipos no Figma, apresentação para validação com o cliente e, só então, início do desenvolvimento.<br> Além dos  sites institucionais, participei de projetos com maior nível de  personalização utilizando React, como a plataforma da Logum RH, uma  aplicação web voltada para gestão de recursos humanos. Nesse projeto,  contribuí desde a análise de viabilidade até a implementação do  front-end, aplicando conceitos de UI/UX para garantir uma experiência  intuitiva, responsiva e funcional. Trabalhei com foco em hierarquia  visual, acessibilidade, consistência entre componentes e fluxo de  navegação fluido, garantindo que a interface atendesse tanto às  necessidades do cliente quanto às expectativas dos usuários finais. `}
      ></WorkExperience>
      <Footer />
    </>
  );
}

export default App;
