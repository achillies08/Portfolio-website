import { Avatar, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import srh from "../Resources/srh.png";
import kuhl from "../Resources/brands/kuhl.png";
import bannerGif from "../Resources/banner.gif";
import banner from "../Resources/bannerbg.jpg";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        height: "380px",
        width: "100%",
        color: "#f5f5f5",
        marginBottom: "25%",
      }}
    >
      <Grid
        container
        direction={{ xs: "column", md: "row-reverse" }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={12} md={9}>
          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            justifyContent="center"
            p={"5%"}
          >
            <Typography variant="h2">Kühl X Sunrisers Hyderabad</Typography>
            <Typography variant="h4">Campaign In Progress..</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}>
          <img
            alt="SRH"
            src={bannerGif}
            width={"100%"}
            style={{ zIndex: 10, paddingLeft: "0px", marginLeft: "0px" }}
          />
        </Grid>
      </Grid>
    </div>
    // <Box
    //   style={{
    //     backgroundImage: `url(${banner})`,
    //     backgroundSize: "cover",
    //     height: "369px",
    //     width: "100%",
    //     color: "#f5f5f5",
    //   }}
    // >
    //   <Grid
    //     id="banner"
    //     container
    //     direction={{ xs: "column", md: "row" }}
    //     pt={{ xs: "20%", md: "8%" }}
    //     justifyContent="center"
    //     alignItems="center"
    //   >
    //     <Grid item xs={12} md={9}>
    //       <Stack
    //         direction="column"
    //         spacing={2}
    //         alignItems="center"
    //         justifyContent="center"
    //       >
    //         <Typography variant="h2">Kühl X Sunrisers Hyderabad</Typography>
    //         <Typography variant="h4">Campaign In Progress..</Typography>
    //       </Stack>
    //     </Grid>
    //     <Grid item xs={12} md={3}>
    //       <img
    //         alt="SRH"
    //         src={bannerGif}
    //         width={"100%"}
    //         style={{ zIndex: 10, paddingLeft: "0px", marginLeft: "0px" }}
    //       />
    //     </Grid>
    //   </Grid>
    // </Box>
  );
};

export default HomePage;
