import { Project } from "../Types/project";
import { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ImageCarouselProps {
    images: Project['gallery'];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    }, [images.length]);

    // Auto-advance slides every 5 seconds
    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            if (!isHovered) {
                nextSlide();
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, isHovered, images.length, nextSlide]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    if (images.length === 0) return null;

    return (
        <div
            className="relative overflow-hidden my-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {images.length > 1 && (
                <>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prevSlide();
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-primary-600/50 text-primary-50 hover:bg-primary-700/50 backdrop-blur-lg transition-colors duration-pro cursor-pointer"
                        aria-label="Previous image"
                    >
                        <FaChevronLeft size={16} />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextSlide();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-primary-600/50 text-primary-50 hover:bg-primary-700/50 backdrop-blur-lg transition-colors duration-pro cursor-pointer"
                        aria-label="Next image"
                    >
                        <FaChevronRight size={16} />
                    </button>
                </>
            )}

            <div
                className="flex transition-transform duration-500 ease-in-out aspect-video"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-full h-full flex-shrink-0"
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="object-contain rounded-lg aspect-video"
                            draggable="false"
                        />
                    </div>
                ))}
            </div>

            {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={(e) => {
                                e.stopPropagation();
                                goToSlide(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-all cursor-pointer ease-in-out duration-300 ${index === currentIndex ? 'bg-accent-400 w-4' : 'bg-accent-400/50 hover:bg-accent-400/70'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
