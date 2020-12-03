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
import Footer from "../components/Footer"
import MastHead from "../components/MastHead"
import { theme } from "../styles/theme"
import { Helmet } from "react-helmet"
import MenuBar from "../components/MenuBar"
import Contribute from "../components/ContributeCard"
import FeatureBanner from "../components/FeatureBanner"
import { graphql, useStaticQuery } from "gatsby"

export default function Home() {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "Re-Md.png" }) {
        id
        childImageSharp {
          fixed(width: 240) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

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
        <MenuBar />
        <MastHead />
        <Features />
        <FeatureBanner
          title="Style with Markdown"
          subtitle="Your resume, your expression"
          bodyText="Bring the ease of working with Markdown and style your resume with bullet points, headings and subheadings, math - whatever you want!"
          data={data}
        />
        <Contribute />
        <Footer />
      </MuiThemeProvider>
    </React.Fragment>
  )
}
