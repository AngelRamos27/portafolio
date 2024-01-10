import React, { useEffect, useState } from 'react'

const Carrusel = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide()
        }, 3000)
        return () => {
            clearInterval(intervalId)
        }
    }, [currentSlide, slides])

    if (!Array.isArray(slides) || slides.length === 0) {
        return null
    }

    return (
        <div className="h-72 w-full  overflow-hidden">
            {slides.map((slide, index) => (
                <div key={index} className={`absolute h-52 w-80 lg:w-[45rem] sm:w-[30rem]  rounded-lg transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="duration-700 ease-in-out">
                        <>
                            <img src={slide} className="w-full border-b-2  object-center border-b-amarilloMZ rounded-t-lg h-72 lg:h-[28rem]" alt={`Slide ${index}`} />
                        </>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Carrusel
