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
  Icon,
  Link,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core"
import React from "react"
import { FiCheckCircle, FiGithub } from "react-icons/fi"
import { VscSymbolColor } from "react-icons/vsc"

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      margin: "3rem" 
    },
  },
  titles: {
    fontFamily: "Karla",
    fontWeight: 700,
    letterSpacing: "-0.2rem",
    color: theme.palette.primary.light,
    paddingBottom: "0.5rem",
  },
  links: {
    color: theme.palette.secondary.dark,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.contrast.light,
    color: theme.palette.text.primary,
    padding: "0.5rem",
  },
}))

function Features() {
  const classes = useStyles()
  return (
    <Box
      display="flex"
      className={classes.root}
      m={15}
      mt={5}
      justifyContent="space-between"
    >
      <Paper elevation={0} className={classes.paper}>
        <Icon className={classes.icons}>
          <FiGithub />
        </Icon>
        <Typography className={classes.titles} variant="h4">
          Open Source
        </Typography>
        <Typography variant="body1">
          Powered by a strong developer and designer community. Find it on{" "}
          <Link
            className={classes.links}
            to="https://github.com/viveknigam3003/resuminator"
          >
            viveknigam3003/resuminator
          </Link>
        </Typography>
      </Paper>
      <Paper elevation={0} className={classes.paper}>
        <Icon className={classes.icons}>
          <FiCheckCircle />
        </Icon>
        <Typography className={classes.titles} variant="h4">
          Powerful Linting
        </Typography>
        <Typography variant="body1">
          Build resumes like never before; know what to put in and what to omit
          for your job profile. Keep that Resume clean and tidy.
        </Typography>
      </Paper>
      <Paper elevation={0} className={classes.paper}>
        <Icon className={classes.icons}>
          <VscSymbolColor />
        </Icon>
        <Typography className={classes.titles} variant="h4">
          Beautiful Themes
        </Typography>
        <Typography variant="body1">
          Your resume reaches the recruiter before you do. Build a lasting
          impression with beautiful color and font schemes.
        </Typography>
      </Paper>
    </Box>
  )
}

export default Features
