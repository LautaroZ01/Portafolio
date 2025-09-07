export default function Index() {
    return (
        <main className="min-h-full min-w-full flex flex-col items-center justify-center gap-6 bg-radial-[ellipse_at_top] from-bg-100 via-transparent to-black" id="home-section">
            <div className="rounded-full border border-primary-100">
                <img src="./user-index.svg" alt="Foto de perfil" className="size-36 rounded-full object-cover" />
            </div>
            <div className="text-center">
                <small>Hola ! 👋🏻,</small>
                <h1 className="text-4xl font-black text-gray-200">
                    Soy <span className="bg-gradient-to-r from-primary-100 to-primary-200 bg-clip-text text-transparent">Zuleta Lautaro</span>
                </h1>
                <p className="max-w-[75ch] mx-auto mt-4">
                    Desarrollador web full stack con experiencia en la creación de aplicaciones web modernas y eficientes.
                </p>
            </div>
            <div className="flex items-center gap-6">
                <a
                    href="#about-me"
                    className="grow btn-secundary"
                >
                    Saber más
                </a>
                <a
                    href="/CV/CV Lautaro Nicolas Zuleta.pdf"
                    target= "_blank"
                    className="grow btn-primary"
                >
                    Descargar CV
                </a>
            </div>
        </main>
    )
}
