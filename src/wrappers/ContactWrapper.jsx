import { Box, Heading, Separator, Text } from "@chakra-ui/react";
import { BiLocationPlus, BiMailSend } from "react-icons/bi";
import { BsGithub, BsInstagram, BsTwitch } from "react-icons/bs";
import { FaBlogger } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { PiPhone } from "react-icons/pi";

const ContactWrapper = () => {
  return (
    <Box h={"100vh"} display={"flex"} flexDir={"column"}>
      <Box h={"70%"} display={"flex"}>
        <Box
          w={"50%"}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={6}
          px={40}
          fontSize={18}
          textAlign={"center"}
        >
          <Heading fontSize={40}>CONTACT ME</Heading>
          <Text>
            If you have got some great project ideas or just want to chat, let's
            connect!
          </Text>
          <Separator w={"40%"} />
          <Box display={"flex"} flexDir={"column"} gap={2} color={"black"}>
            <Text
              bgColor={"beige"}
              p={4}
              borderRadius={20}
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
          w={"50%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            p={48}
            borderRadius={1000}
            background={`url(https://res.cloudinary.com/ducnpwkjo/image/upload/v1752575210/2_hmaoj7.jpg)`}
            backgroundSize={"cover"}
            backgroundPosition={"center"}
          ></Box>
        </Box>
      </Box>
      <Box
        h={"30%"}
        display={"flex"}
        gap={10}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          p={10}
          minW={60}
          bgColor={"beige"}
          color={"black"}
          borderRadius={20}
          cursor={"pointer"}
          onClick={() =>
            window.open("https://www.linkedin.com/in/aniketkumar30", "_blank")
          }
        >
          <Heading
            fontSize={20}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"column"}
            gap={2}
          >
            {" "}
            <LiaLinkedin size={50} /> LinkedIn
          </Heading>
        </Box>

        <Box
          p={10}
          minW={60}
          bgColor={"beige"}
          color={"black"}
          borderRadius={20}
          cursor={"pointer"}
          onClick={() => window.open("https://www.github.com/ak-301", "_blank")}
        >
          <Heading
            fontSize={20}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"column"}
            gap={2}
          >
            {" "}
            <BsGithub size={50} /> GitHub
          </Heading>
        </Box>
        <Box
          p={10}
          minW={60}
          bgColor={"beige"}
          color={"black"}
          borderRadius={20}
          cursor={"pointer"}
          onClick={() =>
            window.open("https://www.twitch.tv/orion_infern0", "_blank")
          }
        >
          <Heading
            fontSize={20}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"column"}
            gap={2}
          >
            {" "}
            <BsTwitch size={50} /> Twitch
          </Heading>
        </Box>
        <Box
          p={10}
          minW={60}
          bgColor={"beige"}
          color={"black"}
          borderRadius={20}
          cursor={"pointer"}
          onClick={() =>
            window.open("https://seekeraxis.blogspot.com", "_blank")
          }
        >
          <Heading
            fontSize={20}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"column"}
            gap={2}
          >
            {" "}
            <FaBlogger size={50} /> Blogger
          </Heading>
        </Box>
        <Box
          p={10}
          minW={60}
          bgColor={"beige"}
          color={"black"}
          borderRadius={20}
          cursor={"pointer"}
          onClick={() =>
            window.open("https://www.instagram.com/mr.ak_301", "_blank")
          }
        >
          <Heading
            fontSize={20}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"column"}
            gap={2}
          >
            {" "}
            <BsInstagram size={50} /> Instagram
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactWrapper;
