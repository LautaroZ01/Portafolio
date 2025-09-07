import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { projects } from "../Data/projectData"
import { IoIosArrowBack } from "react-icons/io";
import { RiShareBoxFill } from "react-icons/ri";
import { FaGithub, FaRegCheckCircle } from "react-icons/fa";
import { LuPin } from "react-icons/lu";
import Footer from "../Components/Footer";

export default function ProjectPage() {
  const { id } = useParams()
  const project = projects.find(project => project.id === Number(id))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return <div>Proyecto no encontrado</div>
  }

  return (
    <main className="w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8 sticky top-0 z-30 bg-black/80 backdrop-blur-md rounded-b-lg p-2">
        <div className="flex items-center gap-4 py-2">
          <Link to="/#projects-section" className="btn-rounded">
            <IoIosArrowBack />
          </Link>
          <h1 className="bg-gradient-to-r from-primary-100 to-white bg-clip-text text-transparent text-3xl font-black grow">
            {project.title}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-rounded">
              <FaGithub />
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-rounded">
              <RiShareBoxFill />
            </a>
          )}
        </div>
      </div>

      <div className="relative rounded-lg overflow-hidden shadow-xl px-4 ">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-auto transform hover:scale-105 transition-transform duration-300 rounded-md"
        />
      </div>

      <div className="p-8 flex flex-col gap-8 bg-radial-[ellipse_at_top] from-bg-100 to-black rounded-md">
        <div>
          <h2 className="bg-gradient-to-r from-primary-100 to-primary-200 bg-clip-text text-transparent text-2xl font-black mb-2">
            Descripción
          </h2>
          <p className="text-text-200 leading-relaxed mt-2">
            {project.description}
          </p>
        </div>

        <div>
          <h2 className="bg-gradient-to-r from-primary-100 to-primary-200 bg-clip-text text-transparent text-2xl font-black mb-2">
            Desafío Técnico
          </h2>
          <p className="text-text-200 leading-relaxed mt-2">
            {project.technicalChallenge}
          </p>
        </div>

        <div className="flex gap-4 items-start justify-between">
          <div>
            <h2 className="bg-gradient-to-r from-primary-100 to-primary-200 bg-clip-text text-transparent text-2xl font-black mb-2">
              Características
            </h2>
            <ul className="px-2 flex flex-col gap-4 mt-4">
              {project.features.map((feature: string, index: number) => (
                <li key={index} className="text-text-200 flex items-center gap-2">
                  <span className="text-primary-100">
                    <LuPin />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="bg-gradient-to-r from-primary-100 to-primary-200 bg-clip-text text-transparent text-2xl font-black mb-2">
              Responsabilidades
            </h2>
            <ul className="px-2 flex flex-col gap-4 mt-4">
              {project.responsibilities.map((responsibility: string, index: number) => (
                <li key={index} className="text-text-200 flex items-center gap-2">
                  <span className="text-primary-100">
                    <FaRegCheckCircle />
                  </span>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="bg-gradient-to-r from-primary-100 to-primary-200 bg-clip-text text-transparent text-2xl font-black mb-2">
            Tecnologías
          </h2>
          <div className="flex flex-wrap gap-4 mt-4">
            {project.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-3 py-2 bg-bg-200/50 rounded-full text-sm font-medium text-balance transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4 items-center justify-end">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" className="btn-secundary flex items-center gap-2">
              <FaGithub />
              <span>Ver código</span>
            </a>
          )}

          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" className="btn-primary flex items-center gap-2">
              <RiShareBoxFill />
              <span>Visitar página</span>
            </a>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}

