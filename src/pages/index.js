/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { MuiThemeProvider } from "@material-ui/core"
import React from "react"
import Features from "../templates/Features"
import Footer from "../templates/Footer"
import MastHead from "../templates/MastHead"
import { theme } from "../templates/theme"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8 " />
        <meta
          name="Description"
          content="Build effective and beautiful single page resumes with powerful linting support."
        />
        <title>Resuminator | Beautiful Single Page Resumes</title>
        <html lang="en" />
      </Helmet>
      <MuiThemeProvider theme={theme}>
        <MastHead />
        <Features />
        <Footer />
      </MuiThemeProvider>
    </React.Fragment>
  )
}
