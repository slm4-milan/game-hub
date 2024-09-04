import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/use-games.ts";
import { GameCard } from "./GameCard.tsx";
import { GameCardSkeleton } from "./GameCardSkeleton.tsx";

export const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={4}
      spacing={10}
    >
      {error && <Text>{error}</Text>}
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardSkeleton key={skeleton}></GameCardSkeleton>
        ))}
      {games.map((game) => (
        <GameCard key={game.id} game={game}></GameCard>
      ))}
    </SimpleGrid>
  );
};
