import { FaGithub, FaArrowRight } from "react-icons/fa";
import { socialMedials } from "../Data/data";
import WebIcons from "../Components/WebIcons";
import { motion } from "motion/react";

export default function AboutMe() {
  return (

    <section className="border-y border-primary-800/40 w-full mt-20 mb-40">
      <div className="grid grid-cols-4 grid-rows-2 container mx-auto">
        <div className="row-span-2 border-x border-primary-800/40 about-me-grid-item">
          <div className="size-30 grid place-items-center rounded-full bg-primary-900 relative">
            <img src="/user-index.svg" alt="Foto de Perfil" className="size-full rounded-full object-cover" />
            <a
              href="https://github.com/LautaroZ01"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-0 right-0 btn-rounded"
            >
              <FaGithub />
            </a>
          </div>
          <h2 className="text-2xl subtitle">Zuleta Lautaro</h2>
          <p className="font-semibold text-gray-400">Desarrollador Full Stack</p>
          <a href="mailto:lautarozule80@gmail.com" className="text-sm text-gray-400">lautarozule80@gmail.com</a>
          <a href="#projects-section" className="btn-link-arrow group my-4">
            Ver proyectos
            <FaArrowRight/>
          </a>
        </div>
        <div className="col-span-3 border-r border-b border-primary-800/40 about-me-grid-item">
          <h3 className="text-2xl subtitle">Sobre Mí</h3>
          <p className="text-text-200 mb-4">
            Soy un desarrollador web apasionado por la programación y el software. Mi entusiasmo me impulsa a aprender constantemente y mejorar mis habilidades. Me especializo en el desarrollo web fullstack.
          </p>
          <p className="text-text-200">
            Mi objetivo es formar parte de un equipo donde pueda seguir creciendo como profesional, aportando mis conocimientos y aprendiendo de desarrolladores más experimentados. Me motiva enfrentar nuevos desafíos y encontrar soluciones creativas a problemas complejos.
          </p>
        </div>
        <div className="col-start-4 row-start-2 border-x border-primary-800/40 about-me-grid-item">
          <h3 className="subtitle text-xl">¿Tienes un proyecto en mente?</h3>
          <a href="#contact-me" className="btn-link-arrow group my-8">
            Contactar Ahora
            <FaArrowRight/>
          </a>
          <div className="flex gap-4">
            {socialMedials.map((media) => (
              <motion.a
                key={media.id}
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 p-2 rounded-full hover:bg-primary-900 hover:text-primary-50 transition-colors duration-pro"
                aria-label={media.name}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <WebIcons name={media.name} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
