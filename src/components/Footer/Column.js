import { Box, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import styles from "../../styles/footer.module.css"

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.secondary.main,
  },
}))

const Column = ({ from, title, sametarget }) => {
  const classes = useStyles()

  return (
    <Box className={styles.columnList}>
      <Typography
        variant="h4"
        className={`${classes.title} ${styles.columnTitle}`}
      >
        {title}
      </Typography>
      {from.map(item => (
        <Typography
          key={item.text}
          component="a"
          variant="body1"
          href={item.link}
          target={sametarget ? "" : "_blank"}
          rel="noreferrer"
          color="textSecondary"
          className={styles.listItem}
        >
          {item.text}
        </Typography>
      ))}
    </Box>
  )
}

export default Column
