import { motion } from "framer-motion"
import React from "react"

const MotionWrapper = ({ children, className }) => {
  const variants = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
    exit: { opacity: 0, x: -10, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default MotionWrapper
