import { Typography, Box } from "@mui/material";
import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../Resources/data";
import "./Cards.css";
import IframeCard from "./iframeCard";

const bestWorks = data.youtube;
function VideoAds() {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "100px",
    dots: true,
    infinite: true,
    autoplay: false,
    centerPadding: "0px",
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <Box mr={{ xs: "2%", md: "0" }}  mt={{ xs: "50%", md: "0" }}>
      <Typography
        id="My Works"
        variant="h2"
        p={{ xs: "5%", md: "2%" }}
        pt={{ xs: "10%", md: "5%" }}
      >
        The Showcase
      </Typography>
      <Box width={"80%"} ml={"10%"}>
        <Slider {...settings}>{bestWorks.map(IframeCard)}</Slider>
      </Box>
    </Box>
  );
}

export default VideoAds;
