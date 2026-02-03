import { Link, useParams } from "react-router-dom"
import { projects, techs } from "../Data/projectData"
import { useEffect } from "react"
import GalleryCarousel from "../Components/GalleryCarousel"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

export default function ProjectPage() {
  const params = useParams()
  const projectId = params.id!
  const project = projects.find(project => project.id === Number(projectId))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projectTechs = techs.filter(tech => project?.technologies.includes(tech.name))

  if (!project) return null

  return (
    <main>
      <div className="lg:max-w-4xl mx-auto p-6">
        <Link to="/" className="btn-link-arrow group my-4">
          <FaArrowLeft />
          Volver al portafolio
        </Link>
        <h1 className="text-4xl font-bold bg-linear-to-r from-primary-300 to-primary-600 bg-clip-text text-transparent mb-2">{project.title}</h1>
        <GalleryCarousel images={project.gallery} />

        <small className="bg-primary-800/50 text-primary-200 px-2 py-0.5 rounded-full">{project.type}</small>
        <h2 className="text-2xl subtitle">Descripción</h2>
        <p className="text-gray-400 text-balance mb-10">{project.description}</p>

        <div className="flex flex-wrap gap-6 my-10">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-link-arrow group">
              Ver Demo
              <FaArrowRight />
            </a>
          )}
          {project.githubUrl.map((url, index) => (
            <a key={index} href={url.url} target="_blank" rel="noopener noreferrer" className="btn-link-arrow group">
              Ver {url.type}
              <FaArrowRight />
            </a>
          ))}
        </div>

        <h2 className="text-2xl subtitle">Tecnologías</h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {projectTechs.map((tech) => (
            <small key={tech.name} className="bg-primary-800/50 text-primary-200 px-2 py-0.5 rounded-full">{tech.name}</small>
          ))}
        </div>

        <h2 className="text-xl subtitle">Objetivos</h2>
        <ul className="list-disc list-inside text-gray-400 px-6">
          {project.objetives.map((objetive, index) => (
            <li key={index}>{objetive}</li>
          ))}
        </ul>

        <h2 className="text-xl subtitle">Características</h2>
        <ul className="list-disc list-inside text-gray-400 px-6">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <Link to="/" className="btn-link-arrow group my-10">
          <FaArrowLeft />
          Volver al portafolio
        </Link>
      </div>
    </main>
  )
}
