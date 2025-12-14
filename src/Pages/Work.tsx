import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";

export default function Work() {
    const functions = [
        "Diseño y desarrollo de landing pages modernas",
        "Implementación de formularios y CTA",
        "Optimización de rendimiento y SEO",
        "Despliegue y CI/CD",
        "Integración con APIs REST",
        "Desarrollo full stack (MERN)"
    ];

    const variant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section className="w-full mt-20 p-4 bg-radial from-primary-900 via-transparent to-primary-950">
            <h2 className="text-4xl subtitle text-center">
                Experiencia Laboral
            </h2>

            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start p-8 my-10 rounded-2xl transition-all duration-pro group">
                <div className="shrink-0 relative">
                    <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                        src="/cetzzlabs.webp"
                        alt="CetZz Labs Logo"
                        className="relative w-24 h-24 rounded-2xl object-contain bg-black/20 p-2 border border-primary-800/50"
                    />
                </div>

                <div className="space-y-6 grow">
                    <motion.div
                        variants={variant}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                        <div>
                            <h3 className="text-3xl subtitle">CetZz Labs</h3>
                            <p className="font-medium group-hover:text-accent-300 transition-colors duration-pro">Full Stack Developer</p>
                        </div>
                        <span className="text-xs px-3 py-1 rounded-full bg-primary-900/50 border border-primary-800 text-primary-300 whitespace-nowrap">
                            Agosto 2025 - Presente
                        </span>
                    </motion.div>

                    <div className="space-y-4 text-text-200 leading-relaxed font-light">
                        <motion.p
                            variants={variant}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Desde agosto de 2025 formo parte de CetzzLabs, un estudio freelance de desarrollo, donde participo en la creación de aplicaciones web profesionales y a medida para clientes reales.
                        </motion.p>
                        <motion.p
                            variants={variant}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Mi enfoque principal está en el diseño y desarrollo de landing pages modernas, optimizadas para rendimiento y experiencia de usuario, utilizando tecnologías como React, Astro, TailwindCSS y Vercel.
                        </motion.p>
                    </div>

                    <motion.h2
                        variants={variant}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-xl subtitle"
                    >
                        Funciones
                    </motion.h2>
                    <motion.ul
                        variants={variant}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="list-disc list-inside text-gray-400 px-6 space-y-2"
                    >
                        {functions.map((objetive, index) => (
                            <li key={index}>{objetive}</li>
                        ))}
                    </motion.ul>
                    <motion.a
                        variants={variant}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8, delay: 0.5 }}
                        href="https://cetzzlabs.com.ar/" target="_blank" rel="noopener noreferrer" className="btn-link-arrow group mt-4">
                        Ver sitio web
                        <FaArrowRight />
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
