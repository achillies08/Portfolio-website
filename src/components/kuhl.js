import { Stack } from "@mui/system";
import React from "react";
import bannerGif from "../Resources/banner.gif";
import banner from "../Resources/bannerbg.jpg";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Divider,
  Typography,
  Card,
  CardActionArea,
  Grid,
  CardMedia,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import ThemeButton from "./themeButton";
import renderContext from "./renderContext";
import data from "../Resources/data";

const HomePage = () => {
  const [open, setOpen] = React.useState(false);
  const { dark } = React.useContext(renderContext);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          height: "380px",
          width: "100%",
          color: "#f5f5f5",
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
              <Typography variant="h2">Kühl X SRH</Typography>
              <Typography variant="h4">{data.bestWorks[0][0]}</Typography>
              <Button
                variant="contained"
                style={{ marginTop: "5%" }}
                onClick={() => setOpen(true)}
              >
                Read More
              </Button>
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
      <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
        <ThemeButton style={{ right: "1%" }} />
        <DialogContent sx={{ p: "0%", pt: "1%" }}>
          <DialogContentText
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundSize: "100%",
              objectFit: "fill",
            }}
          >
            <Typography
              fontFamily={"Playfair Display"}
              variant="h4"
              textAlign="center"
              color={dark ? "#9fa2a5" : "black"}
              pb="1%"
            >
              {data.bestWorks[0][0]}
            </Typography>
            <Box
              display={{ xs: "none", md: "inline-flex" }}
              position="fixed"
              right={"5%"}
              top={"2%"}
            >
              <IconButton onClick={() => setOpen(false)}>
                <CancelRoundedIcon color="primary" />
              </IconButton>
            </Box>
            <Divider variant="middle" />
            <Typography
              sx={{ p: "4%", fontSize: "1em" }}
              variant="body2"
              textAlign={"center"}
              color={dark ? "#9fa2a5" : "black"}
              fontFamily="montserrat"
            >
              {data.bestWorks[0][1]}
            </Typography>
            <Grid
              container
              justifyContent="center"
              alignContent="center"
              // pl={{ xs: "12%", md: "6%" }}
              spacing={2}
              pb="2%"
            >
              {/* Video */}
              {data.bestWorks[0][3].map((item) => (
                <Grid item spacing={2}>
                  <Card p="1%">
                    <CardMedia
                      component={"video"}
                      src={item}
                      alt="..."
                      controls="true"
                      sx={{
                        width: { xs: "150px", md: "250px" },
                        height: { xs: "150px", md: "250px" },
                      }}
                    />
                  </Card>
                </Grid>
              ))}
              {/* Images */}
              {data.bestWorks[0][2].map((item) => (
                <Grid item spacing={2}>
                  <Card p="1%" pb={"10%"}>
                    <CardActionArea>
                      <CardMedia
                        component={"img"}
                        src={item}
                        alt="..."
                        sx={{
                          width: { xs: "150px", md: "250px" },
                        }}
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box
              display={{ xs: "flex", md: "none" }}
              // pl={{ xs: "36%", md: "45%" }}
              sx={{ position: "fixed", bottom: "3%", left: "42.5%" }}
            >
              <Button
                variant="contained"
                size="small"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HomePage;
