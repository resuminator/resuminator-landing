import { Box, makeStyles, Typography } from "@material-ui/core"
import { motion } from "framer-motion"
import React, { useState } from "react"
import Typewriter from "typewriter-effect"
import resume from "../../styles/resume.module.css"

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.text.primary,
  }
}))

const Title = () => {
  const classes = useStyles()
  const [jt, setJt] = useState("Full Stack Software Developer")

  const showJobTitle = jt => {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 2 }}
      >
        {jt}
      </motion.span>
    )
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      className={resume.root}
    >
      <Typography variant="h1" id="name" className={`${classes.title} ${resume.title}`}>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={typewriter => {
            typewriter
              .typeString("Vivek Nigam")
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => setJt("UI Designer"))
              .typeString("Shreya Singh")
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => setJt("Research Scientist"))
              .typeString("Martin Ross")
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => setJt("Full Stack Software Developer"))
              .start()
          }}
        />
      </Typography>
      <Typography variant="h2" color="primary" className={resume.subtitle}>
        {showJobTitle(jt)}
      </Typography>
    </Box>
  )
}

export default Title
