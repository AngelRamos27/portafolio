import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import InputText from '../Components/Input/InputText';
import TextArea from '../Components/Input/TextArea';
import Button from '../Components/Button/Button';
import ModalNotificacion from '../Components/ModalNotification/ModalNotificacion';

const Contact = () => {
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
    handleNotification('¡Tu mensaje ha sido enviado!')
  }
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')

  const handleNotification = (message) => {
    setNotificationMessage(message)
    setShowNotification(true)

    setTimeout(() => {
      setShowNotification(false)
    }, 3000)
  }



  const handleChange = ({ target: { name, value } }) => {
    setData({ ...user, [name]: value })
  }
  return (
    <>
      <div data-aos="fade-up" className='z-40 flex justify-center items-center'>
        {showNotification && <ModalNotificacion msg={notificationMessage} show={showNotification} />}
      </div>
      <div data-aos="fade-up" className='w-full flex flex-col justify-center bg-moradoOscuro h-screen text-amarilloMZ'>
        <p className='lg:text-2xl text-md text-center px-4'>¡Contactate conmigo sí te ha interesado mi trabajo!, ingresa tu mensaje
          <br /> o checa mis datos de contacto, muchas gracias por tu atención :)</p>
        <div className='w-full flex justify-center h-auto pt-5'>
          <form onSubmit={handleSubmit} className='pt-10 flex flex-col lg:w-96 w-64 p-5 rounded-lg gap-10 justify-center items-center'>
            <InputText onChange={handleChange} w={"sm:w-[40rem] w-72 "} h={"h-12"} type="text" placeholder={"Nombre"} name={"user_name"} />
            <InputText onChange={handleChange} w={"sm:w-[40rem] w-72"} h={"h-12"} type={"email"} placeholder={"Email"} name={"user_email"} />
            <TextArea onChange={handleChange} w={"sm:w-[40rem] w-72"} h={"h-28"} type={"text"} placeholder={"Mensaje"} name={"message"} />
            <Button text={"Envíar"} w={"w-44"} h={"h-20"} sizeF={"text-2xl"} />
          </form>


        </div>
      </div>
    </>

  )
}
export default Contact