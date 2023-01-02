import * as React from "react";
import { Box } from "@mui/system";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton, Tooltip } from "@mui/material";
import renderContext from "./renderContext";

const ThemeButton = (r) => {
  const { dark, setDark } = React.useContext(renderContext);
  return (
    <Box
      position={"fixed"}
      sx={{
        backgroundColor: "rgb(255,255,255,.25)",
        borderTopLeftRadius: "25%",
        borderBottomLeftRadius: "25%",
        zIndex: 1,
        bottom: "10%",
        right: "0%",
      }}
    >
      <IconButton onClick={() => setDark(!dark)}>
        {dark ? (
          <Tooltip title="Switch to light mode">
            <LightModeIcon />
          </Tooltip>
        ) : (
          <Tooltip title="Switch to dark mode">
            <DarkModeIcon />
          </Tooltip>
        )}
      </IconButton>
    </Box>
  );
};

export default ThemeButton;
