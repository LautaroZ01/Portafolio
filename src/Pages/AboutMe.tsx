import { FaGithub, FaArrowRight } from "react-icons/fa";
import { socialMedials } from "../Data/data";
import WebIcons from "../Components/WebIcons";

export default function AboutMe() {
    return (
        <section className="min-h-screen w-full flex items-center justify-center py-20 px-4" id="about-me">
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-4 row-span-2 p-8 rounded-2xl bg-gradient-to-br from-bg-100 to-black transition-all duration-500 flex flex-col items-center justify-between">
                    <div className="w-full space-y-6">
                        <div className="relative size-40 mx-auto -mt-20 transition-transform duration-500">
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
                                className="absolute -bottom-2 -right-2 p-3 bg-primary-100 rounded-full text-text-100 hover:bg-bg-100 border-2 border-bg-100 transition-all duration-300"
                            >
                                <FaGithub className="text-xl" />
                            </a>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-100 to-primary-200 bg-clip-text text-transparent">Zuleta Lautaro</h2>
                            <p className="text-gray-400 mt-2">Desarrollador Web</p>
                            <p className="text-sm text-gray-500 mt-1">lautarozule80@gmail.com</p>
                        </div>
                    </div>
                    <a
                        href="#projects-section"
                        className="btn-primary flex items-center gap-2 w-full justify-center"
                    >
                        Ver Proyectos <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="lg:col-span-8 p-8 rounded-2xl bg-gradient-to-br from-bg-100 to-black transition-all duration-500 group">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-8 bg-gradient-to-b from-primary-100 to-primary-200 rounded-full"></div>
                        <h2 className="text-3xl font-black bg-gradient-to-r from-primary-100 to-primary-200 bg-clip-text text-transparent">Sobre Mí</h2>
                    </div>
                    <p className="text-text-200 leading-relaxed text-balance text-sm">
                        Soy un desarrollador web apasionado por la programación y el software. Aunque aún no cuento con experiencia profesional, mi entusiasmo me impulsa a aprender constantemente y mejorar mis habilidades. Me especializo en el desarrollo frontend, con un fuerte enfoque en crear experiencias de usuario únicas.
                        <br /><br />
                        Mi objetivo es formar parte de un equipo donde pueda seguir creciendo como profesional, aportando mis conocimientos y aprendiendo de desarrolladores más experimentados. Me motiva enfrentar nuevos desafíos y encontrar soluciones creativas a problemas complejos.
                    </p>
                </div>

                <div className="lg:col-span-4 lg:col-start-9 p-8 rounded-2xl bg-gradient-to-br from-bg-100 to-black transition-all duration-500 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-8 bg-gradient-to-b from-primary-100 to-primary-200 rounded-full"></div>
                            <h3 className="text-xl font-bold bg-gradient-to-r from-primary-100 to-primary-200 bg-clip-text text-transparent">¿Tienes un proyecto en mente?</h3>
                        </div>
                        <p className="text-text-200 text-sm mb-6">Estoy disponible para colaborar en proyectos interesantes y desafiantes.</p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-center gap-4">
                            {socialMedials.map(media => (
                                <a
                                    key={media.id}
                                    href={media.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full text-text-200 hover:bg-primary-100 hover:text-text-100 transition-all duration-300 hover:scale-110"
                                    aria-label={media.name}
                                >
                                    <WebIcons name={media.name} />
                                </a>
                            ))}
                        </div>
                        <a
                            href="#contact-me"
                            className="grow border shadow-lg border-primary-100 hover:border-transparent hover:bg-primary-100 transition-all duration-pro rounded-lg px-6 py-2 text-center"
                        >
                            Contactar Ahora
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
