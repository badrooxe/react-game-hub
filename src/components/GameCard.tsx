import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Results } from "../hooks/useGames";

interface GameCardProps {
  game: Results;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10}>
      <Image
        borderTopRadius={10}
        objectFit={"cover"}
        height={150}
        width={285}
        src={game.background_image}
      />
      <CardBody>
        <Heading size={"sm"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
