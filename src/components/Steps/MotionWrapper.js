import { motion } from "framer-motion"
import React from "react"
import section from "../../styles/section.module.css"

const MotionWrapper = ({ children, className }) => {
  const variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  }

  return (
    <motion.div
      layout
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default MotionWrapper
