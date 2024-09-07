import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/game-hub.webp";
import { ColorModeSwitch } from "./ColorModeSwitch.tsx";
import { SearchInput } from "./SearchInput.tsx";

export const NavBar = () => {
  return (
    <HStack p={3}>
      <Image boxSize={12} src={logo}></Image>
      <SearchInput></SearchInput>
      <ColorModeSwitch />
    </HStack>
  );
};
