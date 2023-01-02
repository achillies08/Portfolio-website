import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";
import data from "../Resources/data";

let brands = data.brands;

const Works = () => {
  return (
    <Box mr={{ xs: "2%", md: "0" }}>
      <Typography
        id="Brands"
        variant="h2"
        p={{ xs: "5%", md: "2%" }}
        pt={{ xs: "26%", md: "6%" }}
      >
        Industry Baby
      </Typography>
      <Box sx={{backgroundColor:"wheat"}} p="2%"  m={"5%"} mt={"0"} alignContent="center">
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignContent="center"
        >
          {brands.map((brand) => (
            <Grid item md={3} xs={6}>
              <img
                src={require(`../Resources/brands/${brand[1]}`)}
                alt={brand[0]}
                width="100px"
                height="100px"
                objectFit="cover"
              />
              <figcaption>
                <Typography variant="body2" sx={{ fontSize: "1.25rem", fontWeight:"500", color:"black" }}>
                  {brand[0]}
                </Typography>
              </figcaption>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Works;
