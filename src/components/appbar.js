import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../Resources/logo.png";
import DownloadIcon from "@mui/icons-material/Download";
import { Dialog } from "@mui/material";
import renderContext from "./renderContext";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";
import Resume from "../Resources/manish-pandey.pdf";

const pages = [
  "Home",
  "Work History",
  "My Works",
  "Brands",
  "Contact Me",
  // "Testimonials",
];

function Bar() {
  const [open, setOpen] = React.useState(false);
  const { dark } = React.useContext(renderContext);

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton href="#Home">
            <Avatar
              alt="Manish"
              src={logo}
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                backgroundColor: "black",
              }}
            />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#Home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MANISH
          </Typography>

          {/* MOBILE */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setOpen(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <ThemeProvider theme={dark ? darkTheme : lightTheme}>
                <Dialog
                  open={open}
                  onClose={() => setOpen(false)}
                  onClick={() => setOpen(false)}
                  style={{ justifyContent: "center", alignItems: "center" }}
                  PaperProps={{
                    sx: {
                      backgroundColor: "rgba(0,0,0,0.4)",
                      height: "80%",
                      width: "80%",
                    },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page}
                      sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: "20%",
                      }}
                    >
                      <Button href={"#" + page}>
                        <Typography textAlign="center">{page}</Typography>
                      </Button>
                    </MenuItem>
                  ))}
                  <IconButton
                    size="large"
                    onClick={() => setOpen(false)}
                    sx={{ right: "0" }}
                  >
                    <CloseIcon color="primary" />
                  </IconButton>
                </Dialog>
              </ThemeProvider>
            </Menu>
          </Box>
          <IconButton href="/">
            <Avatar
              alt="Manish"
              src={logo}
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                backgroundColor: "black",
              }}
            />
          </IconButton>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MANISH
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                href={"#" + page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box pr={"2%"} sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton href={Resume} download={"Resume.pdf"}>
              <DownloadIcon sx={{ color: "white" }} fontSize="large" />
            </IconButton>
          </Box>
          <Box pr={"2%"} sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              variant="outlined"
              endIcon={<DownloadIcon sx={{ color: "white" }} />}
              href={Resume}
              download={"manish-pandey.pdf"}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "1.25em",
                  fontWeight: 700,
                  fontFamily: "monospace",
                }}
              >
                Resume
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Bar;
