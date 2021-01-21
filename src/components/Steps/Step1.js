import {
  Box,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core"
import React, { useEffect, useState } from "react"
import section from "../../styles/section.module.css"
import { InputHeader } from "../common/InputHeader"
import MotionWrapper from "./MotionWrapper"

const useStyles = makeStyles(theme => ({
  heading: {
    color: theme.palette.text.dark,
  },
  textField: {
    margin: "1rem",
    width: "14rem",
  },
}))

const Step1 = ({ typewriter }) => {
  const classes = useStyles()
  const [name, setName] = useState("")

  useEffect(() => {
    typewriter("Vivek Nigam", setName)

    return () => typewriter("", setName)
  }, [typewriter])

  return (
    <MotionWrapper className={section.step}>
      <Box className={section.left}>
        <Typography variant="overline" className={section.overline}>
          Step 1
        </Typography>
        <Typography
          variant="h2"
          className={`${classes.heading} ${section.heading}`}
        >
          Add your details
        </Typography>
        <Typography key="body" variant="body1" className={section.body1}>
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
          <TextField
            label="Full Name"
            variant="outlined"
            size="medium"
            className={classes.textField}
            value={name}
          />
        </Paper>
      </Box>
    </MotionWrapper>
  )
}

export default Step1
