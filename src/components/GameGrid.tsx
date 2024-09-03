import { Text } from "@chakra-ui/react";
import useGames from "../hooks/use-games.ts";

export const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <ul>
      {error && <Text>{error}</Text>}
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};
