import { Box, Kbd, Link } from "@chakra-ui/react";

export const Header = () => {
  return (
    <>
      <Box py={6} px={20} display={"flex"} justifyContent={"space-between"}>
        <div className="logo">
          <Kbd>Aniket Kumar</Kbd>
        </div>
        <Box className="navitems" display={"flex"} gap={10}>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </Box>
      </Box>
    </>
  );
};
