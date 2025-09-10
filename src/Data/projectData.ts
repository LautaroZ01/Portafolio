import { Project, Techs } from "../Types/project";


export const projects: Project[] = [
    {
        id: 1,
        title: "UpTask",
        status: "Desplegado",
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'React Router', 'React Query', 'Zod', 'Node.js', 'MongoDB', 'Express.js'],
        description: "UpTask es una aplicación de gestión de tareas que permite a los usuarios crear, editar y eliminar proyectos. Donde cada proyecto tiene su propia lista de tareas que a su vez tienen diferentes estados y los colaboradores pueden agregar notas a cada una de ellas. La aplicación utiliza React para el frontend y Node.js con Express.js para el backend.",
        type: "Full Stack",
        githubUrl: [
            {
                url: "https://github.com/LautaroZ01/UpTask_FrontEnd",
                type: "Frontend"
            },
            {
                url: "https://github.com/LautaroZ01/UpTask_BackEnd",
                type: "Backend"
            }
        ],
        demoUrl: 'https://up-task-front-end.vercel.app',
        thumbnail: "/Projects/UpTask/home.webp",
        gallery: [
            '/public/Projects/UpTask/login.webp',
            '/public/Projects/UpTask/register.webp',
            '/public/Projects/UpTask/change-password.webp',
            '/public/Projects/UpTask/profile.webp',
            '/public/Projects/UpTask/home.webp',
            '/public/Projects/UpTask/create-project.webp',
            '/public/Projects/UpTask/tasks.webp',
            '/public/Projects/UpTask/task.webp',
            '/public/Projects/UpTask/team.webp',
        ],
        objetives: [
            'Aprender a utlizar el MERN Stack',
            'Aplicar roles y permisos',
            'Implementar una RESTAPI completa',
            'Manejo de CRUDs completos',
            'Manejo de errores y validaciones con Zod',
            'Aprender a hacer despliegues con Vercel'
        ],
        features: [
            'Autenticación con JWT',
            'Gestión de proyectos',
            'Gestión de tareas',
            'Validacion de datos en los formularios',
            'Envio de emails',
        ],
    },
    {
        id: 2,
        title: "Blog",
        status: "En desarrollo",
        thumbnail: "/Projects/Blog/home.webp",
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'React Router', 'React Query', 'Zod', 'Node.js', 'MongoDB', 'Express.js'],
    },
    {
        id: 3,
        title: "Recetario",
        status: "En desarrollo",
        thumbnail: "/Projects/Recetas/home.webp",
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'Zustand'],
    }
]

export const techs: Techs[] = [
    {
        name: 'Node.js',
        iconPatch: '/public/icons/nodejs.svg'
    },
    {
        name: 'MongoDB',
        iconPatch: '/public/icons/mongodb.svg'
    },
    {
        name: 'Express.js',
        iconPatch: '/public/icons/expressjs_dark.svg'
    },
    {
        name: 'TailwindCSS',
        iconPatch: '/public/icons/tailwindcss.svg'
    },
    {
        name: 'TypeScript',
        iconPatch: '/public/icons/typescript.svg'
    },
    {
        name: 'JavaScript',
        iconPatch: '/public/icons/javascript.svg'
    },
    {
        name: 'React',
        iconPatch: '/public/icons/react.svg'
    },
    {
        name: 'HTML',
        iconPatch: '/public/icons/html5.svg'
    },
    {
        name: 'CSS',
        iconPatch: '/public/icons/css.svg'
    },
    {
        name: 'React Router',
        iconPatch: '/public/icons/reactrouter.svg'
    },
    {
        name: 'React Query',
        iconPatch: '/public/icons/reactquery.svg'
    },
    {
        name: 'Zod',
        iconPatch: '/public/icons/zod.svg'
    }
]


