import { Box, makeStyles, Paper, Typography } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import section from "../../styles/section.module.css"
import MotionWrapper from "./MotionWrapper"

const useStyles = makeStyles(theme => ({
  heading: {
    color: theme.palette.text.dark,
  },
  paperHeading: {
    color: theme.palette.text.dark,
  },
  paperSubtitle: {
    color: theme.palette.primary.main,
  },
  textField: {
    margin: "1rem",
    width: "14rem",
  },
}))

const Step2 = ({ typewriter }) => {
  const classes = useStyles()
  const [name, setName] = useState("")

  useEffect(() => {
    typewriter("Vivek Nigam", setName)
    return () => typewriter("", setName)
  }, [typewriter])

  return (
    <MotionWrapper className={section.step}>
      <Box className={section.left}>
        <Typography variant="overline" className={section.overline}>
          Step 2
        </Typography>
        <Typography
          variant="h2"
          className={`${classes.heading} ${section.heading}`}
        >
          Live preview changes
        </Typography>
        <Typography variant="body1" className={section.body1}>
          What you see is what you get (WYSIWYG). Review your changes as you
          make them in real time!
        </Typography>
      </Box>
      <Box className={section.right}>
        <Paper elevation={16} className={section.paper}>
          <Typography
            component="div"
            className={`${classes.paperHeading} ${section.displayHeading}`}
          >
            {name}
          </Typography>
          <Typography
            component="div"
            className={`${classes.paperSubtitle} ${section.displaySubtitle}`}
          >
            Software Developer
          </Typography>
        </Paper>
      </Box>
    </MotionWrapper>
  )
}

export default Step2
