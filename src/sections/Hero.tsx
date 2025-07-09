import Button from "../components/Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bgHero">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-5 container mx-auto flex flex-col text-center items-center gap-7 h-screen justify-center lg:items-start lg:text-left"
      >
        <div>
          <p className="text-base text-[var(--color-text-primary)]">
            Olá! Sou Maria Júlia
          </p>
          <h1 className="text-[2rem] font-bold text-[var(--color-primary)] mt-[-10px] lg:text-[2.5rem]">
            Desenvolvedora Front End
          </h1>
        </div>
        <p className="text-xl text-[var(--color-text-primary)]">
          Desenvolvo soluções web com foco em usabilidade e resultado.
        </p>
        <div className="flex gap-3">
          <a href="#footer">
            <Button variant="gradient">Entrar em contato</Button>
          </a>
          <a href="./maria-julia-miosso.pdf" download="Maria Júlia Miosso">
            <Button variant="outlined">Download CV</Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
