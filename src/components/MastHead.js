/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import {
  Box,
  Button,
  ButtonGroup,
  makeStyles,
  Typography,
} from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { FiArrowDown, FiArrowRight } from "react-icons/fi"
import * as typeformEmbed from "@typeform/embed"
import { EARLY_ACCESS_TYPEFORM } from "./Constants"
import gradient from "../styles/gradient.module.css"

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: "Inter",
    "@media (min-width:1280px)": {
      margin: "8rem",
      marginTop: "6rem",
      marginBottom: "6rem",
    },
  },
  title: {
    fontFamily: "Manrope",
    fontWeight: 800,
    fontSize: "3rem",
    color: theme.palette.text.dark,
    letterSpacing: -4,
    padding: 2,
    "@media (min-width:1280px)": {
      fontSize: "4rem"
    },
  },
  button: {
    padding: "0.8rem",
    margin: "1rem 0 2rem 0",
  },
  button2: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    padding: "0.8rem",
    margin: "1rem 0 2rem 0",
  },
  buttonText: {
    fontFamily: "Manrope",
    fontWeight: 700,
    textTransform: "none",
  },
  text: {
    fontSize: "1.2rem",
    fontWeight: 400,
    margin: "3rem 0 1rem 0",
    letterSpacing: -1,
    lineHeight: 1.5,
    "@media (min-width:1280px)": {
      width: "50%",
      fontSize: "1.5rem",
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
        <Typography variant="h1" className={`${classes.title} ${gradient.blue}`}>
          Build beautiful single-page resums <br /> within minutes.
        </Typography>
        <Typography variant="subtitle1" className={classes.text}>
          Skip the hassle of finding the 'perfect' template and spending hours to
          create a simple resume!
        </Typography>
        <ButtonGroup>
          <Button
            size="large"
            color="primary"
            variant="contained"
            className={classes.button}
            endIcon={<FiArrowRight color="inherit" />}
            disableElevation
            onClick={() => setOpenForm(true)}
          >
            <Typography
              className={classes.buttonText}
              variant="body1"
              color="textSecondary"
            >
              Join the Beta waitlist
            </Typography>
          </Button>
          <Button
            size="medium"
            color="primary"
            variant="text"
            className={classes.button2}
            endIcon={<FiArrowDown color="inherit" />}
            disableElevation
            disableTouchRipple
            href="#features"
          >
            <Typography
              className={classes.buttonText}
              variant="body1"
              color="primary"
            >
              Learn More
            </Typography>
          </Button>
        </ButtonGroup>
      </Box>
    </React.Fragment>
  )
}

export default MastHead
