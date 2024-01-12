import React from 'react'
import me from '../assets/Photo/me.jpg'
import FloatingDiv from '../Components/Animated/FloatingDiv'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
const AboutMe = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const isAboutPage = location.pathname.includes('/about')

  return (
    <div data-aos="fade-up" className={`w-full h-screen text-amarilloMZ  flex flex-col justify-center pb-16  lg:pt-0 ${isAboutPage ? 'xl:pb-56' : 'xl:pb-0 xl:pt-32'}`}>
      <div className='w-full flex lg:flex-row flex-col lg:gap-0 gap-12 items-center justify-between'>
        <div className='w-3/4 flex items-center justify-center pt-[20rem] sm:pt-[5rem] lg:pt-0'>
          <FloatingDiv delay={0.6} >
            <img src={me} alt="Programmer Photo" className='md:max-w-md sm:max-w-sm max-w-xm rounded-full shadow-lg shadow-pink-500 hover:shadow-purple-600 duration-300 ' />
          </FloatingDiv>
        </div>
        <div className=' lg:pt-3 lg:text-2xl text-md lg:text-left text-center p-5 lg:p-0 pt-12 w-full '>
          <p className=''><span className='lg:text-7xl text-2xl'>{t('hi')}</span>, {t('ab1')}<br /> {t('ab2')}<br /> {t('ab3')}</p>
          <br /><p>{t('segundo_parrafo')}</p>
          <br /><p>{t('ab4')} <br />{t('ab5')}</p>
        </div>
      </div>
    </div>
  )
}
export default AboutMe