import React from 'react'
import { motion, delay } from "framer-motion";
const FloatingImage = ({children,ypos,yneg}) => {
    return (
        <motion.div animate={["initial"]} whileHover={["grow"]} className='w-auto duration-100 '
        variants={{
                grow: {
                    scale: 1.1
                },
                rotate: {
                    rotate: [null, -5, 5, 0],
                    transition: {
                        // delay,
                        duration: 40
                        // repeat: Infinity,
                        // repeatDelay: 0.2,
                        // repeatType: "reverse"
                    }
                },
                initial: {
                    y: [-{yneg}, {ypos}],
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

export default FloatingImage