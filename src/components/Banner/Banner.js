import { Box, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import Typeform from "../../services/Typeform"
import styles from "../../styles/banner.module.css"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.contrast.light,
  },
  heading: {
    color: theme.palette.text.dark,
  },
  subtext: {
    color: theme.palette.text.primary,
  },
}))

const Banner = () => {
  const classes = useStyles()
  return (
    <Box className={`${classes.root} ${styles.root}`}>
      <Typography
        variant="h2"
        className={`${classes.heading} ${styles.heading}`}
      >
        Building <span className={styles.span}>stunning resumes</span> has never been easier! <span className={styles.emoji} aria-label="lightning" role="img">⚡</span>
      </Typography>
      <Typeform className={styles.btn}/>
    </Box>
  )
}

export default Banner
