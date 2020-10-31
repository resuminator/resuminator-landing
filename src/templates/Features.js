/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, Icon, makeStyles, Paper, Typography } from "@material-ui/core"
import React from "react"
import { FiCheckCircle, FiGithub } from "react-icons/fi"
import { VscSymbolColor } from "react-icons/vsc"

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      margin: "3rem",
    },
  },
  titles: {
    fontFamily: "Karla",
    fontWeight: 700,
    letterSpacing: "-0.2rem",
    color: theme.palette.primary.light,
    paddingBottom: "0.5rem",
    marginTop: "0.5rem",
  },
  links: {
    color: theme.palette.secondary.dark,
    textDecoration: "none",
    wordWrap: "break-word"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.contrast.light,
    color: theme.palette.text.primary,
    padding: "0.5rem",
    paddingBottom: "2rem",
  },
}))

function Features() {
  const classes = useStyles()

  const pageLink = (
    <React.Fragment>
      Powered by a strong developer and designer community. Find it on {<a
          className={classes.links}
          href="https://github.com/viveknigam3003/resuminator"
        >
          viveknigam3003/resuminator
        </a>
       }
    </React.Fragment>
  )

  const tiles = [
    {
      icon: <FiGithub />,
      title: "Free and Open Source",
      content: pageLink,
    },
    {
      icon: <FiCheckCircle />,
      title: "Effective Linting",
      content: `Build resumes like never before; know what to put in and what to omit
      for your job profile. Keep that Resume clean and tidy.`,
    },
    {
      icon: <VscSymbolColor />,
      title: "Beautiful Themes",
      content: `Your resume reaches the recruiter before you do. Build a lasting
      impression with beautiful color and font schemes.`,
    },
  ]

  const featureTile = (icon, title, content) => {
    return (
      <Paper key={title} elevation={0} className={classes.paper}>
        <Icon className={classes.icons}>{icon}</Icon>
        <Typography className={classes.titles} variant="h4">
          {title}
        </Typography>
        <Typography variant="body1">{content}</Typography>
      </Paper>
    )
  }

  return (
    <Box
      component="a"
      display="flex"
      className={classes.root}
      m={15}
      mt={5}
      justifyContent="space-between"
      id="features"
    >
      {tiles.map(item => featureTile(item.icon, item.title, item.content))}
    </Box>
  )
}

export default Features
