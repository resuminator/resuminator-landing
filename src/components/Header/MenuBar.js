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
import React from "react"
import header from "../../styles/header.module.css"
import LoginSignupButtons from "./LoginSignupButtons"
import Logo from "./Logo"
import Navigation from "./Sections"

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: "Manrope",
    color: theme.palette.text.primary,
    padding: "2rem 2rem 2rem 2rem",
    position: "fixed",
    width: "100%",
    "@media (min-width:1280px)": {
      padding: "2rem 8rem 2rem 8rem",
      marginBottom: 0,
    },
  },
}))

function MenuBar() {
  const classes = useStyles()

  return (
    <Box
      component="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      className={`${classes.root} ${header.blur}`}
    >
      <Box display="flex" id="menu_options">
        <Logo />
        <Navigation />
      </Box>
      <LoginSignupButtons />
    </Box>
  )
}

export default MenuBar
