/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, IconButton, Link, makeStyles, Typography } from "@material-ui/core"
import { FiGithub } from "react-icons/fi"
import React from "react"

const useStyles = makeStyles({
  root: {
    bottom: 0,
    paddingLeft: "2.5rem",
    padding: "5rem",
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
    marginTop: "1rem",
  },
})

function Footer() {
  const classes = useStyles()
  return (
    <Box
      display="flex"
      flexDirection="column"
      className={classes.root}
      bgcolor="primary.main"
    >
      <Typography variant="h6" className={classes.text} color="secondary">
        Resuminator
      </Typography>
      <Box display="flex" flexGrow={1} flexShrink={1} justifyContent="space-between">
        <Typography
          component="div"
          variant="body2"
          className={classes.subtext}
          color="textSecondary"
        >
          Resuminator a project by <Link color="secondary" to="https://github.com/viveknigam3003">Vivek Nigam</Link> and maintained by the Bitshift
          Open Community.
        </Typography>
        <IconButton color="secondary"><FiGithub/></IconButton>
      </Box>
    </Box>
  )
}

export default Footer
