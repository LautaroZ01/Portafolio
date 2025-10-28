import { FaGithub, FaLinkedin, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGitAlt, FaTwitter, FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaArrowRight } from 'react-icons/fa';
import { SiTypescript, SiDjango, SiMysql, SiMongodb, SiPostgresql, SiTailwindcss } from 'react-icons/si';
import { FaRegCopy } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';
import { IoMdPin } from 'react-icons/io';

const Icons = [
    {
        name: 'GitHub',
        icon: <FaGithub />
    },
    {
        name: 'LinkedIn',
        icon: <FaLinkedin />
    },
    {
        name: 'HTML',
        icon: <FaHtml5 />
    },
    {
        name: 'CSS',
        icon: <FaCss3Alt />
    },
    {
        name: 'JavaScript',
        icon: <FaJsSquare />
    },
    {
        name: 'TypeScript',
        icon: <SiTypescript />
    },
    {
        name: 'React',
        icon: <FaReact />
    },
    {
        name: 'Node.js',
        icon: <FaNodeJs />
    },
    {
        name: 'Python',
        icon: <FaPython />
    },
    {
        name: 'Git',
        icon: <FaGitAlt />
    },
    {
        name: 'Django',
        icon: <SiDjango />
    },
    {
        name: 'MySQL',
        icon: <SiMysql />
    },
    {
        name: 'MongoDB',
        icon: <SiMongodb />
    },
    {
        name: 'PostgreSQL',
        icon: <SiPostgresql />
    },
    {
        name: 'Twitter',
        icon: <FaTwitter />
    },
    {
        name: 'Facebook',
        icon: <FaFacebook />
    },
    {
        name: 'Instagram',
        icon: <FaInstagram />
    },
    {
        name: 'WhatsApp',
        icon: <FaWhatsapp />
    },
    {
        name: 'Copy',
        icon: <FaRegCopy />
    },
    {
        name: 'TailwindCSS',
        icon: <SiTailwindcss />
    },
    {
        name: 'Email',
        icon: <MdEmail />
    },
    {
        name: 'Phone',
        icon: <FaPhone />
    },
    {
        name: 'Address',
        icon: <IoMdPin />
    },
    {
        name: 'ArrowRight',
        icon: <FaArrowRight />
    }
];

type WebIconsProps = {
    name: string,
    color?: string
}

export default function WebIcons({ name, color }: WebIconsProps) {
    const icon = Icons.find(icon => icon.name === name)?.icon;

    return (
        <>
            {icon ? <span className={color}>{icon}</span> : <span>Icono no encontrado</span>}
        </>
    )
}