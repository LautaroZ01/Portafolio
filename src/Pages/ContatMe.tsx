import { FormEvent, useRef, useState } from "react";
import WebIcons from "../Components/WebIcons";
import { contactInfo, socialMedials } from "../Data/data";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';
import { FaCheck } from "react-icons/fa";

export default function ContatMe() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleCopy = (value: string) => {
        setIsHovered(true);
        setTimeout(() => setIsHovered(false), 1000);
        navigator.clipboard.writeText(value);
        toast.success("Copiado al portapapeles");
    };

    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

        if (!formRef.current) {
            toast.error('Debes completar todos los campos para enviar un correo');
        }

        emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            formRef.current!, {
            publicKey: PUBLIC_KEY,
        }).then(
            () => {
                toast.success('Correo enviado con éxito');
                formRef.current?.reset();
            },
            (error) => {
                toast.error('Correo no enviado, hubo un problema');
                console.error(error);
            },
        );
    };

    return (
        <section className="mt-20 min-h-full min-w-full bg-radial-[ellipse_at_bottom] from-bg-100 via-transparent to-black flex flex-col items-center" id="contact-me">
            <h2 className="bg-gradient-to-r from-primary-100 to-primary-200 bg-clip-text text-transparent font-black text-4xl ">Contactame aqui</h2>
            <p className="mb-6 mt-2">¿Tienes alguna pregunta o quieres trabajar junto a mi? ¡No dudes en contactarme!</p>
            <div className="flex flex-wrap gap-6 justify-center overflow-hidden">
                <div className="flex flex-col gap-4 text-center grow">
                    <form className="max-w-xl p-6 flex flex-col items-start mx-auto" onSubmit={sendEmail} ref={formRef}>
                        <div className="flex flex-col gap-2 items-start w-full mt-6">
                            <label htmlFor="name">Nombre</label>
                            <input
                                required
                                type="text"
                                name="user_name"
                                id="name"
                                placeholder="Tu nombre"
                                className="input-data w-full p-4 border border-bg-100 focus:border-bg-200 focus:outline-none rounded-md autofill:bg-black autofill:text-white"
                            />
                        </div>

                        <div className="flex flex-col gap-2 items-start w-full mt-6">
                            <label htmlFor="email">Correo electronico</label>
                            <input
                                required
                                type="email"
                                name="user_email"
                                id="email"
                                placeholder="Tu correo electronico"
                                className="input-data w-full p-4 border border-bg-100 focus:border-bg-200 focus:outline-none rounded-md autofill:bg-black autofill:text-white"
                            />
                        </div>

                        <div className="flex flex-col gap-2 items-start w-full mt-6">
                            <label htmlFor="email">Mensaje</label>
                            <textarea
                                required
                                name="message"
                                id="content"
                                cols={60}
                                className="input-data w-full p-4 min-h-48 border border-bg-100 focus:border-bg-200 focus:outline-none rounded-md"
                                placeholder="Puedes hacer tu pregunta aquí"
                            ></textarea>
                        </div>

                        <div className="w-full flex md:justify-end mt-6">
                            <input
                                type="submit"
                                className="btn-primary"
                            />
                        </div>
                    </form>
                </div>
                <div className="col-start-5 flex flex-col md:p-6 p-2">
                    <div className="md:p-2">
                        <h3 className="bg-gradient-to-r from-primary-100 to-primary-200 bg-clip-text text-transparent font-bold text-xl text-center md:text-left">Informacion de contacto</h3>
                        <div className="mt-2 py-4 flex flex-col w-full">
                            {contactInfo.map((info, index) => (
                                <button
                                    key={index}
                                    className="flex flex-col items-start mt-3 relative group grow cursor-pointer px-4"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    onClick={() => handleCopy(info.value)}
                                >
                                    <strong className="text-primary-100 font-bold">{info.type}</strong>
                                    <span>{info.type === 'Dirección' ? info.value : `Click para copiar ${info.type}`}</span>
                                    {hoveredIndex === index && (
                                        <span className="absolute top-0 -right-4 p-2 rounded-full">
                                            {isHovered ? (
                                                <FaCheck  />
                                            ) : (
                                                <WebIcons name="Copy" />
                                            )}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="md:p-2">
                        <h3 className="bg-gradient-to-r from-primary-100 to-primary-200 bg-clip-text text-transparent font-bold text-xl text-center md:text-left">Redes sociales</h3>
                        <div className="mt-2 p-4 flex justify-center md:justify-start gap-4 basis-36">
                            {socialMedials.map(social => (
                                <a
                                    key={social.id}
                                    className='btn-rounded'
                                    href={social.link}
                                >
                                    <WebIcons name={social.name} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
