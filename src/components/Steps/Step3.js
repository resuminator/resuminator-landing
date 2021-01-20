import { Box, makeStyles, Paper, Typography } from "@material-ui/core"
import { motion } from "framer-motion"
import React from "react"
import section from "../../styles/section.module.css"
import MotionWrapper from "./MotionWrapper"
import { AiOutlineFilePdf, AiOutlineDownload } from "react-icons/ai"
import { red } from "@material-ui/core/colors"

const useStyles = makeStyles(theme => ({
  heading: {
    color: theme.palette.text.dark,
  },
  textField: {
    margin: "1rem",
    width: "14rem",
  },
  icon1: {
    fontSize: "5rem",
    color: red[800]
  },
  icon2: {
    fontSize: "3.5rem",
    color: theme.palette.primary.dark
  },
}))

const Step3 = () => {
  const classes = useStyles()

  return (
    <Box className={section.step}>
      <MotionWrapper className={section.left}>
        <Typography variant="overline" className={section.overline}>
          Step 3
        </Typography>
        <Typography
          variant="h2"
          className={`${classes.heading} ${section.heading}`}
        >
          Save as PDF!
        </Typography>
        <Typography variant="body1" className={section.body1}>
          When you're done adding, editing, and reviewing your details, you can
          download your shining Resume as a PDF file.
        </Typography>
      </MotionWrapper>
      <MotionWrapper className={section.right}>
        <Paper elevation={16} className={section.paper}>
          <motion.div className={classes.icon1}>
            <AiOutlineFilePdf />
          </motion.div>
          <motion.div
            className={classes.icon2}
            initial={{scale: 5}}
            animate={{scale: 1}}
            transition={{duration: 0.5}}
          >
            <AiOutlineDownload />
          </motion.div>
        </Paper>
      </MotionWrapper>
    </Box>
  )
}

export default Step3
