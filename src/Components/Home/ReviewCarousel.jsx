import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
// And react-slick as our Carousel Lib
import Slider from "react-slick";


const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function ReviewCarousel() {

  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%",sm:"90%", md: "50%"});
  const side = useBreakpointValue({ base: "5%", md: "40px",lg:"10%"});

  // This list contains all the data for carousels
  const cards = [
 
  ];

  return (
    <Box
      position={"relative"}
      height={{ xl: "536px", md: "536px" , base:"434px" }}
      width={{base:"90%", md:"65%", sm:"90%", lg:"70%"}}
      m="auto"
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    
   
    </Box>
  );
}
