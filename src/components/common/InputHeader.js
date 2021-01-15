/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import section from "../../styles/section.module.css"

const useStyles = makeStyles(theme => ({
  subtitle: {
    color: theme.palette.text.secondary,
  },
}));

export const InputHeader = ({ heading, subtitle }) => {
  const classes = useStyles();
  return (
    <Box p={2} pt={8}>
      <Typography color="primary" variant="body1" className={section.inputHeading}>
        {heading}
      </Typography>
      <Typography
        variant="subtitle1"
        className={`${classes.subtitle} ${section.inputSubtitle}`}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};