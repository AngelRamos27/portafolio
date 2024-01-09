import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion'
import Carrusel from '../Carrusel/Carrusel';
import { useTranslation } from 'react-i18next';


const CardProyect = ({ proyect }) => {
    const {t} = useTranslation()
    return (
        <>
            <div className="w-72 sm:w-[30rem] lg:w-[40rem] lg:h-[40rem] flex flex-col bg-negroPurpura rounded-lg shadow-lg shadow-pink-500 hover:shadow-purple-600 duration-300 ">
                <Carrusel slides={proyect.pic} />
                <div className="flex flex-col justify-center items-center lg:pt-72">
                    <p className="p-4 font-bold text-2xl">{proyect.name}</p>
                    <p className="p-6 text-center">{t(proyect.desc)}</p>
                </div>
            </div>
        </>
    )
}
export default CardProyect