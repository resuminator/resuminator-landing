import { Button, ButtonGroup, makeStyles } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  optionBtn: {
    fontFamily: "Manrope",
    fontWeight: 600,
    textTransform: "none",
    marginLeft: "0.2rem",
    marginRight: "0.2rem",
    color: theme.palette.primary.dark,
  },
}))

const Navigation = () => {
  const classes = useStyles()
  const options = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#",
    },
    {
      name: "Community",
      link: "#",
    },
  ]

  const optionButtons = (name, linkTo) => (
    <Button
      key={name}
      variant="text"
      className={classes.optionBtn}
      size="large"
      href={linkTo}
    >
      {name}
    </Button>
  )

  return (
    <ButtonGroup className={classes.root}>
      {options.map(item => optionButtons(item.name, item.link))}
    </ButtonGroup>
  )
}

export default Navigation
