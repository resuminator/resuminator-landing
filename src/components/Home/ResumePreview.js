import { Box, Typography } from "@material-ui/core"
import React from "react"
import resume from "../../styles/resume.module.css"
import ColoredLine from "../Resume/Line"
import Title from "../Resume/Title"


const ResumePreview = () => {
  return (
    <Box
      id="resume-paper"
      display="flex"
      alignItems="center"
      flexDirection="column"
      bgcolor="contrast.light"
      className={resume.frame}
    >
      <Title />
      <ColoredLine />
      <Typography
        variant="h3"
        className={resume.text}
      >
        Your awesome resume is just a few clicks away!
      </Typography>
    </Box>
  )
}

export default ResumePreview
