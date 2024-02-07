import React, { useRef } from 'react';

import JavaIcon from '../assets/Icons/TechIcons/javaIcon'
import FloatingDiv from '../Components/Animated/FloatingDiv'
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import Cpp from '../assets/Icons/TechIcons/cpp';
import Css from '../assets/Icons/TechIcons/css';
import Fire from '../assets/Icons/TechIcons/firebaseIcon'
import Html from '../assets/Icons/TechIcons/html'
import Js from '../assets/Icons/TechIcons/jsIcon'
import Kt from '../assets/Icons/TechIcons/kotlin'
import Framer from '../assets/Icons/TechIcons/framer'
import Mysql from '../assets/Icons/TechIcons/mysql'
import Next from '../assets/Icons/TechIcons/next'
import Php from '../assets/Icons/TechIcons/phpIcon'
import Astro from '../assets/Icons/TechIcons/astro'
import Ex from '../assets/Icons/TechIcons/express'
import ReactI from '../assets/Icons/TechIcons/reactIcon'
import Types from '../assets/Icons/TechIcons/type'

const Tecnologies = () => {
  const tec = [
    { pic: <Cpp/> , delay: 0.2 }, { pic: <Css/>, delay: 0.4 }, { pic: <Fire/>, delay: 0.5 }, { pic: <Html/>, delay: 0.1 }, { pic: <JavaIcon />, delay: 0.8 },
    { pic: <Js/>, delay: 0.3 }, { pic: <Kt/>, delay: 0.4 }, { pic: <Framer/>, delay: 0.2 }, { pic: <Mysql/>, delay: 0.5 }, { pic: <Next/>, delay: 0.4 },
    { pic: <Php/>, delay: 0.6 }, { pic: <ReactI/>, delay: 0.3 },{ pic: <Astro/>, delay: 0.3 },{ pic: <Ex/>, delay: 0.3 },{ pic: <Types/>, delay: 0.3 }
  ]
  const { t } = useTranslation()
  const location = useLocation()
  const isTecPage = location.pathname.includes('/technologies')

  return (
    <div data-aos="fade-up" className={`w-full h-screen flex flex-col justify-center items-center ${isTecPage ? 'sm:pb-76  pt-16 pb-20 sm:pt-0' : 'pb-10'}`}>
      <p className={`text-lg text-center text-amarilloMZ pb-12 px-4 ${isTecPage ? '' : 'pb-32 pt-16'}`}>{t('teno_text')}</p>
      <div className='bg-moradoMedio lg:w-[50rem] lg:h-[58rem] lg:p-10 md:w-[40rem] md:h-[30rem] w-80 h-3/4 sm:w-[35rem] sm:h-[35rem] grid grid-cols-3 justify-center items-center rounded-lg shadow-lg shadow-pink-500 hover:shadow-purple-600 duration-300'>
        {tec.map((image, index) => (
          <div data-aos="fade-up" className='lg:h-32'>
            <FloatingDiv delay={image.delay}>
              <div key={index} className='lg:w-32  lg:h-24 flex justify-center w-16 h-16 p-1'>
                {image.pic}
              </div>
            </FloatingDiv>
          </div>

        ))}
      </div>
    </div>
  )
}
export default Tecnologies