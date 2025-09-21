import { useState } from "react";
import { routes, webTools } from "../Data/data";
import WebIcons from "./WebIcons";
import { BiMenuAltRight } from "react-icons/bi";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="bg-black/80 transition-all duration-pro p-4 rounded-b-lg flex md:flex-row justify-between items-center lg:backdrop-blur-md sticky top-0 z-30 container mx-auto">
            <a href="#" className="text-3xl font-black hover:text-current text-primary-200 transition-colors duration-pro basis-36">
                <span>LZ</span>
            </a>

            <div className="w-full flex items-center justify-end lg:hidden">
                <button
                    onClick={toggleMenuOpen}
                    className="cursor-pointer p-2 flex items-center justify-center rounded-full bg-accent-200 text-text-100 hover:bg-transparent transition-colors duration-pro">
                    <BiMenuAltRight />
                </button>
            </div>

            <nav className={`w-full md:w-auto backdrop-blur-md lg:backdrop-blur-none px-20 py-6 lg:p-0 lg:min-w-auto ${isMenuOpen ? 'flex absolute top-16 right-0 p-4' : 'hidden'} lg:flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center lg:flex-1 z-30`}>
                <ul className="flex flex-col gap-2 lg:gap-4 lg:flex-1 items-center justify-center lg:flex-row bg-transparent">
                    {routes.map(route => (
                        <li key={route.name} className="lg:mb-2 md:mb-0">
                            <a href={route.path}
                                className="hover:text-primary-200 transition-colors duration-pro"
                            >
                                {route.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <ul className="flex gap-2 lg:basis-36 justify-end items-start">
                    {webTools.map(web => (
                        <li key={web.id}>
                            <a
                                className='btn-rounded'
                                href={web.link}
                                target="_blank"
                            >
                                <WebIcons name={web.name} />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>

    )
}
