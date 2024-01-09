import React, { useEffect } from 'react'
import CardSkills from '../Components/Cards/CardSkills'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

const Skills = () => {
  const { t } = useTranslation()
  const skillsList = [
    { skill: 'Sk1' },
    { skill: 'Sk4' },
    { skill: 'Sk7' },
    { skill: 'Sk2Comp' },
    { skill: 'Sk5' },
    { skill: 'Sk8' },
    { skill: 'Sk3' },
    { skill: 'Sk6' },
    { skill: 'Sk9' },
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
  const location = useLocation()
  const isSkillsPage = location.pathname.includes('/myskills')


  return (
    <>
      <div data-aos="fade-up" className='flex justify-center flex-col w-full '>
        <p className={`text-lg text-center text-amarilloMZ px-4 ${isSkillsPage ? 'pt-[35rem]  lg:pt-0' : 'pb-32'}`}>{t('habilidades_texto')}</p>
        <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-12 place-content-center place-items-center bg-moradoOscuro ">
          {skillsList.map((title, index) => (
            <motion.div
              className="lg:w-[20rem] sm:w-80 w-36 h-44"
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
