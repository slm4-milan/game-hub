import { Game } from "../hooks/use-games.ts";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList.tsx";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((platform) => platform.platform)}
        />
      </CardBody>
    </Card>
  );
};
