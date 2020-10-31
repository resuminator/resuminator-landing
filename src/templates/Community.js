import { Box, Button, makeStyles, Paper, Typography } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import React from "react"
import { FiAlertCircle, FiArrowRight } from "react-icons/fi"

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: "1rem",
    backgroundColor: grey[50],
    padding: "2.5rem",
    margin: "2rem",
    marginTop: "0rem",
    "@media (min-width:1280px)": {
      padding: "10rem",
      paddingBottom: "8rem",
      paddingTop: "8rem",
      margin: "8rem",
      marginTop: "0rem",
    },
  },
  logo: {
    fontWeight: 500,
    letterSpacing: "-0.2rem",
    color: theme.palette.primary.dark,
  },
  subtext: {
    fontFamily: "Karla",
    letterSpacing: "-0.05rem",
    paddingTop: "2rem",
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
  img: {
    position: "relative",
    bottom: "0rem",
    right: "0rem",
  },
}))

function Community() {
  const classes = useStyles()
  return (
    <Box>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h2" className={classes.h2}>
          <span className={classes.logo}>Resuminator</span> is a community
          driven software.
        </Typography>
        <Typography className={classes.subtext} component="h3" variant="h5">
          An amazing developer and designer community works towards making
          Resuminator better each day. Help us make it better for everyone!
        </Typography>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          size="large"
          startIcon={<FiAlertCircle />}
          endIcon={<FiArrowRight />}
          href="https://github.com/viveknigam3003/resuminator/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
        >
          <Typography
            className={classes.buttonText}
            variant="subtitle1"
            color="inherit"
          >
            {" "}
            Find issues to solve
          </Typography>
        </Button>
      </Paper>
    </Box>
  )
}

export default Community
