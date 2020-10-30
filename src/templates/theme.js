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
