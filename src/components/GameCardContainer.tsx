import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}
export const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width={"300px"} borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
};
