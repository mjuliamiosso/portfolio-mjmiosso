// Icones
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[var(--color-primary-ghost)]">
      <div className="container mx-auto flex flex-col items-center gap-10 py-20  lg:flex-row lg:justify-between">
        <p className="uppercase text-[var(--color-primary)] font-bold text-2xl">
          MJMiosso
        </p>
        <div className="flex flex-col font-medium items-center gap-5 text-[var(--color-text-primary)] text-base lg:flex-row">
          <a
            className="hover:text-[var(--color-primary)] transition"
            href="https://wa.me/5512988055373"
            target="_blank"
          >
            (12) 9 8805-5373
          </a>
          <a
            className="hover:text-[var(--color-primary)] transition"
            href="mailto:mjuliamiosso@gmail.com"
            target="_blank"
          >
            mjuliamiosso@gmail.com
          </a>
          {/* Icones */}
          <div className="flex gap-2.5 text-xl">
            <a
              href="https://github.com/mjuliamiosso"
              target="_blank"
              className="hover:text-[var(--color-primary)] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/maria-julia-miosso/"
              target="_blank"
              className="hover:text-[var(--color-primary)] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/mjmiosso/"
              target="_blank"
              className="hover:text-[var(--color-primary)] transition"
            >
              <RiInstagramFill />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
