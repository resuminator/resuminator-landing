/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 * 
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, makeStyles, Typography } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles({
  stickyFooter: {
    bottom: 10,
  },
  text: {
    fontWeight: 500,
  },
})

function Footer() {
  const classes = useStyles()
  return (
    <Box
      display="flex"
      className={classes.stickyFooter}
      bgcolor="primary.main"
      p={10}
    >
      <Typography
        variant="body1"
        className={classes.text}
        color="textSecondary"
      >
        Developed by Vivek Nigam
      </Typography>
    </Box>
  )
}

export default Footer
