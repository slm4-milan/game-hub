import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/game-hub.webp";

export const NavBar = () => {
  return (
    <HStack>
      <Image boxSize={"3em"} src={logo}></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};
