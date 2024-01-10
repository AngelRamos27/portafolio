import React from 'react'
import User from '../../assets/Icons/User'
import Check from '../../assets/Icons/Check'
import Gear from '../../assets/Icons/Gear'
import Box from '../../assets/Icons/Box'
import Book from '../../assets/Icons/Book'
import Email from '../../assets/Icons/Email'
import { Link } from 'react-router-dom'
import Arrow from '../../assets/Icons/Arrow'
import SmArrow from '../../assets/Icons/SmArrow'
import Switch from '../Switch/Switch'
import Translate from '../../assets/Icons/Translate'
const NavBar = ({ menuChecked, setMenuChecked }) => {

    let Sections = [
        { section: 'About Me', link: '/aboutme', svg: <User /> },
        { section: 'My Skills', link: '/myskills', svg: <Check /> },
        { section: 'Proyects', link: '/proyects', svg: <Gear /> },
        { section: 'Technologies', link: '/technologies', svg: <Box /> },
        { section: 'Education', link: '/education', svg: <Book /> },
        { section: 'Contact', link: '/contact', svg: <Email /> },
        { section: 'All', link: '/', svg: <Gear /> },
    ]
    return (
        <>
            <div className={`lg:hidden absolute cursor-pointer right-5 top-9 w-7 border-dark-purple border-2 rounded-full  ${!menuChecked && "rotate-180"}`} onClick={() => setMenuChecked(!menuChecked)}><SmArrow /></div>
            <div className={`fixed flex bg-negroPurpura z-[100] h-screen overflow-y-auto lg:overflow-y-hidden md:pt-20 md:w-72 xl:pt-5 pt-16 w-full 
            md:border-e-2 transition-all duration-200 ${menuChecked ? `` : `lg:-translate-x-56 -translate-x-full`}`}>
                <div className={` ${menuChecked ? "w-72" : "w-0 "} bg-dark-purple h-screen p-5  pt-8 relative duration-300`}>
                    <div className={`absolute cursor-pointer right-5 top-9 w-7 border-dark-purple
                            border-2 rounded-full  ${!menuChecked && "rotate-180 lg:-right-56 -right-[70rem]"}`} onClick={() => setMenuChecked(!menuChecked)}><SmArrow /></div>
                    <div className="flex gap-x-4 items-center">
                        <div className={`cursor-pointer duration-500 ${menuChecked && "rotate-[360deg]"}`}><Arrow /> </div>
                        <p className={`text-white origin-left font-medium text-4xl duration-200 ${!menuChecked && "scale-0"}`}>
                            Let´s see!
                        </p>
                    </div>
                    <ul className="pt-6">
                        {Sections.map((Menu, index) => (
                            <li key={index} className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                                         ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}>
                                <div >{Menu.svg}</div>
                                <Link to={Menu.link}>
                                    <span onClick={() => setMenuChecked(!menuChecked)} className={`${!menuChecked && "hidden"} text-2xl hover:text-amarilloMZ duration-300 hover:scale-105 origin-left`}>
                                        {Menu.section}
                                    </span></Link>
                            </li>
                        ))}
                        <li className='flex text-gray-300 hover:text-amarilloMZ duration-300 p-2 gap-x-4 origin-left text-2xl'><Translate />Translate<Switch /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar


//     return (
//         <>
//             <nav onClick={handleChangeMenu} className={`fixed flex bg-negroPurpura z-[100] lg:translate-x-0 overflow-y-auto md:pt-20 md:w-[22rem] pt-16 w-full md:border-e-2 h-full transition-all duration-200 ${menuChecked ? `` : `-translate-x-full`}`}>
//                 <div className={` ${menuChecked ? "w-72" : "w-0 "} bg-dark-purple h-screen p-5  pt-8 relative duration-300`}>
//                     <img src="./src/assets/control.png" className={` absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
//            border-2 rounded-full  ${!menuChecked && "rotate-180"}`} onClick={handleChangeMenu} />
//                 </div>
//                 <div className="flex flex-col gap-x-4 items-center">
//                     <img src="./src/assets/logo.png" className={`cursor-pointer duration-500 ${menuChecked && "rotate-[360deg]"}`} />
//                     <p className={`text-white origin-left font-medium text-4xl duration-200 ${!menuChecked && "scale-0"}`}>
//                         Let´s see!
//                     </p>

//                     <ul className="pt-6">
//                         {Sections.map((Menu, index) => (
//                             <li key={index} className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
//                                          ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}>
//                                 {Menu.svg}
//                                 <Link to={Menu.link}>
//                                     <span className={`${!menuChecked && "hidden"} text-2xl hover:text-amarilloMZ duration-300 hover:scale-105 origin-left`}>
//                                         {Menu.section}
//                                     </span></Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </nav >
//         </>
//     )
// }

// export default NavBar