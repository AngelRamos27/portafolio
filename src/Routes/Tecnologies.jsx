import React, { useRef } from 'react';
import cpp from '../assets/TecnologiesImages/c++.png'
import css from '../assets/TecnologiesImages/css.png'
import fire from '../assets/TecnologiesImages/firebase.png'
import html from '../assets/TecnologiesImages/html.png'
import java from '../assets/TecnologiesImages/java.png'
import js from '../assets/TecnologiesImages/js.png'
import kt from '../assets/TecnologiesImages/kotlin.png'
import motionIcon from '../assets/TecnologiesImages/motion.png'
import mysql from '../assets/TecnologiesImages/myqsl.png'
import next from '../assets/TecnologiesImages/next.png'
import php from '../assets/TecnologiesImages/php.png'
import reactIcon from '../assets/TecnologiesImages/react.png'
import FloatingDiv from '../Components/Animated/FloatingDiv'
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const Tecnologies = () => {
  const tec = [
    { pic: cpp, delay: 0.2 }, { pic: css, delay: 0.4 }, { pic: fire, delay: 0.5 }, { pic: html, delay: 0.1 }, { pic: java, delay: 0.8 },
    { pic: js, delay: 0.3 }, { pic: kt, delay: 0.4 }, { pic: motionIcon, delay: 0.2 }, { pic: mysql, delay: 0.5 }, { pic: next, delay: 0.4 },
    { pic: php, delay: 0.6 }, { pic: reactIcon, delay: 0.3 },
  ]
  const {t} = useTranslation()
  const location = useLocation()
  const isTecPage = location.pathname.includes('/technologies')

  return (
    <div data-aos="fade-up" className={`w-full h-screen flex flex-col justify-center items-center ${isTecPage ? 'pt-24' : 'pb-10'}`}>
      <p className={`text-lg text-center text-amarilloMZ pb-12 px-4 ${isTecPage ? '' : 'pb-32 pt-16'}`}>{t('teno_text')}</p>
      <div className='bg-moradoMedio md:w-[40rem] md:h-[30rem] w-80 h-3/4 sm:w-[35rem] sm:h-[35rem] grid grid-cols-3 justify-center items-center rounded-lg shadow-lg shadow-pink-500 hover:shadow-purple-600 duration-300'>
        {tec.map((image, index) => (
          <div data-aos="fade-up">
            <FloatingDiv delay={image.delay}>
              <img src={image.pic} key={index} className='lg:w-24 lg:h-24 w-16 h-16' />
            </FloatingDiv>
          </div>

        ))}
      </div>
    </div>
  )
}
export default Tecnologies