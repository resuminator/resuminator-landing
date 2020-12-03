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
import Img from "gatsby-image"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "space-between",
    "@media (min-width:1280px)": {
      padding: "5rem",
      paddingBottom: "4rem",
      paddingTop: "4rem",
      margin: "5rem",
      marginTop: "0rem",
      flexDirection: "row",
      alignItems: "center",
      justifyItems: "space-between",
    },
  },
  text: {
    "@media (min-width:1280px)": {
      textAlign: "left",
      marginLeft: "8rem",
    },
  },
  h2: {
    fontFamily: "Karla",
    fontWeight: 700,
    letterSpacing: "-0.2rem",
    color: theme.palette.secondary.dark,
    fontSize: "3rem",
    "@media (min-width:1280px)": {
      fontSize: "4rem",
    },
  },
  subtitle: {
    fontFamily: "Karla",
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

const FeatureBanner = ({ title, subtitle, bodyText, imageRight, data }) => {

  const Image = () => (
    <Box m={2} p={2}>
      <Img
        fixed={data.image.childImageSharp.fixed}
        alt="Resuminator+Markdown"
      />
    </Box>
  )

  const Text = () => (
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

  const classes = useStyles()
  const imageLeftElements = [<Image key="image" />, <Text key="text-box" />]
  const imageRightElements = [<Text key="text-box" />, <Image key="image" />]

  return (
    <Box display="flex" p={5} m={2} className={classes.root}>
      {imageRight ? imageRightElements : imageLeftElements}
    </Box>
  )
}

export default FeatureBanner
