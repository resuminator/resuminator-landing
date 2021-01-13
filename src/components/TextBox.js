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

const useStyles = makeStyles(theme => ({
  text: {
    "@media (min-width:1280px)": {
      textAlign: (props) => props.center ? "center" : "left",
      marginLeft: (props) => props.center ? "0rem" : "8rem",
    },
  },
  h2: {
    fontFamily: "Manrope",
    fontWeight: 700,
    letterSpacing: "-0.2rem",
    color: theme.palette.secondary.dark,
    fontSize: "3rem",
    "@media (min-width:1280px)": {
      fontSize: "4rem",
    },
  },
  subtitle: {
    fontFamily: "Manrope",
    letterSpacing: "-0.1rem",
    color: theme.palette.grey[400],
  },
  bodyText: {
    color: theme.palette.grey[600],
    paddingTop: "2rem",
    "@media (min-width:1280px)": {
      padding: "2rem",
      paddingLeft: "0rem",
    },
  },
}))

const TextBox = ({ title, subtitle, bodyText, center }) => {
  const classes = useStyles({center})
  return (
    <Box
      display="flex"
      flexDirection="column"
      textAlign="center"
      className={classes.text}
    >
      <Typography variant="h2" className={classes.h2}>
        {title}
      </Typography>
      <Typography variant="h4" className={classes.subtitle}>
        {subtitle}
      </Typography>
      <Typography variant="body1" component="p" className={classes.bodyText}>
        {bodyText}
      </Typography>
    </Box>
  )
}

export default TextBox
