import {
  Box,
  Button,
  Group,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import AboutBG from "../assets/about-bg.jpg";
import {
  DiAws,
  DiCss3,
  DiDart,
  DiDatabase,
  DiFirebase,
  DiGit,
  DiJavascript,
  DiLinux,
  DiPython,
  DiReact,
} from "react-icons/di";

const AboutWrapper = () => {
  return (
    <Box
      p={20}
      display={"flex"}
      h={"100vh"}
      flexDir={"column"}
      alignItems={"flex-end"}
      backgroundImage={`url(${AboutBG})`}
      backgroundSize={"cover"}
      backgroundPosition={{ base: "bottom", xs: "left" }}
      gap={10}
    >
      <Box
        width={{ sm: "65%", lg: "50%" }}
        display={"flex"}
        flexDir={"column"}
        gap={10}
        justifyContent={"center"}
        // alignItems={"center"}
      >
        <Heading fontSize={{ sm: 20, lg: 30 }}>Who's the guy on stage?</Heading>
        <Text fontSize={8}>
          Hi, I'm Aniket Kumar, a passionate and versatile Data Science
          post-graduate student at Stony Brook University with a strong
          foundation in software development, machine learning, and cloud
          technologies.
          <br />
          <br /> I've worked as a Trainee Engineer at NTT DATA, where I
          automated data workflows using Python and SQL and supported SAP
          systems for clients like Nuvama. I've also interned in Core Python at
          Dezignolics and AWS Cloud through AICTE, building scalable,
          cloud-ready solutions. My projects reflect a passion for solving
          real-world problems, including Sentiment Analysis and Customer
          Segmentation, Heart Stroke Prediction, Mental Health Platforms, and
          IoT-based apps like Intelli-Home. I've also built full-stack systems
          like the NailArt Booking Platform and civic apps like TraffPort.
          Proficient in Python, SQL, AWS, React, Flutter, TensorFlow, and more,
          I'm currently focused on mastering AI/ML, Big Data, and Cloud
          Architecture to grow into roles like Data Scientist or AI Engineer.
          <br /> <br /> When I'm not immersed in code or data, you'll find me
          streaming on Twitch, solving chess puzzles, or vibing to music with
          friends, because I believe creativity is just as important as logic.
        </Text>
        <Group display={"flex"} flexWrap={"wrap"}>
          <DiReact size={20} />
          <DiPython size={20} />
          <DiJavascript size={20} />
          <DiCss3 size={20} />
          <DiDatabase size={20} />
          <DiDart size={20} />
          <DiAws size={20} />
          <DiLinux size={20} />
          <DiGit size={20} />
          <DiFirebase size={20} />
          <Button
            onClick={() =>
              window.open(
                "https://res.cloudinary.com/ducnpwkjo/raw/upload/v1752580558/RESUME_ANIKET_KUMAR_bm7glq.docx",
                "_blank"
              )
            }
          >
            Resume
          </Button>
        </Group>
      </Box>
    </Box>
  );
};

export default AboutWrapper;
