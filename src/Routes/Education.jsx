import React from 'react'
import TecAzul from '../assets/Tec/63b97f76-0e38-4c0b-a887-b36e8c33773d1200px-Tecnologico_Nacional_de_Mexico.svg.png'
import TecGuinda from '../assets/Tec/logo.png'
import Innova from '../assets/Tec/ConvocatoriaInnovaTecNM2023-1080x380.png'
import FloatingDiv from '../Components/Animated/FloatingDiv'

const Education = () => {
  return (
    <>
      <div data-aos="fade-up" className='w-full text-amarilloMZ flex flex-col  justify-center bg-moradoOscuro h-screen pb-32'>
        <div className='w-full flex flex-col justify-center items-center h-screen'>
          <div className='flex lg:flex-row flex-col items-center justify-center w-full gap-12 h-screen'>
            <FloatingDiv delay={0.8} width={'relative group lg:w-[35rem]'}>
              <img src={TecAzul} className='rounded-full sm:w-[27rem] sm:h-80 w-64 h-64  shadow-lg shadow-pink-500 group-hover:shadow-purple-600 duration-300'></img>
              <div className="lg:translate-x-[1.8rem] xl:translate-x-[4rem] rounded-full sm:w-[27rem] sm:h-80 w-64 h-64 absolute inset-0 flex items-center justify-center bg-negroPurpura bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white  text-center max-w-full p-5">
                  Estudio la carrera de ingeniería en sistemas computacionales, <br />a tan solo dos semestres de terminar mi carrera universiaria.</p>
              </div>
            </FloatingDiv>
            <FloatingDiv delay={0.7} width={'relative group lg:w-[35rem]'}>
              <img src={TecGuinda} className='rounded-full sm:w-[27rem] sm:h-80 w-64 h-64 shadow-lg shadow-pink-500 group-hover:shadow-purple-600 duration-300'></img>
              <div className="lg:translate-x-[1.8rem] xl:translate-x-[4rem] rounded-full sm:w-[27rem] sm:h-80 w-64 h-64 absolute inset-0 flex items-center justify-center bg-negroPurpura bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white   text-center max-w-full p-5">
                  Actualmente me encuentro estudiando en el Instituto Tecnológico de Morelia, México.<br />
                </p>
              </div>
            </FloatingDiv>
            <FloatingDiv delay={0.6} width={'relative group lg:w-[35rem] lg:hidden block'}>
              <img src={Innova} className='rounded-full sm:w-[30rem] sm:h-80 w-64 h-64 shadow-lg shadow-pink-500 group-hover:shadow-purple-600 duration-300'></img>
              <div className="lg:translate-x-[1.8rem] xl:translate-x-[2.5rem] rounded-full sm:w-[30rem] sm:h-80 w-64 h-64 absolute inset-0 flex items-center justify-center bg-negroPurpura bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-center max-w-full p-5">
                  Participé en  tres concursos de innovación tecnológica a nivel local, regional y nacional.</p>
              </div>
            </FloatingDiv>
          </div>
          <div className='lg:block hidden'>
            <FloatingDiv delay={0.6} width={'relative group lg:w-[35rem]'}>
              <img src={Innova} className='rounded-full sm:w-[30rem] sm:h-80 w-64 h-64 shadow-lg shadow-pink-500 group-hover:shadow-purple-600 duration-300'></img>
              <div className="lg:translate-x-[1rem] xl:translate-x-[2.5rem] rounded-full sm:w-[30rem] sm:h-80 w-64 h-64 absolute inset-0 flex items-center justify-center bg-negroPurpura bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold text-center max-w-full p-5">
                  Participé en  tres concursos de innovación tecnológica a nivel local, regional y nacional.</p>
              </div>
            </FloatingDiv>
          </div>
        </div>
      </div>
    </>
  )
}
export default Education