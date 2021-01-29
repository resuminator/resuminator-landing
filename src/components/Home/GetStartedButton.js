import React from "react"
import ActionButton from "../common/ActionButtons"

const GetStartedButton = ({ className }) => {
  return (
    <ActionButton
      className={className}
      text="Get Started Today"
      href="https://app.resuminator.in/signup"
    />
  )
}

export default GetStartedButton
