import { FaArrowRight } from "react-icons/fa";
import { projects } from "../Data/projectData";
import { Link } from "react-router-dom";

export default function Portfolio() {
    return (
        <section className="min-h-full min-w-full flex flex-col items-center justify-center mt-2" id="projects-section">
            <h1 className="text-4xl font-black bg-gradient-to-r from-primary-100 to-primary-200 bg-clip-text text-transparent">
                Mis Proyectos
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                {projects.map(project => (
                    <article key={project.id} className="my-4 ">
                        <div className="py-20 px-10 rounded-lg bg-radial-[ellipse_at_center] from-black to-bg-100/80">
                            <div className="overflow-hidden bg-gradient-to-br from-primary-100 to-black rounded-lg">

                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="bg-bg-100 object-top translate-6 object-cover aspect-video shadow-lg rounded-md shadow-bg-100 hover:translate-none transition-transform duration-pro"
                                />
                            </div>
                        </div>
                        <div className="gap-4 my-4 flex flex-col items-start justify-start">
                            <h3 className="bg-gradient-to-r from-primary-100 to-white bg-clip-text text-transparent text-3xl font-black">{project.title}</h3>
                            <Link to={`/project/${project.id}`} className="uppercase font-medium flex items-center gap-2 text-primary-200 text-sm group">
                                Saber más
                                <FaArrowRight className="group-hover:translate-x-5 group-hover:-rotate-45 transition-transform duration-pro" />
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
