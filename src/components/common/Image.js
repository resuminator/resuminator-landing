import { Box, Typography } from "@material-ui/core"
import React from "react"
import Img from "gatsby-image"

const Image = ({ data, alt, author, source, caption, className }) => {
  return (
    <Box className={className} display="flex" flexDirection="column">
      <Img fixed={data.file.childImageSharp.fixed} alt={alt} />
      <Typography variant="caption" color="textSecondary">
        {author ? `Illustration by ${author} from ${source}` : caption}
      </Typography>
    </Box>
  )
}

export default Image
