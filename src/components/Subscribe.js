import { Box, makeStyles, TextField } from "@material-ui/core"
import React from "react"

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
      <form method="post" action="https://formspree.io/f/xpzordgp">
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
