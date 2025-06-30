import { useState } from "react";
import Button from "./Button";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" absolute w-full">
      <div className="container mx-auto flex items-center justify-between py-3 relative">
        <p className="uppercase text-[var(--color-primary)] font-bold text-2xl">
          MJmiosso
        </p>

        {/* Desktop */}
        <nav className="hidden lg:flex lg:gap-5 lg:items-center">
          <a
            href="#aboutMe"
            className="text-base font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition"
          >
            Sobre mim
          </a>
          <a
            href="#workExperience"
            className="text-base font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition"
          >
            Experiências
          </a>
          <a
            href="#portfolio"
            className="text-base font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition"
          >
            Portfólio
          </a>
          <a href="#footer">
            <Button>Contato</Button>
          </a>
        </nav>

        {/* Mobile menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-3xl text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition cursor-pointer"
          aria-label="Abrir menu"
        >
          {isMenuOpen ? <IoClose /> : <HiMenuAlt3 />}
        </button>

        {/* Mobile navegação */}
        {isMenuOpen && (
          <nav className="fixed top-0 left-0 w-screen h-screen bg-white flex flex-col items-center justify-center gap-6 px-6 z-[999] lg:hidden">
            {/* Botão de fechar */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-3xl text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition cursor-pointer"
              aria-label="Fechar menu"
            >
              <IoClose />
            </button>

            {/* Navegação */}
            <a
              href="#aboutMe"
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition"
            >
              Sobre mim
            </a>
            <a
              href="#workExperience"
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition"
            >
              Experiências
            </a>
            <a
              href="#portfolio"
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition"
            >
              Portfólio
            </a>
            <a href="#footer" onClick={() => setIsMenuOpen(false)}>
              <Button>Contato</Button>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
