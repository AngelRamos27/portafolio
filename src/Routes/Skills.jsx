import React from 'react'
import CardSkills from '../Components/Cards/CardSkills'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillsList = [
    { skill: 'Trabajo en equipo' },
    { skill: 'Adaptabilidad' },
    { skill: 'Uso de diferentes tecnologías' },
    { skill: 'Compromiso' },
    { skill: 'Responsabilidad' },
    { skill: 'Comunicación' },
    { skill: 'Desarrollo FrontEnd' },
    { skill: 'Desarrollo BackEnd' },
    { skill: 'Abierto a nuevos aprendizajes' },
  ]

  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -7,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  }

  const hue = (h) => `hsl(${h}, 100%, 50%)`

  const background = `linear-gradient(306deg, ${hue(150)}, ${hue(200)})`

  return (
    <>
      <div data-aos="fade-up" className='flex justify-center flex-col w-full'>
        <p className='text-lg text-center text-amarilloMZ px-4 pb-12'>Estas son algunas de mis habilidades que puedo aplicar</p>
        <div  className="w-full grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 place-content-center place-items-center bg-moradoOscuro pb-32">
          {skillsList.map((title, index) => (
            <motion.div
              className="lg:w-[20rem] w-80"
              key={index}
              initial="offscreen"
              animate="onscreen"
              variants={cardVariants}
              whileHover={{ scale: 1.1, rotate: 7 }}
              transition={{ type: 'spring', damping: 5, stiffness: 100, restDelta: 0.001 }}>
              <div className="splash" style={{ background }} />
              <motion.div className="card">
                <div data-aos="fade-up">
                  <CardSkills Skills={title.skill} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

    </>
  )
}

export default Skills
