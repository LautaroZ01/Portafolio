import { Project } from "../Types/project";

export const projects: Project[] = [
    {
        id: 1,
        title: "UpTask",
        description: "Aplicación de gestión de tareas desarrollada con React y TypeScript, que permite crear, organizar y gestionar proyectos y tareas de manera eficiente.",
        technicalChallenge: "Poder realizar un proyecto Full Stack con TypeScript con una arquitectura MVC y una base de datos NoSQL.",
        imageUrl: "/Projects/UpTask.png",
        githubUrl: "https://github.com/LautaroZ01/UpTask_FrontEnd",
        demoUrl: "https://up-task-front-end.vercel.app/",
        type: "Fullstack",
        date: "2025",
        technologies: [
            "React",
            "TypeScript",
            "TailwindCSS",
            "Vite",
            "Axios",
            "Node.js",
            "Express",
            "MongoDB",
            "JWT",
            "Mongoose",
            "React Query"
        ],
        features: [
            "Gestión de proyectos",
            "Gestión de tareas",
            "Gestión de usuarios",
            "Gestión de roles",
            "Organización de tareas por estados",
            "Filtros y búsqueda de tareas",
            "Interfaz intuitiva y responsive"
        ],
        responsibilities: [
            "Diseño y desarrollo del frontend",
            "Diseño y desarrollo del backend",
            "Diseño y desarrollo de la base de datos",
            "Diseño y desarrollo de la API",
            "Implementación de la lógica de negocio",
            "Optimización de performance"
        ]
    },
    {
        id: 2,
        title: "Portfolio",
        description: "Mi portfolio personal desarrollado con React y TypeScript, que muestra mis proyectos y habilidades de manera profesional.",
        technicalChallenge: "Lograr realizar un proyecto con React y TypeScript que cumpla con los requisitos de un portfolio personal.",
        imageUrl: "/Projects/Portfolio.png",
        githubUrl: "",
        demoUrl: "",
        type: "Frontend",
        date: "2025",
        technologies: [
            "React",
            "TypeScript",
            "TailwindCSS",
            "React Router Dom",
            "React Toastify",
            "React Icons",
            "Vite"
        ],
        features: [
            "Diseño responsive",
            "Secciones dinámicas",
            "Notificaciones",
            "Integración con redes sociales"
        ],
        responsibilities: [
            "Diseño y desarrollo del frontend",
            "Optimización de performance",
            "Responsive design",
            "Implementación de notificaciones",
        ]
    },
    {
        id: 3,
        title: "Planificador",
        description: "Aplicación web para planificar y organizar gastos diarios, con una interfaz intuitiva y fácil de usar.",
        technicalChallenge: "Aprender el uso de los estados globales con Context API y aprender a sincronizar datos locales con Local Storage.",
        imageUrl: "/Projects/Planificador.png",
        githubUrl: "",
        demoUrl: "https://lively-cassata-0b2486.netlify.app/",
        type: "Frontend",
        date: "2025",
        technologies: [
            "React",
            "TypeScript",
            "TailwindCSS",
            "Local Storage",
            "React Icons",
            "Vite",
        ],
        features: [
            "Planificación de gastos",
            "Categorización de gastos",
            "Filtros y búsqueda de gastos",
            "Interfaz intuitiva y responsive",
            "Notificaciones",
            "Sincronización local"
        ],
        responsibilities: [
            "Diseño y desarrollo del frontend",
            "Implementación de persistencia de datos",
            "Implementación de categorización de gastos",
            "Implementación de filtros y búsqueda de gastos",
            "Implementación de sincronización local",
            "Manejo de estados con Context API",
            "Optimización de performance"
        ]
    }
]