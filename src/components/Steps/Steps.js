import { IconButton, makeStyles } from "@material-ui/core"
import { motion, AnimateSharedLayout } from "framer-motion"
import React, { useEffect, useState } from "react"
import { GiCircle, GiPlainCircle } from "react-icons/gi"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"

const useStyles = makeStyles(theme => ({
  btnGroup: {
    padding: theme.spacing(2),
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  iconButton: {
    fontSize: "1rem",
    color: theme.palette.primary.main,
    padding: "0.4rem",
  },
}))

const Steps = () => {
  const classes = useStyles()
  const [step, setStep] = useState(1)
  const TOTAL_STEPS = 3

  useEffect(() => {
    const interval = setInterval(
      () =>
        setStep(currStep => {
          if (currStep >= TOTAL_STEPS) return 1
          if (currStep < TOTAL_STEPS) return currStep + 1
          return currStep
        }),
      5000
    )

    return () => clearInterval(interval)
  }, [])

  const renderSteps = stepState => {
    switch (stepState) {
      case 1:
        return <Step1 typewriter={typewriter} />
      case 2:
        return <Step2 typewriter={typewriter} />
      case 3:
        return <Step3 typewriter={typewriter} />
      default:
        return null
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async function typewriter(string, setState) {
    const typeArray = string.split("")
    for (let i = 0; i < typeArray.length; ++i) {
      setState(state => state.concat(typeArray[i]))
      await sleep(200 / (1.1 * i))
    }
  }

  const renderButton = item => {
    return item === step ? (
      <IconButton className={classes.iconButton} key={item}>
        <GiPlainCircle />
      </IconButton>
    ) : (
      <IconButton
        className={classes.iconButton}
        key={item}
        onClick={() => setStep(item)}
      >
        <GiCircle />
      </IconButton>
    )
  }

  return (
    <React.Fragment>
      <AnimateSharedLayout type="switch">
        <motion.div layout id="steps">
          {renderSteps(step)}
        </motion.div>
      </AnimateSharedLayout>
      <AnimateSharedLayout type="switch">
        <motion.div layout layoutId="buttons" className={classes.btnGroup}>
          {[1, 2, 3].map(item => renderButton(item))}
        </motion.div>
      </AnimateSharedLayout>
    </React.Fragment>
  )
}

export default Steps
