import { Typography, Box } from "@mui/material";
import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../Resources/data";
import WorkCard from "./workCard";
import "./Cards.css";

const bestWorks = data.bestWorks;

const BestWork = () => {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    autoplay: true,
    centerPadding: "60px",
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots:false
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
        },
      },
    ],
  };

  return (
    <Box height={{ md: "100vh" }} mr={{ xs: "2%", md: "0" }}>
      <Typography
        id="My Works"
        variant="h2"
        p={{ xs: "5%", md: "2%" }}
        pt={{ xs: "20%", md: "6%" }}
      >
        Boulevard of{" "}
        <Typography
          variant="h2"
          sx={{
            display: "inline",
            textDecoration: "line-through",
            fontStyle: "italic",
            fontWeight: "200",
          }}
        >
          broken
        </Typography>{" "}
        Dreams
      </Typography>
      <Box width={"80%"} ml={"10%"}>
        <Slider {...settings}>{bestWorks.map(WorkCard)}</Slider>
      </Box>
    </Box>
  );
};

export default BestWork;
