import { MuiThemeProvider } from "@material-ui/core"
import React from "react"
import Footer from "../templates/Footer"
import MastHead from "../templates/MastHead"
import { theme } from "../templates/theme"

export default function Home() {
  return (
    <MuiThemeProvider theme={theme}>
      <MastHead />
      <Footer/>
    </MuiThemeProvider>
  )
}
