import { Box, Heading } from "@chakra-ui/react";
import CustomCard from "../components/card";
import Aniket from "../assets/Aniket.png";
import Projects from "../data/projects";

const ProjectWrapper = () => {
  return (
    <Box p={20} display={"flex"} gap={10} flexDir={"column"}>
      <Heading fontSize={40}>Projects</Heading>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={10}
      >
        {Projects.map((project, index) => (
          <CustomCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            shortDesc={project.shortDesc}
            link={project.link}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectWrapper;
