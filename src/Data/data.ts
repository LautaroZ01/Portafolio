import type { ContactInfo, Routes, Tool } from "../Types"

export const routes: Routes[] = [
    {
        name: 'Sobre mi',
        path: '#about-me'
    },
    {
        name: 'Proyectos',
        path: '#projects-section'
    },
    {
        name: 'Habilidades',
        path: '#skills-section'
    },
    {
        name: 'Contactos',
        path: '#contact-me'
    }
]

export const socialMedials: Tool[] = [
    {
        id: 1,
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/lautaro-zuleta/',
        color: 'text-blue-600'
    },
    {
        id: 2,
        name: 'Instagram',
        link: 'https://www.instagram.com/lautarozuleta80/',
        color: 'text-pink-500'
    },
    {
        id: 3,
        name: 'Facebook',
        link: 'https://www.facebook.com/lautaro.zule/',
        color: 'text-pink-500'
    }
]

export const webTools: Tool[] = [
    {
        id: 1,
        name: 'GitHub',
        link: 'https://github.com/LautaroZ01',
        color: 'text-text-100'
    },
    {
        id: 2,
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/lautaro-zuleta/',
        color: 'text-blue-700'
    }
];

export const skills: Tool[] = [
    {
        id: 1,
        name: 'HTML',
        link: '#',
        color: 'text-orange-500'
    },
    {
        id: 2,
        name: 'CSS',
        link: '#',
        color: 'text-blue-500'
    },
    {
        id: 3,
        name: 'JavaScript',
        link: '#',
        color: 'text-yellow-500'
    },
    {
        id: 4,
        name: 'TypeScript',
        link: '#',
        color: 'text-blue-700'
    },
    {
        id: 5,
        name: 'TailwindCSS',
        link: '#',
        color: 'text-cyan-500'
    },
    {
        id: 6,
        name: 'React',
        link: '#',
        color: 'text-blue-600'
    },
    {
        id: 7,
        name: 'Node.js',
        link: '#',
        color: 'text-green-500'
    },
    {
        id: 8,
        name: 'Python',
        link: '#',
        color: 'text-yellow-600'
    },
    {
        id: 9,
        name: 'Django',
        link: '#',
        color: 'text-green-700'
    },
    {
        id: 10,
        name: 'PostgreSQL',
        link: '#',
        color: 'text-blue-800'
    },
    {
        id: 11,
        name: 'MongoDB',
        link: '#',
        color: 'text-green-600'
    },
    {
        id: 12,
        name: 'Git',
        link: '#',
        color: 'text-red-600'
    },
    {
        id: 13,
        name: 'GitHub',
        link: '#',
        color: 'text-gray-600'
    }
];

export const contactInfo: ContactInfo[] = [
    {
        type: 'Email',
        value: 'lautarozule80@gmail.com'
    },
    {
        type: 'Teléfono',
        value: '+54 387 192 845'
    },
    {
        type: 'Dirección',
        value: 'Salta, Salta, Argentina'
    }
];