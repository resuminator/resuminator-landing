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
import GetStartedButton from "./GetStartedButton"
import ResumePreview from "./ResumePreview"
import TitleText from "./TitleText"

const useStyles = makeStyles({
  root: {
    fontFamily: "Inter",
    marginTop: "8rem",
    "@media (min-width:1280px)": {
      margin: "8rem",
      marginTop: "8rem",
      marginBottom: "6rem",
    },
  },
  text: {
    margin: "0 0 1rem 0"
  }
})

function MastHead() {
  const classes = useStyles()

  return (
    <Box
      display="flex"
      flexDirection="column"
      className={classes.root}
      justify="center"
      alignItems="center"
      textAlign="center"
      m={5}
    >
      <TitleText />
      <GetStartedButton />
      <Typography variant="subtitle1" className={classes.text}>
        Currently optimized for Chrome/Chromium/Canary browsers.
      </Typography>
      <ResumePreview />
    </Box>
  )
}

export default MastHead
