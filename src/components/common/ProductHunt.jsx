import { motion } from "framer-motion"
import React from "react"

const ProductHunt = () => {
  const [lastYPos, setLastYPos] = React.useState(0)
  const [shouldShowActions, setShouldShowActions] = React.useState(false)

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY
      const isScrollingUp = yPos < lastYPos

      setShouldShowActions(isScrollingUp)
      setLastYPos(yPos)
    }

    window.addEventListener("scroll", handleScroll, false)

    return () => {
      window.removeEventListener("scroll", handleScroll, false)
    }
  }, [lastYPos])

  const style = {
    width: 250,
    height: 54,
    position: "fixed",
    bottom: "1rem",
    right: "2rem",
  }

  return (

      <motion.a
        href="https://www.producthunt.com/posts/resuminator?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-resuminator"
        target="_blank"
        rel="noreferrer"
        className="actions"
        initial={{ opacity: 0 }}
        animate={{ opacity: shouldShowActions ? 1 : 0 }}
        transition={{ opacity: { duration: 0.2 } }}
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=287639&theme=light"
          alt="Resuminator - Build beautiful single page resumes within minutes | Product Hunt"
          style={style}
        />
      </motion.a>
  )
}

export default ProductHunt
