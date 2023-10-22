import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Results } from "../hooks/useGames";
import PlateformIcon from "./PlateformIcon";

interface GameCardProps {
  game: Results;
}

const GameCard = ({ game }: GameCardProps) => {
  const platforms = game.platforms.map((platform) => platform.platform);

  return (
    <Card borderRadius={10} boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.4)"}>
      <Image
        borderTopRadius={10}
        objectFit={"cover"}
        height={150}
        width={285}
        src={game.background_image}
      />
      <CardBody padding={"15px"}>
        <Heading size={"sm"}>{game.name}</Heading>
        <PlateformIcon platforms={platforms}></PlateformIcon>
      </CardBody>
    </Card>
  );
};

export default GameCard;
