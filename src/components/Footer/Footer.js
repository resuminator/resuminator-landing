/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { FiGithub } from "react-icons/fi"
import styles from "../../styles/footer.module.css"
import { RESUMINATOR_REPO_LINK } from "../Constants"
import Column from "./Column"
import { Legal, OpenSource } from "./ColumnsList"
import InfoBanner from "./InfoBanner"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
}))

function Footer() {
  const classes = useStyles()

  return (
    <footer className={`${classes.root} ${styles.root}`}>
      <Box id="columns" className={styles.columns}>
        <InfoBanner />
        <Column from={OpenSource} title="Open Source" />
        <Column from={Legal} title="Legal" />
      </Box>
      <Typography
        component="a"
        variant="body1"
        href={RESUMINATOR_REPO_LINK}
        color="textSecondary"
        className={styles.github}
      >
        <FiGithub style={{ marginRight: "0.5rem" }} /> GitHub
      </Typography>
    </footer>
  )
}

export default Footer
