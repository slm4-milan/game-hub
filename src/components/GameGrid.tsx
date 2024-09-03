import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/use-games.ts";
import { GameCard } from "./GameCard.tsx";

export const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={4}
      spacing={10}
    >
      {error && <Text>{error}</Text>}
      {games.map((game) => (
        <GameCard key={game.id} game={game}></GameCard>
      ))}
    </SimpleGrid>
  );
};
