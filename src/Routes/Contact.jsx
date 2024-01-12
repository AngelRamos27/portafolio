import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import InputText from '../Components/Input/InputText';
import TextArea from '../Components/Input/TextArea';
import Button from '../Components/Button/Button';
import ModalNotificacion from '../Components/ModalNotification/ModalNotificacion';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const { t } = useTranslation()
  const [emailTextError, setEmailTextError] = useState('')
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [data, setData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    emailjs.sendForm('service_cfpwlk5', 'template_d4d45s6', e.target, '15aE-pJxjaqH2hhcX')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
    handleNotification(t('msgSend'))
  }


  const handleNotification = (message) => {
    setNotificationMessage(message)
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false)
    }, 3000)
  }
  const location = useLocation()
  const isContactPage = location.pathname.includes('/contact') 

  const handleChange = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value })
    if (name === 'user_email') {
      const findEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      const isValidEmail = value.match(findEmail) || value.trim() === ''
      if (!isValidEmail) {
        setEmailTextError(t('invalidEmail'))
      } else {
        setEmailTextError('')
      }
    }
  }

  return (
    <>
      <div data-aos="fade-up" className='z-40 flex justify-center items-center'>
        {showNotification && <ModalNotificacion msg={notificationMessage} show={showNotification} />}
      </div>
      <div data-aos="fade-up" className={`w-full flex flex-col justify-center bg-moradoOscuro h-screen text-amarilloMZ ${isContactPage && 'pb-72 pt-96'}`}>
        <p className='lg:text-lg text-md text-center px-4'>{t('contac_text')}
          <br /> {t('contact_text1')}</p>
        <div className='w-full flex justify-center h-auto pt-5'>
          <form onSubmit={handleSubmit} className='pt-10 flex flex-col lg:w-96 w-64 p-5 rounded-lg gap-10 justify-center items-center'>
            <InputText onChange={handleChange} w={"sm:w-[40rem] w-[22rem]"} h={"h-12"} type="text" placeholder={t('nameI')} name={"user_name"} />
            <InputText onChange={handleChange} w={"sm:w-[40rem] w-[22rem]"} h={"h-12"} type={"email"} placeholder={t('EmailI')} name={"user_email"} />
            {emailTextError && (
              <>
                <AnimatePresence>
                  <motion.div
                    layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`text-red-500 text-md transition-opacity duration-500`}>
                    {emailTextError}
                  </motion.div>
                </AnimatePresence>
              </>
            )}
            <TextArea onChange={handleChange} w={"sm:w-[40rem] w-[22rem]"} h={"h-28"} type={"text"} placeholder={t('Mesa')} name={"message"} />
            <Button text={t('send')} w={"w-44"} h={"h-20"} sizeF={"text-2xl"} />
          </form>
        </div>
      </div>
    </>
  )
}
export default Contact