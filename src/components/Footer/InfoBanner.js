import { Box, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { OWNER_PROFILE } from "../Constants"
import styles from "../../styles/footer.module.css"

const useStyles = makeStyles(theme => ({
  links: {
    fontFamily: "Inter",
    color: theme.palette.secondary.light,
    textDecoration: "none",
  },
}))

const InfoBanner = () => {
  const classes = useStyles()
  return (
    <Box className={styles.banner}>
      <Typography variant="h6" className={styles.brandName} color="secondary">
        Resuminator
      </Typography>
      <Typography
        color="textSecondary"
        variant="caption"
        className={styles.copyright}
      >
        Copyright &copy; {new Date().getFullYear()}{" "}
        <a href={OWNER_PROFILE} className={classes.links}>
          Vivek Nigam
        </a>{" "}
      </Typography>
      <Typography
        component="div"
        variant="body1"
        color="textSecondary"
        className={styles.subtext}
      >
        Resuminator is a project developed and maintained by Vivek Nigam.
      </Typography>
    </Box>
  )
}

export default InfoBanner
