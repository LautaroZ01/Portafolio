import { motion } from "motion/react"
import { skills } from "../Data/data";
import WebIcons from "./WebIcons";

export default function SkillsCarousel() {
    return (
        <div className="w-full overflow-hidden py-8" id="skills-section">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-100 to-primary-200 bg-clip-text text-transparent">
                    Mis Habilidades
                </h2>
            </div>

            <div className="overflow-hidden">
                <motion.div
                    className="flex gap-8 w-max p-2"
                    animate={{ x: ["0%", "-50%"] }} // mueve la mitad del ancho duplicado
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30, // velocidad (ajusta a gusto)
                        ease: "linear",
                    }}
                >
                    {[...skills, ...skills].map((skill, index) => (
                        <div
                            key={`${skill.id}-${index}`}
                            className="badge-skills"
                        >
                            <div className={`text-2xl ${skill.color}`}>
                                <WebIcons name={skill.name} />
                            </div>
                            <p className="text-sm">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
