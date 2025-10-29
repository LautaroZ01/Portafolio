import { FormEvent, useRef, useState } from "react";
import WebIcons from "../Components/WebIcons";
import { contactInfo, socialMedials } from "../Data/data";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';
import { AiFillMessage } from "react-icons/ai";

// https://es.pinterest.com/pin/71002131620606027/

export default function ContactMe() {
    const [isLoading, setIsLoading] = useState(false);

    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        e.preventDefault();

        const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

        if (!formRef.current) {
            toast.error("Debes completar todos los campos para enviar un correo");
        }

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    toast.success("Correo enviado con éxito");
                    formRef.current?.reset();
                    setIsLoading(false);
                },
                (error) => {
                    toast.error("Correo no enviado, hubo un problema");
                    console.error(error);
                    setIsLoading(false);
                }
            );
    };

    return (
        <section id="contact-me" className="w-full mt-20 p-4 bg-radial-[ellipse_at_bottom] from-primary-900 via-transparent to-primary-950">
            <div className="text-center space-y-6">
                <AiFillMessage className="size-24 mx-auto text-accent-500" />
                <h2 className="text-4xl subtitle">Contáctame aquí</h2>
                <p>¿Tienes alguna pregunta o quieres trabajar junto a mí? ¡No dudes en contactarme!</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center my-8 gap-4 md:gap-8">
                {contactInfo.map((info, index) => (
                    <a
                        key={index}
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 cursor-pointer px-4 text-primary-300 text-sm hover:text-primary-400 transition-colors duration-pro group"
                    >
                        <WebIcons name={info.type} color="text-primary-100 text-2xl text-primary-300 rounded-full p-2 group-hover:text-primary-400 transition-colors duration-pro" />
                        <p>{info.name}</p>
                    </a>
                ))}
            </div>
            <div className="flex items-center justify-center gap-8">
                {socialMedials.map((social) => (
                    <a
                        key={social.id}
                        className="btn-link-arrow group"
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {social.name}
                        <WebIcons name="ArrowRight" />
                    </a>
                ))}
            </div>

            <hr className="my-8 max-w-2xl mx-auto border-primary-800/40" />

            <form
                onSubmit={sendEmail}
                ref={formRef}
                className="form-contact"
            >
                <div>
                    <label htmlFor="name" className="">Nombre</label>
                    <input
                        required
                        type="text"
                        name="user_name"
                        id="name"
                        placeholder="Ej. Juan Perez"
                        className=""
                    />
                </div>

                <div>
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        required
                        type="email"
                        name="user_email"
                        id="email"
                        placeholder="ejemplo@gmail.com"
                    />
                </div>

                <div>
                    <label htmlFor="content">Mensaje</label>
                    <textarea
                        required
                        name="message"
                        id="content"
                        cols={60}
                        rows={5}
                        placeholder="Puedes hacer tu pregunta aquí"
                    ></textarea>
                </div>


                <input type="submit" disabled={isLoading} value={isLoading ? "Enviando..." : "Enviar"} className="btn-primary cursor-pointer w-full mt-6" />

            </form>
        </section>
    );
}
