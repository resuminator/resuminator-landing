/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, makeStyles, TextField } from "@material-ui/core"
import React from "react"
import { FORMSPREE_ACTION_LINK } from "./Constants"

const useStyles = makeStyles(theme => ({
  textField: {
    fontFamily: "Karla",
    color: theme.palette.contrast.main,
  },

  cssLabel: {
    color: theme.palette.secondary.light,
  },

  cssOutlinedInput: {
    borderColor: theme.palette.secondary.main,
    color: theme.palette.contrast.main,
  },

  cssFocused: { borderColor: theme.palette.secondary.main },

  notchedOutline: {
    borderWidth: "0.1rem",
    borderColor: theme.palette.secondary.light,
    "&:hover": {
      borderColor: theme.palette.secondary.main,
      borderWidth: 2,
    },
  },

  icon: {
    color: theme.palette.secondary.light,
  },
}))

function Subscribe() {
  const classes = useStyles()
  return (
    <Box display="flex" alignItems="center" justifyContent="start">
      <form method="post" action={FORMSPREE_ACTION_LINK}>
        <TextField
          id="subscribe-email"
          label="Subscribe to Updates"
          margin="normal"
          type="email"
          name="_replyto"
          className={classes.textField}
          helperText="Don't worry, we never spam!"
          placeholder="your email"
          color="secondary"
          variant="outlined"
          size="small"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
      </form>
    </Box>
  )
}

export default Subscribe
