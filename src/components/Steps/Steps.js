import { Box } from "@material-ui/core"
import React from "react"
import Step1 from "./Step1"

const Steps = () => {

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async function typewriter(string, setState) {
    const typeArray = string.split("");
    for (let i = 0; i < typeArray.length; ++i) {
      setState(state => state.concat(typeArray[i]))
      await sleep(200 / (1.1 * i))
    }
  }

  return (
    <Box>
      <Step1 typewriter={typewriter} />
    </Box>
  )
}

export default Steps
