import { Outlet, useLocation } from "react-router-dom"
import NavBar from "../Components/NavBar/NavBar"
import { useEffect, useState } from "react"
import AboutMe from "./AboutMe"
import Skills from "./Skills"
import Proyects from "./Proyects"
import Tecnologies from "./Tecnologies"
import Education from "./Education"
import Contact from "./Contact"
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Base = () => {
    useEffect(() => {
        AOS.init()
    }, []) 
    const [menuChecked, setMenuChecked] = useState(false)
    const location = useLocation()
    const isHomePage = location.pathname === '/'
    return (
        <>
            <div data-aos="fade-left" className='flex flex-col h-screen relative font-ibm bg-moradoOscuro'>
                <NavBar menuChecked={menuChecked} setMenuChecked={setMenuChecked} />
                <main className='md:pt-24 flex-grow h-screen bg-moradoOscuro'>
                    <div className='min-h-full w-full flex h-screen bg-moradoOscuro'>
                        
                        <div className={`text-amarilloMZ w-full h-screen flex flex-col bg-moradoOscuro ${isHomePage ? '' : 'hidden'}`}>
                            <AboutMe />
                            <div className='flex flex-col justify-center items-center pt-32  bg-moradoOscuro '><p className="lg:text-6xl text-3xl text-center font-bold pb-36 px-4  pt-32">My Tecnical and human skills</p>
                                <Skills /></div>
                            <div className='flex flex-col justify-center items-center pt-32 bg-moradoOscuro  '><p className="lg:text-6xl text-3xl text-center font-bold pb-14 px-4 pt-32">My Developed Proyects</p>
                                <Proyects /></div>
                            <div className='flex flex-col justify-center items-center sm:pt-[70rem] lg:pt-[135rem] pt-[105rem] md:pt-90 bg-moradoOscuro '><p className="lg:text-6xl text-3xl text-center font-bold px-4 pt-32">Tecnologies</p>
                                <Tecnologies />
                            </div>
                            <div className='flex flex-col justify-center items-center pt-32 bg-moradoOscuro '><p className="lg:text-6xl text-3xl text-center font-bold pb-40 px-4 pt-32">My Education</p>
                                <Education /></div>
                            <div className='flex flex-col justify-center items-center pt-32 bg-moradoOscuro'><p className="lg:text-6xl text-3xl text-center font-bold px-4 pt-32">Contact with me!</p>
                                <Contact /></div>

                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Base
