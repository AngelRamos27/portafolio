import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Switch = () => {
  const [isOn, setIsOn] = useState(false)
  const { i18n } = useTranslation()

  const toggleSwitch = () => {
    setIsOn(!isOn)
    const newLanguage = isOn ? 'en' : 'es'
    i18n.changeLanguage(newLanguage)
  }

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  }

  return (
    <div
      className={`mt-3 w-10 bg-gray-500 h-4 flex items-center ${
        !isOn ? 'justify-center' : 'justify-end bg-moradoMedio'
      }  p-1 rounded-full cursor-pointer`}
      onClick={toggleSwitch}
    >
      <motion.div className={`w-6 h-6 ${!isOn ? 'bg-white' : 'bg-amarilloMZ'}  rounded-full `} layout transition={spring} />
    </div>
  )
}
export default Switch