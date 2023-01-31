import { Typography, Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../Resources/data";
import TestCard from "./testCard";

const Testimonials = () => {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    autoplay: false,
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
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const testimonials = data.testimonial
  return (
    <>
      <Box
        height={{ md: "100vh" }}
        mr={{ xs: "2%", md: "0" }}
        pb={"25%"}
        alignItems="center"
        justifyContent={"center"}
      >
        <Typography
          id="Testimonials"
          variant="h2"
          p={{ xs: "5%", md: "2%" }}
          pt={{ xs: "26%", md: "6%" }}
        >
          Testimonials
        </Typography>

        <Box width={"80%"} ml={"10%"}>
          <Slider {...settings}>{testimonials.map(TestCard)}</Slider>
        </Box>
      </Box>
    </>
  );
};

export default Testimonials;
