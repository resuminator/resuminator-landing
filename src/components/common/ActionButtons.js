/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Button, makeStyles } from "@material-ui/core"
import { motion } from "framer-motion"
import React from "react"
import { FiArrowRight } from "react-icons/fi"

const useStyles = makeStyles(theme => ({
  button: {
    padding: "0.8rem",
    margin: "1rem 0 2rem 0",
    color: theme.palette.text.light,
    fontFamily: "Manrope",
    fontWeight: 700,
    letterSpacing: 0.5,
    textTransform: "none",
    "&:hover, &:active": {
      color: theme.palette.secondary.light,
    },
  },
}))

const ActionButton = ({ text, onClick, className }) => {
  const classes = useStyles()

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{scale: 0.9}}
      transition={{ duration: 0.15 }}
    >
      <Button
        size="large"
        color="primary"
        variant="contained"
        className={`${classes.button} ${className}`}
        endIcon={<FiArrowRight color="inherit" />}
        disableElevation
        onClick={onClick}
      >
        {text}
      </Button>
    </motion.div>
  )
}

export default ActionButton
