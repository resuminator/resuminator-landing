import { Box, makeStyles, Typography } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles({
  stickyFooter: {
    bottom: 0,
  },
  text: {
    fontWeight: 500,
  },
})

function Footer() {
  const classes = useStyles()
  return (
    <Box
      display="flex"
      className={classes.stickyFooter}
      bgcolor="primary.main"
      p={10}
    >
      <Typography
        variant="body1"
        className={classes.text}
        color="textSecondary"
      >
        Developed by Vivek Nigam
      </Typography>
    </Box>
  )
}

export default Footer
