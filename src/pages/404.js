/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, Button, makeStyles, Typography } from "@material-ui/core"
import NOT_FOUND_IMAGE from "../images/undraw_not_found_60pq.svg"
import React from "react"
import { FiArrowLeft } from "react-icons/fi"
import { motion } from 'framer-motion';
const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    width: "auto",
    backgroundColor: theme.palette.primary.dark,
    "@media (min-width:1280px)": {
      padding: "16rem",
      paddingTop: "8rem",
      paddingBottom: "8rem",
    },
  },
  logo: {
    fontFamily: "Manrope",
    paddingBottom: "3rem",
    fontSize: "2rem",
    color: theme.palette.grey[400],
    letterSpacing: "-0.15rem",
    width:"175px"
  },
  title: {
    fontFamily: "Manrope",
    fontWeight: 700,
    fontSize:"6rem",
    color: theme.palette.secondary.light,
    width:"175px"
  },
  subtitle: {
    color: theme.palette.primary.light,
    fontSize: "2rem",
    fontWeight: 400,
    "@media (min-width:300px)": {
      width:"100%",
    },

    "@media (max-width:300px)": {
      width:"85%"
    },
  },
  img: {
    
      display:"block",
      paddingTop: "2rem",
      
  },
  backBtn: {
    color: theme.palette.secondary.light,
    marginTop: "2rem"
  },
  btnText: {
    fontSize: "1.2rem",
    textTransform: "none",
    fontFamily: "Manrope"
  }
}))


function Page404() {
  const classes = useStyles()

  return (
      <Box
        display="flex"
        alignItems="start"
        flexDirection="column"
        className={classes.root}
        p={5}
        pt={10}
        >
      <motion.div
        initial={{y:"500px"}}
        animate={{y:0}}
        transition={{type:'spring',duration:2}}
        >
        <Typography variant="h3" className={classes.logo}>
          Resuminator
        </Typography>
        <Typography className={classes.title} color="secondary" variant="h1">
          404
        </Typography>
        <Typography className={classes.subtitle} variant="h2">
          Oops, looks like you landed on a wrong address!
        </Typography>
        <Button startIcon={<FiArrowLeft />} variant="text" className={classes.backBtn} href="/">
          <Typography variant="button" className={classes.btnText} >
              Back to awesomeness
          </Typography>
        </Button>
        <img className={classes.img} src={NOT_FOUND_IMAGE} alt="Err_404_Not_Found" height="190rem"/>
      </motion.div>
    </Box>
  )
}

export default Page404
