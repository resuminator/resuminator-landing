/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, Button, makeStyles, Paper, Typography } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import React from "react"
import { FiAlertCircle, FiArrowRight } from "react-icons/fi"
import { RESUMINATOR_ISSUES_GFI } from "./Constants"

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: "1rem",
    backgroundColor: grey[100],
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
  h2: {
    letterSpacing: -2,
  },
  logo: {
    fontFamily: "Karla",
    fontWeight: 700,
    letterSpacing: -4,
    color: theme.palette.primary.dark,
  },
  subtext: {
    fontFamily: "Inter",
    paddingTop: "2rem",
  },
  button: {
    padding: "0.8rem",
    marginTop: "2rem",
  },
  buttonText: {
    fontFamily: "Manrope",
    fontWeight: 700,
    textTransform: "none",
  },
  img: {
    position: "relative",
    bottom: "0rem",
    right: "0rem",
  },
}))

function Contribute() {
  const classes = useStyles()
  return (
    <Paper component="div" className={classes.root} elevation={1}>
      <Typography variant="h2" className={classes.h2}>
        <span className={classes.logo}>Resuminator</span> is a community driven
        software.
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
        href={RESUMINATOR_ISSUES_GFI}
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
  )
}

export default Contribute
