/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, Button, Link, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { FiArrowRight } from "react-icons/fi"

const useStyles = makeStyles(theme => ({
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
    color: theme.palette.secondary.light,
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
  text: {
    paddingLeft: "0.4rem",
    marginTop: "3rem",
    color: theme.palette.grey[700],
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
  },
}))

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
      flexGrow={1}
    >
      <Typography variant="h1" className={classes.title} color="textPrimary">
        Resuminator
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        Build beautiful single-page resumes
      </Typography>
      <Typography variant="subtitle1" className={classes.text}>
        Resuminator enables you to build and manage multiple resumes with{" "}
        <Link to="https://en.wikipedia.org/wiki/Lint_(software)">linting</Link>{" "}
        support which guides you towards building an effective and powerful
        resumes for a great first-impression.
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
