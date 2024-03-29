import React from 'react'
import TecAzul from '../assets/Tec/63b97f76-0e38-4c0b-a887-b36e8c33773d1200px-Tecnologico_Nacional_de_Mexico.svg.png'
import TecGuinda from '../assets/Tec/logo.png'
import Innova from '../assets/Tec/ConvocatoriaInnovaTecNM2023-1080x380.png'
import FloatingDiv from '../Components/Animated/FloatingDiv'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

const Education = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const isEdu = location.pathname.includes('/education')

  return (
    <>
      <div data-aos="fade-up" className={`w-full text-amarilloMZ flex flex-col  justify-center h-screen ${isEdu ? 'pt-72' : ''}`}>
        <div className='w-full flex flex-col justify-center items-center h-screen'>
          <div className='flex lg:flex-row flex-col items-center justify-center w-full lg:gap-12 sm:gap-16 gap-12 h-screen'>
            <FloatingDiv delay={0.8} width={'relative rounded-full group lg:w-[30rem]'}>
              <img src={TecAzul} className='rounded-full sm:w-[25rem] sm:h-[20rem] lg:w-[30rem] lg:h-80 w-64 h-64  shadow-lg shadow-pink-500 group-hover:shadow-purple-600 duration-300'></img>
              <div className="rounded-full w-full h-full absolute inset-0 flex items-center justify-center bg-negroPurpura bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white  text-center max-w-full p-5">
                  {t('bol0')}<br />{t('bol1')}</p>
              </div>
            </FloatingDiv>
            <FloatingDiv delay={0.7} width={'relative rounded-full group lg:w-[30rem]'}>
              <img src={TecGuinda} className='rounded-full sm:w-[25rem] sm:h-[20rem] lg:w-[30rem] lg:h-80 w-64 h-64 shadow-lg shadow-pink-500 group-hover:shadow-purple-600 duration-300'></img>
              <div className="rounded-full w-full h-full absolute inset-0 flex items-center justify-center bg-negroPurpura bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white  text-center max-w-full p-5">
                  {t('bol2')}<br />
                </p>
              </div>
            </FloatingDiv>
            <FloatingDiv delay={0.6} width={'relative rounded-full group lg:w-[30rem]] lg:hidden block'}>
              <img src={Innova} className='rounded-full sm:w-[25rem] sm:h-[20rem] lg:w-[30rem] lg:h-80 w-64 h-64 shadow-lg shadow-pink-500 group-hover:shadow-purple-600 duration-300'></img>
              <div className="rounded-full sm:w-[25rem] w-full h-full absolute inset-0 flex items-center justify-center bg-negroPurpura bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-center max-w-full p-5">
                  {t('bol3')}</p>
              </div>
            </FloatingDiv>
          </div>
          <div className='relative rounded-full group lg:w-[30rem] lg:block hidden'>
            <FloatingDiv delay={0.6} width={'relative group lg:w-[30rem]'}>
              <img src={Innova} className='rounded-full sm:w-[25rem] sm:h-[20rem] lg:w-[30rem] lg:h-80 w-64 h-64 shadow-lg shadow-pink-500 group-hover:shadow-purple-600 duration-300'></img>
              <div className="rounded-full w-full h-full absolute inset-0 flex items-center justify-center bg-negroPurpura bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white  text-center max-w-full p-5">
                  {t('bol3')}</p>
              </div>
            </FloatingDiv>
          </div>
        </div>
      </div>
    </>
  )
}
export default Education