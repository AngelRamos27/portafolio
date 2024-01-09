import React, { useState } from 'react'

import User from '../../assets/Icons/User'
import Cross from '../../assets/Icons/Cross'
import Menu from '../../assets/Icons/Menu'

const Header = ({ menuChecked, setMenuChecked, navBar = true }) => {

    //Manejador para el estatus del menu
    const handleChangeMenu = () => {
        setMenuChecked(!menuChecked)
    }

    //Componente de header responsive, cambio de icono si esta abierto o cerrado,
    //En caso de mandar navBar como false, solamente se integra el header
    return (
        <header className='w-full fixed bg-guinda h-16 z-[110] md:h-20 px-4 md:px-6 grid grid-cols-3 items-center text-white drop-shadow-xl'>
            <div className='flex lg:hidden'>
                {navBar ?
                    <span onClick={handleChangeMenu} className=' cursor-pointer hover:text-rosa transition-all duration-200'>
                        {menuChecked ? <Cross /> : <Menu />}
                    </span>
                    :
                    ""}
            </div>
            <div className='hidden lg:inline-block'>

            </div>
            <span className='flex justify-center items-center'>

                <h1 className='text-2xl md:text-3xl font-gibsonSemi cursor-default'>SISOGEM</h1>
            </span>
            <div className='flex justify-end'>
                {navBar && (
                    <span className='cursor-pointer hover:text-rosa transition-all duration-200'>
                        <User />
                    </span>)
                }
            </div>
        </header>
    )
}

export default Header