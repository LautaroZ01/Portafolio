import { useEffect, useRef } from 'react';
import { skills } from '../Data/data';
import WebIcons from './WebIcons';

export default function SkillsCarousel() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!carouselRef.current || !itemsRef.current) return;

        const carousel = carouselRef.current;
        const items = itemsRef.current;
        
        items.innerHTML += items.innerHTML;

        let animationId: number;
        let speed = 1;

        const animate = () => {
            if (carousel.scrollLeft >= items.scrollWidth / 2) {
                carousel.scrollLeft = 0;
            } else {
                carousel.scrollLeft += speed;
            }
            animationId = requestAnimationFrame(animate);
        };

        const handleMouseEnter = () => speed = 0;
        const handleMouseLeave = () => speed = 1;

        carousel.addEventListener('mouseenter', handleMouseEnter);
        carousel.addEventListener('mouseleave', handleMouseLeave);

        animationId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationId);
            carousel.removeEventListener('mouseenter', handleMouseEnter);
            carousel.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="w-full overflow-hidden py-8" id="skills-section">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-100 to-primary-200 bg-clip-text text-transparent">
                    Mis Habilidades
                </h2>
            </div>
            
            <div 
                ref={carouselRef}
                className="w-full overflow-x-auto no-scrollbar py-4"
                style={{ scrollbarWidth: 'none' }}
            >
                <div 
                    ref={itemsRef}
                    className="flex items-center gap-8 w-max"
                >
                    {skills.map((skill, index) => (
                        <div 
                            key={`${skill.id}-${index}`}
                            className="flex items-center justify-center gap-2 rounded-md p-2 hover:bg-bg-200 hover:text-text-100 transition-all duration-pro"
                        >
                            <div className={`text-3xl ${skill.color}`}>
                                <WebIcons name={skill.name} />
                            </div>
                            <p className="text-text-200 text-sm font-medium cursor-default">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
