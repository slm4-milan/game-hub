import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames.ts";
import { GameCard } from "./GameCard.tsx";
import { GameCardSkeleton } from "./GameCardSkeleton.tsx";
import { GameCardContainer } from "./GameCardContainer.tsx";
import { Genre } from "../hooks/useGenres.ts";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

export const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={2}
      spacing={3}
    >
      {error && <Text>{error}</Text>}
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton></GameCardSkeleton>
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};
