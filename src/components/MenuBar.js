/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import {
  Box,
  Button,
  ButtonGroup,
  makeStyles,
  Typography,
} from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: "Karla",
    color: theme.palette.text.primary,
    "@media (min-width:1280px)": {
      margin: "6.5rem",
      marginTop: "1rem",
      marginBottom: 0,
    },
  },
  logo: {
    fontWeight: 700,
    paddingRight: "0.5rem",
    letterSpacing: "-0.3rem",
    "@media (min-width:1280px)": {
      letterSpacing: "-0.4rem",
    },
    fontFamily: "Karla",
    border: "solid",
    borderColor: theme.palette.contrast.main,
    borderWidth: "0.1rem",
  },
  options: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  btn: {
    textTransform: "none",
    marginLeft: "0.2rem",
    marginRight: "0.2rem",
  },
  optionBtn: {
    fontFamily: "Karla",
    textTransform: "none",
    marginLeft: "0.2rem",
    marginRight: "0.2rem",
  },
  btnText: {
    fontFamily: "Karla",
  }
}))

function MenuBar() {
  const classes = useStyles()

  const options = [
    {
      name: "Features",
      link: "#features",
    },
    // {
    //   name: "Pricing",
    //   link: "#",
    // },
    // {
    //   name: "Community",
    //   link: "#",
    // },
  ]

  const optionButtons = (name, linkTo) => (
    <Button
      key={name}
      variant="text"
      className={classes.optionBtn}
      color="primary"
      size="large"
      href={linkTo}
    >
      {name}
    </Button>
  )

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      className={classes.root}
      p={3}
      m={2}
      mt={2}
      mb={0}
    >
      <Typography
        id="logo"
        variant="h3"
        className={classes.logo}
        color="primary"
      >
        Re
      </Typography>
      <Box display="flex" id="menu_options">
        <ButtonGroup className={classes.options}>
          {options.map(item => optionButtons(item.name, item.link))}
        </ButtonGroup>
        <Button
          size="medium"
          variant="contained"
          className={classes.btn}
          color="primary"
          href="https://resuminator.vercel.app/"
          disableElevation
        >
          <Typography className={classes.btnText}>Log in</Typography>
        </Button>
        {/* <Button
          size="medium"
          variant="text"
          className={classes.btn}
          color="primary"
          disabled
        >
          <Typography>Sign Up</Typography>
        </Button> */}
      </Box>
    </Box>
  )
}

export default MenuBar
