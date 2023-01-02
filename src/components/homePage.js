import { Avatar, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import about from "../Resources/about.jpg";

const HomePage = () => {
  return (
    <Box>
      <Grid
        id="Home"
        container
        direction={{ xs: "column", md: "row" }}
        p={{ xs: "15%", md: "5%" }}
        pt={{ xs: "20%", md: "8%" }}
        justifyContent="center"
        alignItems="center"
        mb={{ md: "5%" }}
      >
        <Grid item xs={12} md={5}>
          <Box pl={{ xs: "0%", md: "0%" }}>
            <Avatar
              alt="Manish"
              src={about}
              sx={{ height: "100%", width: "50%", filter: "grayscale(100%)" }}
              pl={{ xs: "0%", md: "0" }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h2">My name is Manish Pandey</Typography>
            <Typography variant="h5">and I am not just a copywriter.</Typography>
            <Typography
              variant="body1"
              align="justify"
              fontFamily={"Montserrat"}
              fontWeight={{xs:"400",md:"600"}}
            >
              I'm not here to bore you with the regular copywriter's stuff like
              imaginative, creative, compelling, and other adjectives
              <Typography
                fontWeight={{xs:"400",md:"600"}}
                fontFamily={"Montserrat"}
                sx={{
                  fontStyle: "italic",
                  display: "inline",
                  pr: "5px",
                  pl: "5px",
                }}
              >
                (which I am btw)
              </Typography>
              in the about me section. For demonstrating this I have made this
              portfolio. Storytelling is what I want to do! Any way you want to
              hear, I'm ready to craft a story and tell it to you! Stories are
              the reason, I was first attracted to ads
              <Typography
               fontWeight={{xs:"400",md:"600"}}
                fontFamily={"Montserrat"}
                sx={{
                  fontStyle: "italic",
                  display: "inline",
                  pr: "5px",
                  pl: "5px",
                }}
              >
                (Happydent Ad-Tera Mann Roshan, Tera Dil Roshan)
              </Typography>
              and since then I wanted to tell stories.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              fontFamily={"Montserrat"}
              fontWeight={{xs:"400",md:"600"}}
            >
              I'm an avid motorcyclist, and cook & in the meantime, I am a
              copywriter with a passion to make it big and tell stories that are
              unforgettable. Working with brands ranging from travel and tourism
              to SAAS, I have learned that stories are limitless & there isn't a
              right or wrong way to do so.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
