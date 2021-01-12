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
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { FiArrowDown, FiArrowRight } from "react-icons/fi"
import * as typeformEmbed from "@typeform/embed"
import { EARLY_ACCESS_TYPEFORM } from "./Constants"

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: "Roboto",
    "@media (min-width:1280px)": {
      margin: "8rem",
      marginTop: "6rem",
      marginBottom: "6rem",
    },
  },
  title: {
    fontFamily: "Karla",
    fontWeight: 700,
    letterSpacing: "-0.3rem",
    "@media (min-width:1280px)": {
      letterSpacing: "-0.5rem",
    },
  },
  subtitle: {
    paddingLeft: "0.4rem",
    fontSize: "1.5rem",
    "@media (min-width:1280px)": {
      fontSize: "2rem",
    },
    color: theme.palette.secondary.main,
    fontWeight: 400,
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
    fontFamily: "Karla",
    fontWeight: 700,
    textTransform: "none",
  },
  text: {
    paddingLeft: "0.4rem",
    marginTop: "3rem",
    color: theme.palette.grey[700],
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
  },
  message: {
    paddingLeft: "0.4rem",
    marginTop: "2rem",
    fontFamily: "Karla",
    fontWeight: 700,
    letterSpacing: "-0.05rem",
    color: theme.palette.primary.light,
    [theme.breakpoints.up("sm")]: {
      width: "50%",
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
        alignItems="start"
        textAlign="left"
        pt={2}
        m={5}
        flexGrow={1}
      >
        <Typography variant="h1" className={classes.title} color="textPrimary">
          Resuminator
        </Typography>
        <Typography variant="h2" className={classes.subtitle}>
          Build beautiful single-page resumes
        </Typography>
        <Typography variant="subtitle1" className={classes.text}>
          Resuminator enables you to build and manage multiple resumes with{" "}
          <Link href="https://en.wikipedia.org/wiki/Lint_(software)">
            linting
          </Link>{" "}
          support which guides you towards building an effective and powerful
          resumes for a great first-impression.
        </Typography>
        <Typography variant="body1" className={classes.message}>
          Resuminator is currently in Beta. Join the waitlist to get your
          exclusive account!{" "}
          <span aria-label="tada" role="img">
            🎉
          </span>
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
              Join the waitlist
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
