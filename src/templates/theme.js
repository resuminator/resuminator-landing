/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 * 
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"

export const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: "Roboto",
    },
    spacing: 8,
    palette: {
      primary: {
        main: "#26317E",
      },
      secondary: {
        main: "#F9ADA8",
      },
      text: {
        primary: "#212121",
        secondary: "#919DF2",
      },
    },
  })
)
