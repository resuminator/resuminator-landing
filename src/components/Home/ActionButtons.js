/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Button, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { FiArrowRight } from "react-icons/fi"

const useStyles = makeStyles({
  button: {
    padding: "0.8rem",
    margin: "1rem 0 2rem 0",
  },
  buttonText: {
    fontFamily: "Manrope",
    fontWeight: 700,
    textTransform: "none",
  },
})

const ActionButton = ({ onClick }) => {
  const classes = useStyles()
  return (
    <Button
      size="large"
      color="primary"
      variant="contained"
      className={classes.button}
      endIcon={<FiArrowRight color="inherit" />}
      disableElevation
      onClick={onClick}
    >
      <Typography
        className={classes.buttonText}
        variant="body1"
        color="textSecondary"
      >
        Join the Beta waitlist
      </Typography>
    </Button>
  )
}

export default ActionButton
