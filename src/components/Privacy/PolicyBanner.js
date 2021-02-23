import { Box, IconButton, makeStyles, Typography } from "@material-ui/core"
import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import { GrClose } from "react-icons/gr"
import COOKIE_IMAGE from "../../images/arabica-144.png"
import glass from "../../styles/glass.module.css"
import shadow from "../../styles/shadow.module.css"

const COOKIE_POLICY = "https://resuminator.in/cookies-policy/"
const PRIVACY_POLICY = "https://resuminator.in/privacy-policy/"

const useStyles = makeStyles({
  root: {
    bottom: 8,
    width: "80%",
    display: "flex",
    flexDirection: "column",
    zIndex: "1000",
    position: "fixed",
    alignSelf: "center",
    padding: "2rem",
    borderRadius: "0.5rem",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    right: 18,
    top: 18,
  },
  image: {
    padding: "0rem 1rem 0 1rem",
    height: "2rem",
    width: "auto",
  },
  text: {
    color: "#F8F8FF",
    fontFamily: "Inter",
    fontWeight: 400,
  },
})

const PolicyBanner = () => {
  const classes = useStyles()
  let initial = false
  if (typeof window !== "undefined") {
    initial = JSON.parse(window.localStorage.getItem("policy_accepted"))
  }
  const [policy_accepted, setAccepted] = useState(initial)

  const onClose = () => {
    setAccepted(true)
    if (typeof window !== "undefined") {
      window.localStorage.setItem("policy_accepted", JSON.stringify(true))
    }
  }

  const variants = {
    initial: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.5 } },
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {!policy_accepted ? (
        <motion.div
          key="privacy-banner"
          initial="initial"
          animate="visible"
          exit="exit"
          variants={variants}
          className={`${classes.root} ${glass.glass} ${shadow.shadow}`}
        >
          <IconButton size="small" className={classes.icon} onClick={onClose}>
            <GrClose size="1rem" />
          </IconButton>
          <Box className={classes.box}>
            <img className={classes.image} src={COOKIE_IMAGE} alt="cookies" />
            <Typography variant="subtitle2" className={classes.text}>
              Resuminator uses cookies to enhance your user experience. By
              using this website you agree to our cookie and privacy policy. To
              learn more about cookies and how your data is saved, read our{" "}
              <a
                href={COOKIE_POLICY}
                rel="noreferrer"
                target="_blank"
                style={{ color: "inherit" }}
              >
                cookie
              </a>{" "}
              and{" "}
              <a
                href={PRIVACY_POLICY}
                rel="noreferrer"
                target="_blank"
                style={{ color: "inherit" }}
              >
                privacy policy
              </a>
              .
            </Typography>
          </Box>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default PolicyBanner
