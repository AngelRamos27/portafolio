import React from 'react'
import me from '../assets/Photo/me.jpg'
import FloatingDiv from '../Components/Animated/FloatingDiv'
const AboutMe = () => {
  return (
    <div data-aos="fade-up" className='w-full h-screen text-amarilloMZ  flex flex-col justify-center pb-5 pt-52 lg:pt-0'>
      <div className='w-full flex lg:flex-row flex-col lg:gap-0 gap-12 items-center justify-between'>
        <div className='w-3/4 flex items-center justify-center '>
          <FloatingDiv delay={0.6}>
            <img src={me} alt="Programmer Photo" className='md:max-w-md max-w-xm rounded-full shadow-lg shadow-pink-500 hover:shadow-purple-600 duration-300' />
          </FloatingDiv>
        </div>
        <div className='lg:pt-3 lg:text-2xl text-md lg:text-left text-center p-5 lg:p-0  w-full'>
          <p className='leading-10'><span className='lg:text-7xl text-2xl'>¡Hola!</span>, me presento, mi nombre es<br /> Luis Angel Ramos Flores, tengo 21 años y desarrollo software,<br /> ¡un gusto!.</p>
          <br /><p>Actualmente me encuentro estudiando Ingeniería en Sistemas Computacionales en el Instituto Tecnológico de Morelia, soy de Morelia Michoacán, México.</p>
          <br /><p>Soy una persona apasionada por su trabajo, con ganas de aprender <br />y capacidad de adaptarse a las necesidades que se requieran.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe