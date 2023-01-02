import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let darkTheme = createTheme({
  palette: {
    background: {
      default: "#222222",
      paper: "#222222",
    },
    primary: {
      main: "#f05327",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: "#9fa2a5",
      secondary: "6d6f72",
    },
  },
  typography: {
    h2: {
      fontFamily: "Playfair Display",
    },
    h5: {
      fontFamily: "Playfair Display",
    },
    h4: {
      fontFamily: "Playfair Display",
      letterSpacing: "0.08rem",
    },
    h6: {
      fontFamily: "Oswald",
    },
    body1: {
      fontFamily: "Oswald",
    },
    body2: {
      fontFamily: "Oswald",
    },
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0,0,0,0.9)",
        },
      },
    },
  },
});

darkTheme = responsiveFontSizes(darkTheme);

let lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2196f3",
    },
  },
  typography: {
    h2: {
      fontFamily: "Playfair Display",
    },
    h5: {
      fontFamily: "Playfair Display",
    },
    h4: {
      fontFamily: "Playfair Display",
      letterSpacing: "0.08rem",
    },
    h6: {
      fontFamily: "Oswald",
    },
    body1: {
      fontFamily: "Oswald",
    },
    body2: {
      fontFamily: "Oswald",
    },
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0,0,0,0.95)",
        },
      },
    },
  },
});

lightTheme = responsiveFontSizes(lightTheme);

export { lightTheme, darkTheme };
