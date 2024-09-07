import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App.tsx";

interface Props {
  gameQuery: GameQuery;
}

export const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;
  return (
    <>
      <Heading marginY={5} as={"h1"}>
        {heading}
      </Heading>
    </>
  );
};
