
type ProjectType = 'Full Stack' | 'Frontend' | 'Backend';
type ProjectStatus = 'En desarrollo' |'Finalizado' | 'Desplegado';
type RepositoryType = 'Backend' | 'Frontend';

export type Techs = {
    name: string;
    iconPatch: string;
}

type Repository = {
    url: string;
    type: RepositoryType;
}

export interface Project {
    id: number
    title: string
    status: ProjectStatus
    technologies: Techs['name'][]
    description: string
    type: ProjectType
    githubUrl: Repository[]
    demoUrl?: string
    thumbnail: string
    gallery: string[]
    features: string[]
    objetives: string[]
}