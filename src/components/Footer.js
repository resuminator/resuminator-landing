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

const useStyles = makeStyles(theme => ({
  root: {
    bottom: 0,
    paddingLeft: "2.5rem",
    padding: "2rem",
    "@media (min-width:1280px)": {
      paddingLeft: "8rem",
      paddingTop: "2rem",
    },
  },
  text: {
    fontWeight: 400,
    fontFamily: "Karla",
  },
  subtext: {
    fontFamily: "Roboto",
    fontWeight: 400,
    marginTop: "2rem",
    color: theme.palette.contrast.main,
  },
  links: {
    color: theme.palette.secondary.light,
    textDecoration: "none",
  },
  button: {
    color: theme.palette.secondary.light,
    margin: "1rem",
    padding: "1rem"
  },
}))

function Footer() {
  const classes = useStyles()
  return (
    <footer>
      <Box
        display="flex"
        flexDirection="column"
        className={classes.root}
        bgcolor="primary.main"
      >
        <Typography variant="h6" className={classes.text} color="secondary">
          Resuminator
        </Typography>
        <Box
          display="flex"
          flexGrow={1}
          flexShrink={1}
          justifyContent="space-between"
          alignItems="stretch"
        >
          <Typography
            component="div"
            variant="body2"
            className={classes.subtext}
          >
            Resuminator a project by{" "}
            <a
              className={classes.links}
              href="https://github.com/viveknigam3003"
            >
              Vivek Nigam
            </a>{" "}
            and maintained by the Bitshift Open Community.
          </Typography>
          <IconButton
            className={classes.button}
            href="https://github.com/viveknigam3003/resuminator"
          >
            <FiGithub />
          </IconButton>
        </Box>
        <Subscribe />
      </Box>
    </footer>
  )
}

export default Footer
