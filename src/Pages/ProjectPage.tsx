import { useParams } from "react-router-dom"
import { projects } from "../Data/projectData"

export default function ProjectPage() {
  const params = useParams()
  const projectId = params.id!
  const project = projects.find(project => project.id === Number(projectId))

  if (project) return (
    <section className="">
      
      <h1>{project.title}</h1>
    </section>
  )
}
