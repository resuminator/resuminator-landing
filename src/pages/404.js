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
    fontFamily: "Karla",
    paddingBottom: "3rem",
    fontSize: "2rem",
    color: theme.palette.grey[400],
    letterSpacing: "-0.15rem",
  },
  title: {
    fontFamily: "Karla",
    fontWeight: 700,
    fontSize:'5rem',
    color: theme.palette.secondary.light
  },
  subtitle: {
    color: theme.palette.primary.light,
    fontSize: "2rem",
    fontWeight: 400,
  },
  img: {
    paddingTop: "5rem",
    height:"18rem"
  },
  backBtn: {
    color: theme.palette.secondary.light,
    marginTop: "2rem",
    backgroundColor: theme.palette.primary.dark,
    border:"none",
    outline:"none",
    
  },
  btnText: {
    fontSize: "1.2rem",
    textTransform: "none",
    fontFamily: "Karla"
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
      <motion.Typography
        variant="h3"
        className={classes.logo}
        initial={{opacity:0,y:"-100px"}}
        animate={{opacity:1,y:0}}
        transition={{type:'spring',duration:3}}
        >
        Resuminator
      </motion.Typography>
      <motion.Typography 
        className={classes.title} 
        color="secondary" 
        variant="h1"
        initial={{x:'100vw'}}
        animate={{x:0}}
        transition={{type:'spring',duration:2}}
      >
        404
      </motion.Typography>
      <motion.Typography className={classes.subtitle} variant="h2"
         initial={{y:'300px'}}
        animate={{y:0}}
        transition={{type:'spring',duration:2}}>
        Oops, looks like you landed on a wrong address!
      </motion.Typography>
      <motion.Button 
        variant="text"
        className={classes.backBtn}
        href="/"
        initial={{y:'300px'}}
        animate={{y:0}}
        transition={{type:'spring',duration:2}}
        whileHover={{
            scale:1.1,
            textShadow:`0px 0px 16px #ff4081`,
            
            }}
      >
        <FiArrowLeft style={{fontSize:"1.2rem",marginRight:"4px"}}/>
        <Typography variant="button" className={classes.btnText} >
          
            Back to awesomeness
        </Typography>
      </motion.Button>
      <motion.img
        className={classes.img}
        src={NOT_FOUND_IMAGE}
        alt="Err_404_Not_Found"
        height="190rem"
        width="auto"
        style={{paddingTop: "2rem"}}
        initial={{y:'300px'}}
        animate={{y:0}}
        transition={{type:'spring',duration:2}}
      />
    </Box>
  )
}

export default Page404
