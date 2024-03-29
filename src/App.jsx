import { useState } from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Base from './Routes/Base'
import AboutMe from './Routes/AboutMe'
import Skills from './Routes/Skills'
import Proyects from './Routes/Proyects'
import Education from './Routes/Education'
import Contact from './Routes/Contact'
import Tecnologies from './Routes/Tecnologies'
function App() {
  const router = createHashRouter([
    {
      path: '/',
      element: <Base />,
      children: [
        { path: '/aboutme', element: <AboutMe /> },
        { path: '/myskills', element: <Skills /> },
        { path: '/proyects', element: <Proyects /> },
        { path: '/technologies', element:  <Tecnologies/> },
        { path: '/education', element: <Education /> },
        { path: '/contact', element: <Contact /> },
      ],
    },
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )

}
//esto es un comentario de prueba
export default App
