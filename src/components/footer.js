import * as React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton, Stack, Box, Tooltip, Typography } from "@mui/material";
import hh247 from "../Resources/hh247.png";

const Footer = () => {
  return (
    <Box
      position={"fixed"}
      alignContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "rgb(0,0,0)",
        bottom: "0%",
        width: "100%",
        height: "8%",
      }}
    >
      <Stack
        direction="row"
        spacing={4}
        alignItems="center"
        justifyContent="center"
        pt={{ xs: "5px", md: "7px" }}
      >
        <Typography variant="body2" sx={{color:"whitesmoke"}}>Visit me at: </Typography>
        <Tooltip title="HipHop24x7">
          <IconButton
            aria-label="Website"
            href="https://hiphop24x7.com/"
            edge="end"
            target="_blank"
            sx={{
              color: "#f2205a",
              width: "50",
              height: "20",
            }}
          >
            <img src={hh247} alt="HipHop24x7" width={"50"} height={"20"} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Instagram">
          <IconButton
            aria-label="instagram"
            size="large"
            href="https://www.instagram.com/iam_bunty"
            edge="end"
            target="_blank"
            sx={{ color: "#f2205a" }}
          >
            <InstagramIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <IconButton
            aria-label="linkedin"
            size="large"
            href="https://www.linkedin.com/in/manish-pandey-b3826b88"
            edge="end"
            target="_blank"
            sx={{ color: "#0a66c2" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default Footer;
