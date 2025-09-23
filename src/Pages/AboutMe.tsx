import { FaGithub, FaArrowRight } from "react-icons/fa";
import { socialMedials } from "../Data/data";
import WebIcons from "../Components/WebIcons";
import { motion } from "motion/react";

export default function AboutMe() {
  return (
    <section
      className="min-h-screen w-full flex items-center justify-center py-20 px-4"
      id="about-me"
    >
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Tarjeta izquierda */}
        <motion.div
          className="lg:col-span-4 row-span-2 p-8 rounded-2xl bg-gradient-to-br from-bg-100 to-black flex flex-col items-center justify-between"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-full space-y-6">
            <div className="relative size-40 mx-auto -mt-20">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-100 to-primary-200 border border-primary-200 animate-spin-slow [animation-duration:8s]">
                <div className="size-full rounded-full bg-bg-100 ">
                  <img
                    src="/user-index.svg"
                    alt="Foto de Perfil"
                    className="size-full rounded-full object-cover"
                  />
                </div>
              </div>
              <a
                href="https://github.com/LautaroZ01"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 right-0 btn-rounded scale-125"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-100 to-primary-200 bg-clip-text text-transparent">
                Zuleta Lautaro
              </h2>
              <p className="text-gray-400 mt-2">Desarrollador Web</p>
              <p className="text-sm text-gray-500 mt-1">
                lautarozule80@gmail.com
              </p>
            </div>
          </div>
          <a
            href="#projects-section"
            className="btn-primary flex items-center gap-2 w-full justify-center md:mt-0 mt-6"
          >
            Ver Proyectos{" "}
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Sobre mí */}
        <motion.div
          className="lg:col-span-8 p-8 rounded-2xl bg-gradient-to-br from-bg-100 to-black group"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-primary-100 to-primary-200 rounded-full"></div>
            <h2 className="text-3xl font-black bg-gradient-to-r from-primary-100 to-primary-200 bg-clip-text text-transparent">
              Sobre Mí
            </h2>
          </div>
          <p className="text-text-200 text-balance text-sm mb-4">
            Soy un desarrollador web apasionado por la programación y el software. Mi entusiasmo me impulsa a aprender constantemente y mejorar mis habilidades. Me especializo en el desarrollo web fullstack.
          </p>
          <p className="text-text-200 text-balance text-sm">
            Mi objetivo es formar parte de un equipo donde pueda seguir creciendo como profesional, aportando mis conocimientos y aprendiendo de desarrolladores más experimentados. Me motiva enfrentar nuevos desafíos y encontrar soluciones creativas a problemas complejos.
          </p>
        </motion.div>

        {/* Tarjeta derecha */}
        <motion.div
          className="lg:col-span-4 lg:col-start-9 p-8 rounded-2xl bg-gradient-to-br from-bg-100 to-black flex flex-col justify-between"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-8 bg-gradient-to-b from-primary-100 to-primary-200 rounded-full"></div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary-100 to-primary-200 bg-clip-text text-transparent">
                ¿Tienes un proyecto en mente?
              </h3>
            </div>
            <p className="text-text-200 text-sm mb-6">
              Estoy disponible para colaborar en proyectos interesantes y
              desafiantes.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex justify-center gap-4">
              {socialMedials.map((media) => (
                <motion.a
                  key={media.id}
                  href={media.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-rounded-link"
                  aria-label={media.name}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <WebIcons name={media.name} />
                </motion.a>
              ))}
            </div>
            <a href="#contact-me" className="grow btn-secundary text-center">
              Contactar Ahora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
