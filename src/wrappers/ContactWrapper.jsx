import { Box, Heading, Separator, Text } from "@chakra-ui/react";
import { BiLocationPlus, BiMailSend } from "react-icons/bi";
import { BsGithub, BsInstagram, BsTwitch } from "react-icons/bs";
import { FaBlogger } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { PiPhone } from "react-icons/pi";

const ContactWrapper = () => {
  return (
    <Box minH={"90vh"} display={"flex"} flexDir={"column"} gap={10}>
      <Box
        h={"70%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={{ base: "column-reverse", lg: "row" }}
      >
        <Box
          w={{ base: "100%", lg: "60%" }}
          h={{ base: "50%", lg: "100%" }}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={6}
          py={10}
          px={{ base: 10, lg: 40 }}
          fontSize={18}
          textAlign={"center"}
        >
          <Heading fontSize={{ base: 20, lg: 35 }}>CONTACT ME</Heading>
          <Text fontSize={{ base: 15, lg: 20 }}>
            If you have got some great project ideas or just want to chat, let's
            connect!
          </Text>
          <Separator w={"40%"} />
          <Box display={"flex"} flexDir={"column"} gap={2} color={"black"}>
            <Text
              bgColor={"beige"}
              p={4}
              borderRadius={20}
              fontSize={{ base: 11, lg: 16 }}
              display={"flex"}
              alignItems={"center"}
              gap={2}
            >
              <PiPhone />
              <span style={{ fontWeight: "bold" }}>Call Me:</span>{" "}
              +91-7758081301
            </Text>
            <Text
              bgColor={"beige"}
              p={4}
              borderRadius={20}
              display={"flex"}
              fontSize={{ base: 11, lg: 16 }}
              alignItems={"center"}
              gap={2}
            >
              <BiLocationPlus />
              <span style={{ fontWeight: "bold" }}>Locate Me:</span>
              Stony Brook, New York - NY 11794
            </Text>
            <Text
              bgColor={"beige"}
              p={4}
              borderRadius={20}
              fontSize={{ base: 11, lg: 16 }}
              display={"flex"}
              alignItems={"center"}
              gap={2}
            >
              <BiMailSend />
              <span style={{ fontWeight: "bold" }}>Mail Me:</span>{" "}
              aniket0130ak@gmail.com
            </Text>
          </Box>
        </Box>
        <Box
          w={{ base: "100%", lg: "40%" }}
          h={{ base: "50%", lg: "100%" }}
          display={"flex"}
          justifyContent={{ base: "center", lg: "flex-start" }}
          alignItems={"center"}
        >
          <Box
            p={{ base: 20, lg: 48 }}
            borderRadius={1000}
            background={`url(https://res.cloudinary.com/ducnpwkjo/image/upload/v1752575210/2_hmaoj7.jpg)`}
            backgroundSize={"cover"}
            backgroundPosition={"center"}
          ></Box>
        </Box>
      </Box>
      <Box
        h={"30%"}
        p={{ base: 5, lg: 0 }}
        display={"flex"}
        flexWrap={"wrap"}
        gap={{ base: 6, lg: 10 }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          p={{ base: 5, lg: 8 }}
          minW={{ base: 35, lg: 50 }}
          bgColor={"beige"}
          color={"black"}
          borderRadius={20}
          cursor={"pointer"}
          transition={"0.5s ease"}
          onClick={() =>
            window.open("https://www.linkedin.com/in/aniketkumar30", "_blank")
          }
          _hover={{
            bgColor: "red",
            scale: "1.1",
          }}
        >
          <Heading
            fontSize={{ base: 18, lg: 20 }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"column"}
            gap={2}
          >
            {" "}
            <LiaLinkedin size={30} /> LinkedIn
          </Heading>
        </Box>

        <Box
          p={{ base: 5, lg: 8 }}
          minW={{ base: 35, lg: 50 }}
          bgColor={"beige"}
          transition={"0.5s ease"}
          color={"black"}
          borderRadius={20}
          cursor={"pointer"}
          onClick={() => window.open("https://www.github.com/ak-301", "_blank")}
          _hover={{
            bgColor: "red",
            scale: "1.1",
          }}
        >
          <Heading
            fontSize={{ base: 18, lg: 20 }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"column"}
            gap={2}
          >
            {" "}
            <BsGithub size={30} /> GitHub
          </Heading>
        </Box>
        <Box
          p={{ base: 5, lg: 8 }}
          minW={{ base: 35, lg: 50 }}
          bgColor={"beige"}
          color={"black"}
          borderRadius={20}
          cursor={"pointer"}
          transition={"0.5s ease"}
          onClick={() =>
            window.open("https://www.twitch.tv/orion_infern0", "_blank")
          }
          _hover={{
            bgColor: "red",
            scale: "1.1",
          }}
        >
          <Heading
            fontSize={{ base: 18, lg: 20 }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"column"}
            gap={2}
          >
            {" "}
            <BsTwitch size={30} /> Twitch
          </Heading>
        </Box>
        <Box
          p={{ base: 5, lg: 8 }}
          minW={{ base: 35, lg: 50 }}
          bgColor={"beige"}
          color={"black"}
          borderRadius={20}
          transition={"0.5s ease"}
          cursor={"pointer"}
          onClick={() =>
            window.open("https://seekeraxis.blogspot.com", "_blank")
          }
          _hover={{
            bgColor: "red",
            scale: "1.1",
          }}
        >
          <Heading
            fontSize={{ base: 18, lg: 20 }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"column"}
            gap={2}
          >
            {" "}
            <FaBlogger size={30} /> Blogger
          </Heading>
        </Box>
        <Box
          p={{ base: 5, lg: 8 }}
          minW={{ base: 35, lg: 50 }}
          bgColor={"beige"}
          color={"black"}
          borderRadius={20}
          transition={"0.5s ease"}
          cursor={"pointer"}
          onClick={() =>
            window.open("https://www.instagram.com/mr.ak_301", "_blank")
          }
          _hover={{
            bgColor: "red",
            scale: "1.1",
          }}
        >
          <Heading
            fontSize={{ base: 18, lg: 20 }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"column"}
            gap={2}
          >
            {" "}
            <BsInstagram size={30} /> Instagram
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactWrapper;
