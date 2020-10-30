import { Box, Button, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { FiArrowRight } from "react-icons/fi"

const useStyles = makeStyles({
  root: {
    fontFamily: "Roboto",
    "@media (min-width:1280px)": {
      margin: "8rem",
    },
  },
  title: {
    fontFamily: "Karla",
    fontWeight: 700,
    letterSpacing: "-0.3rem",
    "@media (min-width:1280px)": {
      letterSpacing: "-0.5rem",
    },
  },
  subtitle: {
    paddingLeft: "0.4rem",
  },
  button: {
    padding: "0.8rem",
    marginTop: "2rem",
  },
  buttonText: {
    fontFamily: "Karla",
    fontWeight: 700,
    textTransform: "none",
  },
})

function MastHead() {
  const classes = useStyles()
  return (
    <Box
      display="flex"
      flexDirection="column"
      className={classes.root}
      justify="center"
      alignItems="start"
      textAlign="left"
      pt={10}
      m={5}
    >
      <Typography variant="h1" className={classes.title} color="textPrimary">
        Resuminator
      </Typography>
      <Typography variant="h5" className={classes.subtitle} color="secondary">
        Build beautiful single-page resumes
      </Typography>
      <Button
        size="large"
        color="primary"
        variant="contained"
        className={classes.button}
        endIcon={<FiArrowRight color="inherit" />}
        disableElevation
      >
        <Typography
          className={classes.buttonText}
          variant="body1"
          color="textSecondary"
        >
          Request Early Access
        </Typography>
      </Button>
    </Box>
  )
}

export default MastHead
