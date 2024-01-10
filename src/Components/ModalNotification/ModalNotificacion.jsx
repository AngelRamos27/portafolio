import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const ModalNotificacion = ({ msg, show }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
        }, 10000)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9 }}
                    className={`shadow-lg shadow-[#00ff00] bg-moradoMedio rounded-lg text-amarilloMZ text-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-80 h-32 flex justify-center items-center z-[1000] transition-opacity duration-500`}
                    style={{
                        maxWidth: '80%',
                        maxHeight: '32%',
                    }}
                >
                    {msg}
                </motion.div>
            )}
        </AnimatePresence>
    )
}
export default ModalNotificacion