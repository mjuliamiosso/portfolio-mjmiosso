import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p>MJMiosso</p>
      <div>
        <p>(12) 9 8805-5373</p>
        <a href="mailto:mjuliamiosso@gmail.com" target="_blank">
          mjuliamiosso@gmail.com
        </a>
        <div>
          <a href="https://github.com/mjuliamiosso" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/maria-julia-miosso/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/mjmiosso/" target="_blank">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
