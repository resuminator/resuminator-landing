import { Button, makeStyles, Typography } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(theme => ({
  btn: {
    textTransform: "none",
    marginLeft: "0.2rem",
    marginRight: "0.2rem",
  },

  btnText: {
    fontFamily: "Karla",
  },
}))

const LoginSignupButtons = () => {
  const classes = useStyles()
  return (
    <Button
      size="medium"
      variant="contained"
      className={classes.btn}
      color="primary"
      href="https://app.resuminator.in/"
      disableElevation
    >
      <Typography className={classes.btnText}>Log in</Typography>
    </Button>
  )
}

export default LoginSignupButtons
