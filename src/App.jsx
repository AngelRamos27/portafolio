import { useState } from 'react'
import { Route, RouterProvider, Routes, createBrowserRouter,createHashRouter } from 'react-router-dom'
import Base from './Routes/Base'
import AboutMe from './Routes/AboutMe'
import Skills from './Routes/Skills'
import Proyects from './Routes/Proyects'
import Education from './Routes/Education'
import Contact from './Routes/Contact'
import Tecnologies from './Routes/Tecnologies'
function App() {
  <Routes> 
        <Route path="/portafolio" element={<Base/>} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )

}
//esto es un comentario de prueba
export default App
