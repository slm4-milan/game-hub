import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/game-hub.webp";
import { ColorModeSwitch } from "./ColorModeSwitch.tsx";

export const NavBar = () => {
  return (
    <HStack p={3} justifyContent={"space-between"}>
      <Image boxSize={12} src={logo}></Image>
      <ColorModeSwitch />
    </HStack>
  );
};
