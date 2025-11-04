import { projects } from "../Data/projectData";
import { Link } from "react-router-dom";
import { motion, Variants } from "motion/react";
import WebIcons from "../Components/WebIcons";

export default function Portfolio() {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };


    return (
        <section className="min-h-full min-w-full flex flex-col items-center justify-center mt-2" id="projects-section">
            <motion.h1
                className="text-4xl subtitle"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Mis Proyectos
            </motion.h1>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10"
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                {projects.map(project => (
                    <motion.article
                        key={project.id}
                        className="my-4"
                        variants={item}
                    >
                        <div className="py-20 px-10 rounded-md bg-radial-[ellipse_at_center] from-primary-900 to-primary-950">
                            <div className="overflow-hidden rounded">
                                <Link to={`/project/${project.id}`}>
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="bg-bg-100 object-top object-cover aspect-video shadow-lg shadow-bg-100 hover:scale-110 transition-transform duration-pro"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <h3 className=" text-3xl subtitle">{project.title}</h3>
                            <Link to={`/project/${project.id}`} className="btn-link-arrow group">
                                Saber más
                                <WebIcons name="ArrowRight" />
                            </Link>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    )
}
