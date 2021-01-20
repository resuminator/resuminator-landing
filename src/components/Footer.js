/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, IconButton, makeStyles, Typography } from "@material-ui/core"
import { FiGithub } from "react-icons/fi"
import React from "react"
import Subscribe from "./Subscribe"
import { OWNER_PROFILE, RESUMINATOR_REPO_LINK } from "./Constants"

const useStyles = makeStyles(theme => ({
  root: {
    bottom: 0,
    paddingLeft: "2.5rem",
    padding: "2rem",
    "@media (min-width:1280px)": {
      padding: "8rem",
      paddingTop: "2rem",
    },
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundColor: theme.palette.primary.main,
  },
  col1: {
    "@media (min-width:768px)": {
      width: "40%"
    },
  },
  text: {
    fontWeight: 400,
    fontFamily: "Manrope",
  },
  subtext: {
    fontFamily: "Inter",
    fontWeight: 400,
    margin: "2rem",
    marginLeft: "0rem",
    maxWidth: "24rem"
  },
  links: {
    color: theme.palette.secondary.light,
    textDecoration: "none",
  },
  button: {
    color: theme.palette.secondary.light,
    margin: "1rem",
    padding: "1rem",
  },
  copyright: {
    marginTop: "0.5rem",
    marginBottom: "0rem",
  },
}))

function Footer() {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <Box id="col-1" display="flex" flexDirection="column" className={classes.col1} flexGrow={1} flexShrink={1}>
        <Typography variant="h6" className={classes.text} color="secondary">
          Resuminator
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
          align="left"
          className={classes.copyright}
        >
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a href={OWNER_PROFILE} className={classes.links}>
            Vivek Nigam
          </a>{" "}
        </Typography>
        <Typography
          component="div"
          variant="body1"
          color="textSecondary"
          className={classes.subtext}
        >
          Resuminator is a project by Vivek Nigam and is maintained by The
          Bitshift Community
        </Typography>
      </Box>
      <Box id="col-2" display="flex" flexDirection="column" flexGrow={1} flexShrink={1}>
        <Subscribe />
      </Box>
      <Box id="col-3" display="flex" flexDirection="column" flexShrink={1}>
        <IconButton className={classes.button} href={RESUMINATOR_REPO_LINK} size="small">
          <FiGithub />
        </IconButton>
      </Box>
    </footer>
  )
}

export default Footer
