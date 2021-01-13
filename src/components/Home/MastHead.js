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
import * as typeformEmbed from "@typeform/embed"
import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import Image from "../common/Image"
import { EARLY_ACCESS_TYPEFORM } from "../Constants"
import ActionButton from "./ActionButtons"
import TitleText from "./TitleText"

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: "Inter",
    "@media (min-width:1280px)": {
      margin: "8rem",
      marginTop: "6rem",
      marginBottom: "6rem",
    },
  },
}))

function MastHead() {
  const classes = useStyles()
  const [openForm, setOpenForm] = useState(false)

  useEffect(() => {
    if (typeof window != `undefined`) {
      const typeForm = typeformEmbed.makePopup(EARLY_ACCESS_TYPEFORM, {
        mode: "drawer_right",
        hideFooter: true,
        hideHeaders: true,
        opacity: 0,
        onSubmit: () => {
          typeForm.close()
          setOpenForm(false)
        },
        onClose: () => setOpenForm(false),
      })

      if (openForm) {
        typeForm.open()
      }
    }
  }, [openForm])

  const data = useStaticQuery(graphql`
    query Image {
      file(relativePath: { eq: "cherry-563.png" }) {
        id
        childImageSharp {
          fixed(width: 360) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
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
        <ActionButton onClick={() => setOpenForm(true)} />
        <Image
          alt="Splash"
          data={data}
          author="Maria Shukshina"
          source="Icons8"
        />
      </Box>
    </React.Fragment>
  )
}

export default MastHead
