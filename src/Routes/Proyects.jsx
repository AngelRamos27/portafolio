import React from 'react'
import {
  motion, useScroll, useSpring, useTransform, MotionValue
} from "framer-motion";
import HT from '../assets/ProyectPics/hea.png'
import HT1 from '../assets/ProyectPics/hea1.png'
import HT2 from '../assets/ProyectPics/hea2.png'
import HT3 from '../assets/ProyectPics/hea3.png'
import HT4 from '../assets/ProyectPics/hea4.png'
import hw1 from '../assets/ProyectPics/heaw1.png'
import hw2 from '../assets/ProyectPics/heaw2.png'
import hw3 from '../assets/ProyectPics/heaw3_3.png'
import si1 from '../assets/ProyectPics/siso1.png'
import si2 from '../assets/ProyectPics/siso2_2.png'
import si3 from '../assets/ProyectPics/siso3.png'
import si4 from '../assets/ProyectPics/siso4.png'
import si5 from '../assets/ProyectPics/siso5.png'
import si6 from '../assets/ProyectPics/siso6.png'
import cat1 from '../assets/ProyectPics/cat1_1.png'
import cat3 from '../assets/ProyectPics/cat3.png'
import cat4 from '../assets/ProyectPics/cat4.png'
import cat5 from '../assets/ProyectPics/cat5.png'
import cat6 from '../assets/ProyectPics/cat6.png'
import cat from '../assets/ProyectPics/cat.png'
import CardProyect from '../Components/Animated/CardProyect';
const Proyects = () => {
  const proyectos = [
    {
      name: "HEALTHERT",
      desc: "Aplicación Móvil de monitoreo remoto para personas con problemas del corazón, monitoreo de BPM, Ubicación geográfica y funciones de cuidado.",
      pic: [HT1, HT2, HT3, HT4]
    },
    {
      name: "HEALTHERT WEB",
      desc: "Versión web de HEALTHERT, enfocado en instituciones de salud, es decir hospitales y su personal. Médicos y enfermeras/os podrán monitorear a sus pacientes desde la aplicación móvil y la versión web.",
      pic: [hw1, hw2, hw3]
    },
    {
      name: "SISOGEM",
      desc: "Sistema web para la gestión de actividades y documentación de organizaciones gubernamentales del estado de Michoacán.",
      pic: [si1, si2, si3, si4, si5, si6]
    },
    {
      name: "La Reyna Catrina",
      desc: "Sitio web para la exposisicón artistica del proyecto La Reyna Catrina, con panel de administrador, ventas y multi-idioma",
      pic: [cat, cat1, cat3, cat5, cat6]
    },

  ]
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,

      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  }
  return (
    <>
      <div className='w-full'>
        <p className='text- text-center px-4'>Estos son algunos de los proyectos en los que he trabajado</p>
        <div data-aos="fade-up" className='w-full h-screen grid gap-16 justify-center items-center  text-amarilloMZ bg-moradoOscuro'>
          {
            proyectos.map((proyecto, index) => (
              <motion.div
                key={index}
                initial="offscreen"
                animate="onscreen"
                variants={cardVariants}
                className=' w-full'
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', damping: 5, stiffness: 100, restDelta: 0.001 }}>
                <div data-aos="fade-up">
                  <CardProyect key={index} proyect={proyecto} />
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </>



  )
}
export default Proyects