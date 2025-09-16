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
    <main className="container mx-auto">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-bg-100/70 flex items-center justify-between gap-4 px-4 py-2 rounded-b-lg lg:max-w-5xl lg:mx-auto">
        <button onClick={() => navigate(-1)} className="btn-rounded cursor-pointer">
          <MdOutlineArrowBackIos />
        </button>
        <h1 className="text-3xl font-black">{project.title}</h1>
        <div className="flex items-center gap-2">
          <a href={project.githubUrl[0].url} target="_blank" className="btn-rounded-active">
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

      <section className="p-2 project-container bg-radial-[ellipse_at_bottom] from-bg-100 to-black to-50%">

        <div className="">
          <p className="my-6 p-2 text-balance text-center">{project.description}</p>

          <div className="flex flex-wrap items-center justify-around lg:justify-center gap-2 my-4">
            {projectTechs.map(technology => (
              <small key={technology.name} className="flex items-center gap-2 bg-bg-200/50 py-1 px-2 rounded-full">
                <img src={technology.iconPatch} alt={technology.name} className="size-6" />
                {technology.name}
              </small>
            ))}
          </div>

          <div className="p-2 my-6 flex lg:flex-row flex-col items-start lg:justify-between gap-2">
            <div>
              <h2 className="font-black mb-4 text-center lg:text-left">Objetivos</h2>
              <ul>
                {project.objetives.map(objetive => (
                  <li key={objetive} className="my-2 list-disc ml-4">{objetive}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-black mb-4 text-center lg:text-left">Características</h2>
              <ul>
                {project.features.map(feature => (
                  <li key={feature} className="my-2 list-disc ml-4">{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <footer className="flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-2 my-6 px-4 py-2 project-container">
            {project.githubUrl.map((repo, index) => (
              <a key={index} href={repo.url} target="_blank" className="btn-primary flex items-center justify-center gap-2">
                <FaGithub />
                {repo.type}
              </a>
            ))}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" className="btn-secundary flex items-center justify-center gap-2">
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
