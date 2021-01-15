import {
  Box,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core"
import React, { useState } from "react"
import { InView } from "react-intersection-observer"
import section from "../../styles/section.module.css"
import { InputHeader } from "../common/InputHeader"

const useStyles = makeStyles(theme => ({
  heading: {
    color: theme.palette.text.dark
  },
  textField: {
    margin: "1rem",
    width: "14rem",
    "@media (min-width: 375px)": {
      width: "16rem",
    },
    "@media (min-width: 425px)": {
      width: "20rem",
    },
  },
}))

const Step1 = ({typewriter}) => {
  const classes = useStyles()
  const [name, setName] = useState("")

  return (
    <Box className={section.step}>
      <Box className={section.left} textAlign="left">
        <Typography variant="overline" className={section.overline}>
          Step 1
        </Typography>
        <Typography variant="h2" className={`${classes.heading} ${section.heading}`}>
          Add your details
        </Typography>
        <Typography variant="body1" className={section.body1}>
          With a simple and intuitive{" "}
          <span className={section.underline}>form format</span>, it has never
          been easier to create and modify your resume details
        </Typography>
      </Box>
      <Box className={section.right}>
        <Paper elevation={16} className={section.paper}>
          <InputHeader
            heading="Let's go over some basic info"
            subtitle=" We pulled in some information from your profile, you can edit it below."
          />
          <InView
            as="div"
            threshold={0.5}
            onChange={inView =>
              inView ? typewriter("Vivek Nigam", setName) : setName("")
            }
          >
            <TextField
              label="Full Name"
              variant="outlined"
              size="medium"
              className={classes.textField}
              value={name}
            />
          </InView>
        </Paper>
      </Box>
    </Box>
  )
}

export default Step1
