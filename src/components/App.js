import * as React from "react";
import "./App.css";
import { Box, CssBaseline } from "@mui/material";
import Bar from "./appbar";
import HomePage from "./homePage";
import Contact from "./contact";
import WorkTimeline from "./timeline";
import Works from "./works";
import Footer from "./footer";
import ThemeButton from "./themeButton";
import BestWork from "./bestWorks";
import renderContext from "./renderContext";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";

function App() {
  const [dark, setDark] = React.useState(false);

  return (
    <div className="App">
      <renderContext.Provider value={{ dark, setDark }}>
        <ThemeProvider theme={dark ? darkTheme : lightTheme}>
          <CssBaseline>
            <Bar />
            <Box sx={{ width: "100%", height: "100%" }}>
              <HomePage />
              <WorkTimeline />
              <BestWork/>
              <Works />
              <Contact />
              <ThemeButton />
              <Footer />
            </Box>
          </CssBaseline>
        </ThemeProvider>
      </renderContext.Provider>
    </div>
  );
}

export default App;
