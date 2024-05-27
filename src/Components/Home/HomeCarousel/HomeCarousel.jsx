import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import "./homecarousel.css";
import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";

const homeData = [
  {
    id: 1,
    live: "",
    img: "https://e7.pngegg.com/pngimages/679/323/png-clipart-green-for-rent-sign-renting-house-apartment-room-rent-miscellaneous-text.png",
    title: "site 1",
    price: "209/mo",
  },
  {
    id: 2,
    live: "",
    img: "https://e7.pngegg.com/pngimages/679/323/png-clipart-green-for-rent-sign-renting-house-apartment-room-rent-miscellaneous-text.png",
    title: "site 2",
    price: "929/mo",
  },
  {
    id: 3,
    live: "",
    img: "https://e7.pngegg.com/pngimages/679/323/png-clipart-green-for-rent-sign-renting-house-apartment-room-rent-miscellaneous-text.png",
    title: "site 3",
    price: "809/mo",
  },
  {
    id: 4,
    live: "",
    img: "https://e7.pngegg.com/pngimages/679/323/png-clipart-green-for-rent-sign-renting-house-apartment-room-rent-miscellaneous-text.png",
    title: "Site 4",
    price: "809/mo",
  },
  {
    id: 5,
    live: "",
    img: "https://e7.pngegg.com/pngimages/679/323/png-clipart-green-for-rent-sign-renting-house-apartment-room-rent-miscellaneous-text.png",
    title: "Site 4",
    price: "809/mo",
  },


];

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 768, itemsToShow: 3, pagination: false },
  { width: 1200, itemsToShow: 4.5, pagination: false },
];

export default function HomeCarousel() {
  return (
    <div className="carousel-main">
      <div className="carousel-wrapper">
        <Box
          marginBottom={"5px"}
          marginLeft={{ base: "13%", sm: "22%", md: "12%", lg: "13%" }}
          textAlign={"left"}
          color={"#313131"}
        >
          <Text
            fontSize={"22px"}
            fontWeight={"600"}
            fontFamily={"Muli, sans-serif"}
          >
            You'll love to
          </Text>
          <Text fontSize={"22px"} fontFamily={"Muli, sans-serif"}>
            take rent your Home
          </Text>
          <Box
            backgroundColor={"#dc3236"}
            borderRadius={"5px"}
            width={"3em"}
            height={"2.5px"}
            bottom={"-12px"}
          ></Box>
        </Box>
        <Carousel breakPoints={breakPoints}>
          {homeData?.map((el) => (
            <Link key={el.id} style={{ textDecoration: "none" }} to="">
              <Box
                key={el.id}
                width={"265px"}
                height={"370px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                gap={"20px"}
                margin={"18px"}
                padding={"20px"}
                backgroundColor={"#fff"}
                boxShadow={
                  "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"
                }
                cursor={"pointer"}
              >
                <Box height={"222px"} width={"222px"}>
                  <Image
                    src={el.img}
                    alt="carousel-img"
                    height={"100%"}
                    width={"100%"}
                  />
                </Box>

                <Text
                  overflow={"hidden"}
                  fontSize={"18px"}
                  color={"#313131"}
                  fontFamily={"Muli,sans-serif"}
                  textAlign={"start"}
                >
                  {el.title}
                </Text>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Box textAlign={"left"}>
                    <Text fontSize={"12px"} color={"#BABABA"}>
                      Rent
                    </Text>
                    <Text fontSize={"13px"} color={"#313131"}>
                      ₹ {el.price}
                    </Text>
                  </Box>
                  <Link style={{ textDecoration: "none" }} href="/packages">
                    <Button
                      width={"92px"}
                      height={"33px"}
                      padding={"5px 15px"}
                      fontSize={"14px"}
                      border={" 1px solid #DC3226"}
                      backgroundColor={"transparent"}
                      fontWeight={"100"}
                      color={"#DC3226"}
                      borderRadius={"none"}
                      _hover={{
                        backgroundColor: "#DC3226",
                        textUnderlineOffset: "none",
                        color: "white",
                      }}
                    >
                      See more
                    </Button>
                  </Link>
                </Flex>
              </Box>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
