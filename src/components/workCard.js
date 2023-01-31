import * as React from "react";
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

const WorkCard = (work) => {
  const [open, setOpen] = React.useState(false);
  const { dark } = React.useContext(renderContext);
  return (
    <>
      <div className="Card">
        <Card
          sx={{
            width: { xs: "150px", md: "300px" },
            height: { xs: "175px", md: "350px" },
          }}
          elevation={2}
        >
          <CardActionArea
            sx={{
              width: { xs: "150px", md: "300px" },
              height: { xs: "150px", md: "300px" },
            }}
            onClick={() => setOpen(true)}
          >
            <CardMedia component={"img"} src={work[2][0]} alt="..." />
            <Typography
              variant="h4"
              sx={{
                p: "1%",
                fontSize: { xs: "1rem", md: "2rem" },
                fontWeight: "bold",
                fontStyle: "italic",
                fontFamily: "oswald",
              }}
            >
              {work[0]}
            </Typography>
          </CardActionArea>
        </Card>
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
              {work[0]}
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
              {work[1]}
            </Typography>
            <Grid
              container
              justifyContent="center"
              alignContent="center"
              // pl={{ xs: "12%", md: "6%" }}
              spacing={2}
              pb = "2%"
            >
              {/* Video */}
              {work[3].map((item) => (
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
              {work[2].map((item) => (
                <Grid item spacing={2}>
                  <Card p="1%" pb={"10%"}>
                    <CardActionArea >
                      <CardMedia
                        component={"img"}
                        src={item}
                        alt="..."
                        sx={{
                          width: { xs: "150px", md: "250px" },
                          height: { xs: "150px", md: "250px" },
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

export default WorkCard;
