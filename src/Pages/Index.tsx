import { motion } from "motion/react";

export default function Index() {
  return (
    <main
      className="min-h-full min-w-full flex flex-col items-center justify-center gap-6 bg-radial-[ellipse_at_top] from-primary-900 via-transparent to-primary-950"
      id="home-section"
    >
      <motion.div
        className="rounded-full border border-primary-100 relative"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src="./user-index.svg"
          alt="Foto de perfil"
          className="size-36 rounded-full object-cover"
        />
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <small className="block">Hola ! 👋🏻,</small>
        <h1 className="text-4xl font-black text-gray-200">
          Soy{" "}
          <span className="bg-gradient-to-r from-primary-300 to-primary-600 bg-clip-text text-transparent">
            Zuleta Lautaro
          </span>
        </h1>
        <p className="max-w-[75ch] mx-auto mt-4 text-text-200">
          Desarrollador web full stack con experiencia en la creación de
          aplicaciones web modernas y eficientes.
        </p>
      </motion.div>

      <motion.div
        className="flex items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      >
        <a href="#about-me" className="grow btn-secundary">
          Saber más
        </a>
        <a
          href="/CV/CV Lautaro Nicolas Zuleta.pdf"
          target="_blank"
          className="grow btn-primary"
        >
          Descargar CV
        </a>
      </motion.div>
    </main>
  );
}
