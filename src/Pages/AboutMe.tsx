import { FaGithub } from "react-icons/fa";
import { socialMedials } from "../Data/data";
import WebIcons from "../Components/WebIcons";
import { motion } from "motion/react";

export default function AboutMe() {
  const variant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const dynamicItemVariants = {
    hidden: { opacity: 0, y: 20, },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.5 } }),
  };

  return (

    <section className="border-y border-primary-800/40 w-full mt-20 mb-40" id="about-me">
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 container mx-auto">
        <motion.div
          className="lg:row-span-2 lg:border-x border-b lg:border-b-0 border-primary-800/40 about-me-grid-item"
          variants={variant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.3 }}
        >
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
            <WebIcons name="ArrowRight" />
          </a>
        </motion.div>

        <div className="lg:col-span-3 lg:border-r border-b border-primary-800/40 about-me-grid-item">
          <motion.h3
            className="text-2xl subtitle"
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Sobre Mí
          </motion.h3>
          <motion.p
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-text-200 mb-4">
            Soy un desarrollador web apasionado por la programación y el software. Mi entusiasmo me impulsa a aprender constantemente y mejorar mis habilidades. Me especializo en el desarrollo web fullstack.
          </motion.p>
          <motion.p
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-text-200">
            Mi objetivo es formar parte de un equipo donde pueda seguir creciendo como profesional, aportando mis conocimientos y aprendiendo de desarrolladores más experimentados. Me motiva enfrentar nuevos desafíos y encontrar soluciones creativas a problemas complejos.
          </motion.p>
        </div>

        <div className="lg:col-start-4 lg:row-start-2 lg:border-x border-primary-800/40 about-me-grid-item">
          <motion.h3
            className="subtitle text-xl"
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            ¿Tienes un proyecto en mente?
          </motion.h3>
          <motion.a
            href="#contact-me"
            className="btn-link-arrow group my-8"
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Contactar Ahora
            <WebIcons name="ArrowRight" />
          </motion.a>
          <div
            className="flex gap-4">
            {socialMedials.map((media, index) => (
              <motion.a
                key={media.id}
                variants={dynamicItemVariants}
                initial="hidden"
                whileInView="visible"
                custom={index + 1}
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 p-2 rounded-full hover:bg-primary-900 hover:text-primary-50 transition-colors duration-pro"
                aria-label={media.name}
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
