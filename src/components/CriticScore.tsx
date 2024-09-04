import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

export const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 65 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize={15}>
      {score}
    </Badge>
  );
};
