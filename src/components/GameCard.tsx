import { Game } from "../hooks/useGames.ts";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList.tsx";
import { CriticScore } from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card height={"100%"}>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack marginBottom={3} justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform,
            )}
          />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};
