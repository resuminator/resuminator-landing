/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, makeStyles } from "@material-ui/core"
import Img from "gatsby-image"
import React from "react"
import TextBox from "./TextBox"

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

  const classes = useStyles()
  const imageLeftElements = [
    <Image key="image" />,
    <TextBox
      key="text-box"
      title={title}
      subtitle={subtitle}
      bodyText={bodyText}
    />,
  ]
  const imageRightElements = [
    <TextBox
      key="text-box"
      title={title}
      subtitle={subtitle}
      bodyText={bodyText}
    />,
    <Image key="image" />,
  ]

  return (
    <Box display="flex" p={5} m={2} className={classes.root}>
      {imageRight ? imageRightElements : imageLeftElements}
    </Box>
  )
}

export default FeatureBanner
