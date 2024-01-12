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
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
const Proyects = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const isProyectsPage = location.pathname.includes('/proyects')

  const proyectos = [
    {
      name: "HEALTHERT",
      desc: "H1",
      pic: [HT1, HT2, HT3, HT4]
    },
    {
      name: "HEALTHERT WEB",
      desc: "H2",
      pic: [hw1, hw2, hw3]
    },
    {
      name: "SISOGEM",
      desc: "SISO",
      pic: [si1, si2, si3, si4, si5, si6]
    },
    {
      name: "La Reyna Catrina",
      desc: "Reyna",
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
      <div className={`w-full h-screen  ${isProyectsPage ? 'pt-24 pb-32 lg:pt-9' : ''}`}>
        <p className={`text-lg text-amarilloMZ text-center px-4 ${isProyectsPage ? '' : 'pb-24'}`}>{t('proyecto_t')}</p>
        <div data-aos="fade-up" className={`w-full  grid gap-16 justify-center items-center  text-amarilloMZ bg-moradoOscuro ${isProyectsPage ? 'pb-32' : 'pb-24'}`}>
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