import {
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Results } from "../hooks/useGames";
import PlateformIcon from "./PlateformIcon";

interface GameCardProps {
  game: Results;
}

const GameCard = ({ game }: GameCardProps) => {
  const platforms = game.platforms.map((platform) => platform.platform);

  return (
    <Card
      _hover={{
        bg: "gray.100",
        color: "black",
        transition: "0.4s ease-in-out",
      }}
      borderRadius={10}
      boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.4)"}
    >
      <Image
        borderTopRadius={10}
        objectFit={"cover"}
        height={150}
        width={290}
        src={game.background_image}
      />
      <CardBody padding={"15px"}>
        <Heading size={"sm"}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlateformIcon platforms={platforms}></PlateformIcon>
          <Button variant="solid" color="#68D391" paddingX={"7px"}>
            {game.rating}/5
          </Button>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
