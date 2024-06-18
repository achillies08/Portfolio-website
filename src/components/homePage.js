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
            <Typography variant="h5">
              and I am not just a copywriter.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              fontFamily={"Montserrat"}
              fontWeight={{ xs: "400", md: "600" }}
            >
              I'm not here to bore you with the usual copywriter spiel about
              being imaginative, creative, and compelling{" "}
              <Typography
                fontWeight={{ xs: "400", md: "600" }}
                fontFamily={"Montserrat"}
                sx={{
                  fontStyle: "italic",
                  display: "inline",
                }}
              >
                (which I am, by the way)
              </Typography>{" "}
              in the about me section. To demonstrate this I have made this
              portfolio. Storytelling is my thing! However you want to hear it,
              I'm ready to craft and tell your story.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              fontFamily={"Montserrat"}
              fontWeight={{ xs: "400", md: "600" }}
            >
              I fell in love with stories with the Happydent Ad -{" "}
              <Typography
                fontWeight={{ xs: "400", md: "600" }}
                fontFamily={"Montserrat"}
                sx={{
                  fontStyle: "italic",
                  display: "inline",
                }}
              >
                "Tera Mann Roshan, Tera Dil Roshan."
              </Typography>{" "}
              That ad ignited my passion for storytelling in advertising, and
              I've been hooked ever since. Whether it's ads films, posts, or
              through a notification, I'm all in.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              fontFamily={"Montserrat"}
              fontWeight={{ xs: "400", md: "600" }}
            >
              When I'm not writing, you'll find me chasing stories on my
              motorcycle or perfecting my dal makhani (which could compete with
              Moti Mahal's). Over my 7-year career working with brands from
              travel and tourism to SaaS, I've discovered that the best ideas
              are simple stories just waiting to be told.{" "}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
