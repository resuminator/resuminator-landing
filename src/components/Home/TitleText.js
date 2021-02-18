/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { makeStyles, Typography } from "@material-ui/core"
import React from "react"
import gradient from "../../styles/gradient.module.css"

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "Manrope",
    fontWeight: 800,
    fontSize: "3rem",
    color: theme.palette.text.dark,
    letterSpacing: -4,
    padding: 2,
    "@media (min-width:1280px)": {
      fontSize: "4rem",
    },
  },
  text: {
    fontSize: "1.2rem",
    fontWeight: 400,
    margin: "3rem 0 1rem 0",
    letterSpacing: -0.5,
    lineHeight: 1.5,
    "@media (min-width:1280px)": {
      width: "50%",
      fontSize: "1.5rem",
    },
  },
  highlight: {
    display: "inline",
    paddingInlineEnd: "1rem",
    overflowWrap: "break-word",
  },
}))

const TitleText = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Typography variant="h1" className={classes.title}>
        Build beautiful{" "}
        <span className={`${classes.highlight} ${gradient.blue}`}>
          single-page resumes
        </span>{" "}
        <br /> within minutes.
      </Typography>
      <Typography variant="subtitle1" className={classes.text}>
        Skip the hassle of finding the 'perfect' template and spending hours to
        create a simple resume!
      </Typography>
    </React.Fragment>
  )
}

export default TitleText
