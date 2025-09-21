import { useNavigate, useParams } from "react-router-dom"
import { projects, techs } from "../Data/projectData"
import { MdOutlineArrowBackIos } from "react-icons/md"
import { FaGithub } from "react-icons/fa"
import { HiLink } from "react-icons/hi"
import GalleryCarousel from "../Components/GalleryCarousel"

export default function ProjectPage() {
  const params = useParams()
  const projectId = params.id!
  const project = projects.find(project => project.id === Number(projectId))

  const navigate = useNavigate()

  const projectTechs = techs.filter(tech => project?.technologies.includes(tech.name))

  if (project) return (
    <main className="">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-bg-100/70 flex items-center justify-between gap-4 p-4 rounded-b-lg lg:max-w-5xl lg:mx-auto">
        <button onClick={() => navigate(-1)} className="btn-rounded-link cursor-pointer">
          <MdOutlineArrowBackIos />
        </button>
        <h1 className="text-3xl font-black">{project.title}</h1>
        <div className="flex items-center gap-2">
          <a href={project.githubUrl[0].url} target="_blank" className="btn-rounded">
            <FaGithub />
          </a>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" className="btn-rounded">
              <HiLink />
            </a>
          )}
        </div>
      </header>
      <GalleryCarousel images={project.gallery} type={project.type} status={project.status} />

      <section className="p-8 lg:p-12 rounded-2xl shadow-lg bg-radial from-bg-100 to-black ">
        <div className="max-w-5xl mx-auto text-text-200">
          <p className="my-8 text-lg leading-relaxed text-center text-text-100">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 my-8">
            {projectTechs.map(technology => (
              <span
                key={technology.name}
                className="cursor-default flex items-center gap-2 py-1.5 px-3 rounded-full text-sm hover:scale-105 hover:shadow-lg hover:shadow-primary-100/40 bg-transparent outline outline-primary-100 transition-all duration-pro"
              >
                <img
                  src={technology.iconPatch}
                  alt={technology.name}
                  className="size-6"
                />
                {technology.name}
              </span>
            ))}
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 my-10">
            <div className="project-card">
              <h2 className="font-bold text-xl mb-4 text-primary-200 text-center lg:text-left">
                Objetivos
              </h2>
              <ul className="space-y-2 list-disc list-inside text-text-200">
                {project.objetives.map(objetive => (
                  <li key={objetive}>{objetive}</li>
                ))}
              </ul>
            </div>
            <div className="project-card">
              <h2 className="font-bold text-xl mb-4 text-primary-200 text-center lg:text-left">
                Características
              </h2>
              <ul className="space-y-2 list-disc list-inside text-text-200">
                {project.features.map(feature => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <footer className="flex flex-col lg:flex-row items-center justify-center gap-4 my-10">
            {project.githubUrl.map((repo, index) => (
              <a
                key={index}
                href={repo.url}
                target="_blank"
                className="btn-primary flex items-center gap-2"
              >
                <FaGithub />
                {repo.type}
              </a>
            ))}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                className="btn-secundary flex items-center gap-2"
              >
                <HiLink />
                Demo
              </a>
            )}
          </footer>
        </div>
      </section>

    </main>
  )
}
