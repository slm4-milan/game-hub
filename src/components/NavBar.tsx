import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/game-hub.webp";
import { ColorModeSwitch } from "./ColorModeSwitch.tsx";
import { SearchInput } from "./SearchInput.tsx";

interface Props {
  onSearch: (searchText: string) => void;
}
export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack p={3}>
      <Image boxSize={12} src={logo}></Image>
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch />
    </HStack>
  );
};
