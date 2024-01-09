import React from 'react'
import { motion, delay } from "framer-motion";
const FloatingDiv = ({ delay, children, width }) => {
    const divWidth = width ? `${width}` : ''
    return (
        <motion.div animate={["initial"]} whileHover={["grow"]}
            className={`duration-100 flex justify-center items-center ${divWidth}`}
            variants={{
                grow: {
                    scale: 1.1
                },
                rotate: {
                    rotate: [null, -5, 5, 0],
                    transition: {
                        delay,
                        duration: 40
                        // repeat: Infinity,
                        // repeatDelay: 0.2,
                        // repeatType: "reverse"
                    }
                },
                initial: {
                    y: [-20, 20],
                    rotate: 0,
                    transition: {
                        delay,
                        duration: 2,
                        repeat: Infinity,
                        // repeatDelay: 0.2,
                        repeatType: "reverse"
                    }
                }
            }}
        >{children}
        </motion.div>
    )
}
export default FloatingDiv