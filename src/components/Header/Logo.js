import { Link, makeStyles, Typography } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles({
  root: {
    fontWeight: 700,
    paddingRight: "2rem",
    letterSpacing: "-0.15rem",
    "@media (min-width:1280px)": {
      letterSpacing: "-0.2rem",
    },
    fontFamily: "Karla",
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
})

const Logo = () => {
  const classes = useStyles()
  return (
    <Link className={classes.link} href="/">
      <Typography
        id="logo"
        variant="h4"
        className={classes.root}
        color="primary"
      >
        Resuminator
      </Typography>
    </Link>
  )
}

export default Logo
