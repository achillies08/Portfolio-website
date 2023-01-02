import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import renderContext from "./renderContext";

const Contact = () => {
  const { dark } = React.useContext(renderContext);

  return (
    <Box
      height={{ md: "100vh" }}
      mr={{ xs: "2%", md: "0" }}
      pb={"25%"}
      alignItems="center"
      justifyContent={"center"}
    >
      <Typography
        id="Contact Me"
        variant="h2"
        p={{ xs: "5%", md: "2%" }}
        pt={{ xs: "26%", md: "6%" }}
      >
        Here's my Number, Call me Maybe?
      </Typography>
      <Box mt={{ xs: "8%", md: "3%" }} ml={{ xs: "15%", md: "40%" }}>
        <Stack direction={"row"} pb="5%" spacing={2} alignItems="center">
          <CallIcon fontSize="large" />
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: "16px", md: "24px" } }}
          >
            : 8851745482 | 9456631784
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={2} alignItems="center">
          <EmailIcon fontSize="large" />
          <Button variant="text" href="mailto:manishpandey0704@gmail.com">
            <Typography
              variant="body2"
              color={dark ? "#9fa2a5" : "black"}
              sx={{ fontSize: { xs: "16px", md: "24px" } }}
              textTransform="lowercase"
            >
              : manishpandey0704@gmail.com
            </Typography>
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Contact;
