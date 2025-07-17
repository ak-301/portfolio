import {
  Button,
  Card,
  Icon,
  Image,
  Text,
  Dialog,
  Portal,
  CloseButton,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";

const CustomCard = ({ index, image, title, shortDesc, description, link }) => {
  return (
    <Card.Root
      border={"4px solid gold"}
      maxW={{ base: "md", lg: "sm" }}
      minH={{ base: "50vh", lg: "65vh" }}
      overflow="hidden"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      borderRadius={30}
      // alignItems="center"
    >
      <Image
        aspectRatio={4 / 2}
        src={image}
        alt={`${title.split()[0]} project image`}
      />
      <Card.Body flex={2} gap="2">
        <Card.Title>{title}</Card.Title>
        <Card.Description>{shortDesc}</Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Dialog.Root key={index} size={"lg"}>
          <Dialog.Trigger asChild>
            <Button variant="outline" size={"lg"}>
              Know More
            </Button>
          </Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>{title}</Dialog.Title>
                </Dialog.Header>
                <Dialog.Body>
                  {description.map((desc, idx) => (
                    <>
                      <p key={idx}>{desc}</p>
                      <br />
                    </>
                  ))}
                  {/* <p>{description}</p> */}
                </Dialog.Body>
                <Dialog.Footer>
                  <Dialog.ActionTrigger asChild>
                    <Button variant="outline">Close</Button>
                  </Dialog.ActionTrigger>
                </Dialog.Footer>
                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Dialog.CloseTrigger>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
        <Button variant="solid" onClick={() => window.open(link, "_blank")}>
          <BsGithub />
          Source Code
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default CustomCard;
