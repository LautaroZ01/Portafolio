import { useNavigate, useParams } from "react-router-dom"
import { projects, techs } from "../Data/projectData"
import { MdOutlineArrowBackIos } from "react-icons/md"
import { FaGithub } from "react-icons/fa"
import { HiLink } from "react-icons/hi"
import GalleryCarousel from "../Components/GalleryCarousel"
import { motion } from "motion/react"
import { useEffect } from "react"

export default function ProjectPage() {
  const params = useParams()
  const projectId = params.id!
  const project = projects.find(project => project.id === Number(projectId))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navigate = useNavigate()

  const projectTechs = techs.filter(tech => project?.technologies.includes(tech.name))

  if (!project) return null

  return (
    <main>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 backdrop-blur-md bg-bg-100/70 flex items-center justify-between gap-4 p-4 rounded-b-lg lg:max-w-5xl lg:mx-auto"
      >
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
      </motion.header>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <GalleryCarousel images={project.gallery} type={project.type} status={project.status} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-3 mt-8"
      >
        {projectTechs.map(technology => (
          <span key={technology.name} className="badge-skills">
            <img
              src={technology.iconPatch}
              alt={technology.name}
              className="size-6"
            />
            {technology.name}
          </span>
        ))}
      </motion.div>

      <motion.section
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        className="p-8 rounded-2xl shadow-lg bg-radial from-bg-100 to-black"
      >
        <div className="max-w-5xl mx-auto text-text-200">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="my-8 text-lg leading-relaxed text-center text-text-100"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, staggerChildren: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 my-10"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="project-card"
            >
              <h2>
                Objetivos
              </h2>
              <ul>
                {project.objetives.map(objetive => (
                  <li key={objetive}>{objetive}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="project-card"
            >
              <h2>
                Características
              </h2>
              <ul>
                {project.features.map(feature => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.footer
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col lg:flex-row items-center justify-center gap-4 my-10"
          >
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
          </motion.footer>
        </div>
      </motion.section>
    </main>
  )
}
