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
            '/Projects/UpTask/login.webp',
            '/Projects/UpTask/register.webp',
            '/Projects/UpTask/change-password.webp',
            '/Projects/UpTask/profile.webp',
            '/Projects/UpTask/home.webp',
            '/Projects/UpTask/create-project.webp',
            '/Projects/UpTask/tasks.webp',
            '/Projects/UpTask/task.webp',
            '/Projects/UpTask/team.webp',
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
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'React Router', 'React Query', 'Zod', 'Node.js', 'MongoDB', 'Express.js'],
        description: 'Una aplicacion web desarrollada como proyecto final de mi carrera universitaria. Destinada a la publicacion de articulos y la gestion de los mismos. Donde los usuarios que registrados podran interactuar con los articulos publicados, dejando su comentaria y reaccionando. Tambien cuenta con un chat en tiempo real donde los usuarios pueden interactuar con los diferentes escritores',
        type: 'Full Stack',
        githubUrl: [
            {
                url: "https://github.com/LautaroZ01/Blog-Client",
                type: "Frontend"
            },
            {
                url: "https://github.com/LautaroZ01/Blog-Server",
                type: "Backend"
            }
        ],
        thumbnail: "/Projects/Blog/home.webp",
        gallery: [
            '/Projects/Blog/login.webp',
            '/Projects/Blog/register.webp',
            '/Projects/Blog/home.webp',
            '/Projects/Blog/post.webp',
            '/Projects/Blog/comment.webp',
            '/Projects/Blog/chat.webp',
            '/Projects/Blog/profile.webp',
            '/Projects/Blog/dashboard-post.webp',
            '/Projects/Blog/create-post.webp',
            '/Projects/Blog/modal-user.webp'
        ],
        objetives: [
            'Aplicar todos mis conocimientos obtenidos en los diferentes cursos',
            'Implementar una RESTAPI completa',
            'Manejo de CRUDs completos',
            'Manejo de errores y validaciones con Zod',
            'Aprender el protocolo WebSocket para la creacion de un chat en tiempo real'
        ],
        features: [
            'Autenticación con JWT, Google y Facebook',
            'Gestión de articulos, categorias, etiquetas y comentarios',
            'Gestión de usuario',
            'Chat en tiempo real',
            'Validacion de datos en los formularios',
            'Envio de emails',
            'Generacion de PDF/Exel',
            'Manejo de roles y permisos'
        ],
    },
    {
        id: 3,
        title: "Recetario",
        status: "En desarrollo",
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'Zustand'],
        githubUrl: [
            {
                url: "https://github.com/LautaroZ01/bebidas-react-typescript",
                type: "Frontend"
            }
        ],
        demoUrl: 'https://bebidas-react-typescript-indol.vercel.app',
        thumbnail: "/Projects/Recetas/home.webp",
        gallery: [
            '/public/Projects/Recetas/list.webp',
            '/public/Projects/Recetas/home.webp',
            '/public/Projects/Recetas/modal.webp',
            '/public/Projects/Recetas/favorite.webp'
        ],
        objetives: [
            'Afianzar mis conocimiento en React con TypeScript',
            'Aprender el uso de estados globales mediante Zustand',
            'Aprender a consumir una API externa'
        ],
        features: [
            'Consumo de una API externa',
            'Gestión de estados globales',
            'Validacion de datos en los formularios',
            'Implementacion de un modal',
            'Implementacion de un sistema de favoritos'
        ],
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


