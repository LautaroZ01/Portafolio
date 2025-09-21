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
        title: "Recetario con IA",
        status: "Desplegado",
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'Zustand'],
        description: 'Pagina web que permite a los usuarios buscar recetas y guardarlas en favoritos asi como un apartando donde el usuario podra soliciotar recetas al bartender (que podra generarlas con la ayuda de IA). Fue desarrollada para aprender el uso de estados globales mediante Zustand y el consumo de APIs externas',
        type: 'Frontend',
        githubUrl: [
            {
                url: "https://github.com/LautaroZ01/bebidas-react-typescript",
                type: "Frontend"
            }
        ],
        demoUrl: 'https://bebidas-react-typescript-indol.vercel.app',
        thumbnail: "/Projects/Recetas/home.webp",
        gallery: [
            '/Projects/Recetas/list.webp',
            '/Projects/Recetas/home.webp',
            '/Projects/Recetas/modal.webp',
            '/Projects/Recetas/favorite.webp',
            '/Projects/Recetas/ia-generating.webp'
        ],
        objetives: [
            'Afianzar mis conocimiento en React con TypeScript',
            'Aprender el uso de estados globales mediante Zustand',
            'Aprender a consumir una API externa',
            'Aprender a incorporar IA a mis proyectos'
        ],
        features: [
            'Consumo de una API externa',
            'Gestión de estados globales',
            'Validacion de datos en los formularios',
            'Implementacion de un modal',
            'Implementacion de un sistema de favoritos',
            'Implementacion de IA con OpenRouter'
        ],
    }
]

export const techs: Techs[] = [
    {
        name: 'Node.js',
        iconPatch: '/icons/nodejs.svg'
    },
    {
        name: 'MongoDB',
        iconPatch: '/icons/mongodb.svg'
    },
    {
        name: 'Express.js',
        iconPatch: '/icons/expressjs_dark.svg'
    },
    {
        name: 'TailwindCSS',
        iconPatch: '/icons/tailwindcss.svg'
    },
    {
        name: 'TypeScript',
        iconPatch: '/icons/typescript.svg'
    },
    {
        name: 'JavaScript',
        iconPatch: '/icons/javascript.svg'
    },
    {
        name: 'React',
        iconPatch: '/icons/react_dark.svg'
    },
    {
        name: 'HTML',
        iconPatch: '/icons/html5.svg'
    },
    {
        name: 'CSS',
        iconPatch: '/icons/css.svg'
    },
    {
        name: 'React Router',
        iconPatch: '/icons/reactrouter.svg'
    },
    {
        name: 'React Query',
        iconPatch: '/icons/reactquery.svg'
    },
    {
        name: 'Zod',
        iconPatch: '/icons/zod.svg'
    }
]


