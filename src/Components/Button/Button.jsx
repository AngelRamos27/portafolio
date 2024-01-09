import React from 'react'
import { motion } from "framer-motion";
const Button = ({ text, type, onClick,w,h,sizeF }) => {
    return (
        <motion.button
            className={`box bg-moradoBg shadow-lg shadow-pink-500 hover:shadow-purple-600 duration-100  rounded-3xl ${w} ${h} ${sizeF}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            type={type} onClick={onClick}
        >
            {text}
        </motion.button>
    )
}

export default Button