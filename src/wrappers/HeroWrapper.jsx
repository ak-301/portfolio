import {
  AvatarGroup,
  Avatar,
  Box,
  Group,
  Heading,
  Text,
  Badge,
  Image,
} from "@chakra-ui/react";
import Aniket from "../assets/Aniket.png";
import { Link } from "react-scroll";

const HeroWrapper = () => {
  return (
    <>
      <Box
        // pl={20}
        display={"flex"}
        justifyContent={"center"}
        // alignItems={"center"}
        bgColor={"rgba(0,0,0,0.6)"}
        h={"100vh"}
      >
        <Box
          // w={"65%"}
          //   bgColor={"white"}
          display={"flex"}
          flexDirection={"column"}
          gap={{ base: 5, lg: 8 }}
          // border={"10px solid green"}
          p={{ base: 10, lg: 20 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize={{ base: 40, lg: 50 }}>HELLO!</Heading>
          <Heading fontSize={{ base: 30, lg: 40 }}>I'M ANIKET KUMAR</Heading>
          <Heading fontSize={{ base: 30, lg: 40 }}>
            A Scientist for Data
          </Heading>
          <Group>
            <Link to="about" smooth={true} duration={500}>
              <Badge
                // colorPalette={"green"}
                bgColor={"whiteAlpha.400"}
                color={"orange"}
                size={{ base: "sm", lg: "lg" }}
                p={2}
                cursor={"pointer"}
              >
                About
              </Badge>
            </Link>
            <Link to="experience" smooth={true} duration={500}>
              <Badge
                // colorPalette={"green"}
                bgColor={"whiteAlpha.400"}
                color={"orange"}
                size={{ base: "sm", lg: "lg" }}
                p={2}
                cursor={"pointer"}
              >
                Experience
              </Badge>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              <Badge
                // colorPalette={"green"}
                bgColor={"whiteAlpha.400"}
                color={"orange"}
                size={{ base: "sm", lg: "lg" }}
                p={2}
                cursor={"pointer"}
              >
                Projects
              </Badge>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <Badge
                // colorPalette={"green"}
                bgColor={"whiteAlpha.400"}
                color={"orange"}
                size={{ base: "sm", lg: "lg" }}
                p={2}
                cursor={"pointer"}
              >
                Contact
              </Badge>
            </Link>
          </Group>
        </Box>
        {/* <Box
          w={"35%"}
          display={"flex"}
          //   bgColor={"red"}
          flexDirection={"column"}
          gap={10}
          justifyContent={"flex-end"}
          alignItems={"flex-end"}
          // p={20}
        >
          <Image src={Aniket} width={600} />
        </Box> */}
      </Box>
      <video
        autoPlay
        playsInline
        loop
        muted
        style={{
          height: "100vh",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          objectFit: "cover",
        }}
      >
        {" "}
        <source src="https://res.cloudinary.com/ducnpwkjo/video/upload/v1752566769/aniket_portfolio_gnh9jz.mov" />
      </video>
    </>
  );
};

export default HeroWrapper;
