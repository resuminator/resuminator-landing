import { Box, makeStyles, Typography } from "@material-ui/core"
import NOT_FOUND_IMAGE from "../images/undraw_not_found_60pq.svg"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "auto",
    backgroundColor: theme.palette.primary.dark,
    "@media (min-width:1280px)": {
      padding: "16rem",
      paddingTop: "8rem",
      paddingBottom: "8rem"
    },
  },
  logo: {
    fontFamily: "Karla",
    paddingBottom: "3rem",
    fontSize: "2rem",
    color: theme.palette.grey[400],
    letterSpacing: "-0.15rem",
  },
  title: {
    fontFamily: "Karla",
    fontWeight: 700,
    color: theme.palette.secondary.light,
  },
  subtitle: {
    color: theme.palette.primary.light,
    fontSize: "2rem",
    fontWeight: 400,
  },
  img: {
    paddingTop: "5rem",
  }
}))

function Page404() {
  const classes = useStyles()

  return (
    <Box
      display="flex"
      alignItems="start"
      flexDirection="column"
      className={classes.root}
      p={5}
      pt={10}
    >
      <Typography variant="h3" className={classes.logo}>
        Resuminator
      </Typography>
      <Typography className={classes.title} color="secondary" variant="h1">
        404
      </Typography>
      <Typography className={classes.subtitle} variant="h2">
        Oops, looks like you landed on a wrong address!
      </Typography>
      <img
        className={classes.img}
        src={NOT_FOUND_IMAGE}
        alt="Err_404_Not_Found"
        height="150rem"
        width="auto"
      />
    </Box>
  )
}

export default Page404
